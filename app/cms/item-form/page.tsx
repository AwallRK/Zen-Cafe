
"use client"


import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SakuraCursor from '@/components/sakura-cursor'
import { Skeleton } from '@/components/ui/skeleton'
import { ItemForm, ItemPreview } from '@/components/cms/ItemFormComponents'

interface MenuItem {
  id?: string
  name: string
  description: string
  price: string
  category: string
  ingredients: string[]
  image: string
  status: 'active' | 'inactive'
}


function ItemFormPageInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const itemId = searchParams.get('id')
  const mode = searchParams.get('mode') || 'add'

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string>('')

  const [formData, setFormData] = useState<MenuItem>({
    name: '',
    description: '',
    price: '',
    category: 'tea',
    ingredients: [''],
    image: '',
    status: 'active'
  })

  const [categories, setCategories] = useState<{ value: string; label: string; id: string }[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/category')
        const data = await res.json()
        if (Array.isArray(data)) {
          setCategories(
            data.map((cat: any) => ({
              value: cat.value || cat._id || cat.name,
              id: String(cat.id || cat._id || cat.value || cat.name),
              label: cat.label || cat.name
            }))
          )
        }
      } catch (err) {
        setCategories([])
      }
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('cms_auth_token')
    if (!token) {
      router.push('/cms/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const [isDataLoading, setIsDataLoading] = useState(false)
  useEffect(() => {
    const fetchMenuItem = async () => {
      if (mode === 'edit' && itemId) {
        setIsDataLoading(true)
        try {
          const res = await fetch(`/api/menu-item?id=${itemId}`)
          const data = await res.json()
          if (res.ok && data) {
            setFormData({
              id: data._id || data.id,
              name: data.name || '',
              description: data.description || '',
              price: data.price ? String(data.price).replace(/^¥/, '') : '',
              category: data.category || '',
              ingredients: Array.isArray(data.ingredients) && data.ingredients.length > 0 ? data.ingredients : [''],
              image: data.image || '',
              status: data.status || 'active',
            })
            setImagePreview(data.image || '')
          } else {
            toast.error('Failed to fetch menu item data')
          }
        } catch (err) {
          toast.error('Failed to fetch menu item data')
        } finally {
          setIsDataLoading(false)
        }
      }
    }
    fetchMenuItem()
  }, [mode, itemId])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev: MenuItem) => ({
      ...prev,
      [name as keyof MenuItem]: value
    }))
  }

  interface IngredientChangeEvent {
    index: number
    value: string
  }

  const handleIngredientChange = (index: number, value: string): void => {
    const newIngredients: string[] = [...formData.ingredients]
    newIngredients[index] = value
    setFormData((prev: MenuItem) => ({
      ...prev,
      ingredients: newIngredients
    }))
  }

  const addIngredient = () => {
    setFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, '']
    }))
  }

  interface RemoveIngredientFn {
    (index: number): void
  }

  const removeIngredient: RemoveIngredientFn = (index) => {
    if (formData.ingredients.length > 1) {
      const newIngredients: string[] = formData.ingredients.filter((_, i) => i !== index)
      setFormData((prev: MenuItem) => ({
        ...prev,
        ingredients: newIngredients
      }))
    }
  }

  interface ImageUploadEvent extends React.ChangeEvent<HTMLInputElement> { }

  interface FileReaderEvent extends ProgressEvent<FileReader> {
    target: FileReader & { result: string | ArrayBuffer | null }
  }

  const handleImageUpload = async (e: ImageUploadEvent) => {
    const file = e.target.files?.[0]
    if (!file) return
    setIsLoading(true)
    const formDataObj = new FormData()
    formDataObj.append('file', file)
    try {
      const res = await fetch('/api/upload-image', {
        method: 'POST',
        body: formDataObj,
      })
      const data = await res.json()
      if (res.ok && data.url) {
        setImagePreview(data.url)
        setFormData(prev => ({
          ...prev,
          image: data.url
        }))
        toast.success('Image uploaded!')
      } else {
        setImagePreview('')
        setFormData(prev => ({
          ...prev,
          image: ''
        }))
        toast.error(data.error || 'Image upload failed')
      }
    } catch (err) {
      setImagePreview('')
      setFormData(prev => ({
        ...prev,
        image: ''
      }))
      toast.error('Image upload failed')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<Element>) => {
    e.preventDefault()
    setIsLoading(true)

    // Validate form
    if (!formData.name || !formData.description || !formData.price) {
      toast.error('Please fill in all required fields')
      setIsLoading(false)
      return
    }


    let price = formData.price
    if (!String(formData.price).startsWith('¥')) {
      price = `¥${formData.price}`
    }
    const submitData = { ...formData, price }

    try {
      let res, data
      if (mode === 'edit' && itemId) {
        res = await fetch(`/api/menu-item?id=${itemId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submitData),
        })
        data = await res.json()
        if (res.ok) {
          toast.success('Menu item updated successfully!')
        } else {
          toast.error(data.error || 'Failed to update menu item')
        }
      } else {
        res = await fetch('/api/menu-item', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submitData),
        })
        data = await res.json()
        if (res.ok) {
          toast.success('Menu item created successfully!')
        } else {
          toast.error(data.error || 'Failed to create menu item')
        }
      }
      if (res.ok) {
        setTimeout(() => {
          router.push('/cms/dashboard')
        }, 1500)
      }
    } catch (err) {
      toast.error('An error occurred while saving the menu item')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isAuthenticated || isDataLoading) {
    return (
      <div className="min-h-screen bg-[#F8F5F2] flex items-center justify-center">
        <div className="w-full max-w-4xl px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Skeleton */}
            <div className="lg:col-span-2 space-y-6">
              <Skeleton className="h-8 w-1/2 mb-4" />
              <Skeleton className="h-16 w-full mb-4" />
              <Skeleton className="h-16 w-full mb-4" />
              <Skeleton className="h-32 w-full mb-4" />
              <Skeleton className="h-10 w-1/3 mb-4" />
              <Skeleton className="h-12 w-1/2 mb-4" />
              <Skeleton className="h-12 w-1/2" />
            </div>
            {/* Preview Skeleton */}
            <div className="lg:col-span-1 space-y-4">
              <Skeleton className="h-64 w-full mb-4" />
              <Skeleton className="h-8 w-3/4 mb-2" />
              <Skeleton className="h-6 w-1/2 mb-2" />
              <Skeleton className="h-6 w-1/3" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-[#EAE7E3]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/cms/dashboard">
                <button className="p-2 hover:bg-[#EAE7E3] rounded-lg transition-colors duration-300">
                  {/* ArrowLeft icon remains in ItemFormComponents */}
                  ←
                </button>
              </Link>
              <div>
                <h1 className="text-2xl font-light text-[#333333] tracking-wide">
                  {mode === 'edit' ? 'Edit Menu Item' : 'Add New Menu Item'}
                </h1>
                <p className="text-sm text-[#333333] opacity-80">
                  {mode === 'edit' ? 'Update menu item details' : 'Create a new menu item for your cafe'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <ItemForm
              mode={mode}
              formData={formData}
              categories={categories}
              imagePreview={imagePreview}
              isLoading={isLoading}
              handleInputChange={handleInputChange}
              handleIngredientChange={handleIngredientChange}
              addIngredient={addIngredient}
              removeIngredient={removeIngredient}
              handleImageUpload={handleImageUpload}
              handleSubmit={handleSubmit}
            />
          </div>

          {/* Preview */}
          <div className="lg:col-span-1">
            <ItemPreview
              formData={formData}
              categories={categories}
              imagePreview={imagePreview}
            />
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{
          backgroundColor: '#F8F5F2',
          color: '#333333',
          border: '1px solid #EAE7E3'
        }}
      />

      <SakuraCursor />
    </div>
  )
}

export default function ItemFormPage() {
  return (
    <Suspense>
      <ItemFormPageInner />
    </Suspense>
  )
}

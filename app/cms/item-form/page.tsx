
"use client"


import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SakuraCursor from '@/components/sakura-cursor'
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

  const categories = [
    { value: 'tea', label: 'Tea & Beverages' },
    { value: 'sweets', label: 'Traditional Sweets' },
    { value: 'light', label: 'Light Meals' },
    { value: 'seasonal', label: 'Seasonal Specials' }
  ]

  useEffect(() => {
    const token = localStorage.getItem('cms_auth_token')
    if (!token) {
      router.push('/cms/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  useEffect(() => {
    if (mode === 'edit' && itemId) {
      // Simulate loading existing item data
      const existingItems: { [key: string]: MenuItem } = {
        '1': {
          id: '1',
          name: 'Ceremonial Matcha',
          description: 'Premium grade matcha whisked to perfection',
          price: '800',
          category: 'tea',
          ingredients: ['Ceremonial grade matcha', 'Filtered water', 'Traditional bamboo whisk preparation'],
          image: '/ceremonial-matcha-bowl.png',
          status: 'active'
        },
        '2': {
          id: '2',
          name: 'Hojicha Latte',
          description: 'Roasted green tea with steamed milk',
          price: '650',
          category: 'tea',
          ingredients: ['Hojicha tea', 'Steamed milk', 'Natural sweetener'],
          image: '/placeholder-7cfap.png',
          status: 'active'
        }
      }

      if (existingItems[itemId]) {
        setFormData(existingItems[itemId])
        setImagePreview(existingItems[itemId].image)
      }
    }
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

  const handleImageUpload = (e: ImageUploadEvent) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = (e.target && (e.target as FileReader).result) || ''
        if (typeof result === 'string') {
          setImagePreview(result)
          setFormData(prev => ({
            ...prev,
            image: result
          }))
        } else {
          setImagePreview('')
          setFormData(prev => ({
            ...prev,
            image: ''
          }))
        }
      }
      reader.readAsDataURL(file)
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

    // Simulate API call
    setTimeout(() => {
      if (mode === 'edit') {
        toast.success('Menu item updated successfully!')
      } else {
        toast.success('Menu item created successfully!')
      }
      setIsLoading(false)
      setTimeout(() => {
        router.push('/cms/dashboard')
      }, 1500)
    }, 1000)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F8F5F2] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#465775]/30 border-t-[#465775] rounded-full animate-spin"></div>
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

"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft, Upload, X, Save, Eye, ImageIcon } from 'lucide-react'
import Link from 'next/link'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SakuraCursor from '@/components/sakura-cursor'

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

export default function ItemFormPage() {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...formData.ingredients]
    newIngredients[index] = value
    setFormData(prev => ({
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

  const removeIngredient = (index: number) => {
    if (formData.ingredients.length > 1) {
      const newIngredients = formData.ingredients.filter((_, i) => i !== index)
      setFormData(prev => ({
        ...prev,
        ingredients: newIngredients
      }))
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setImagePreview(result)
        setFormData(prev => ({
          ...prev,
          image: result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
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
                  <ArrowLeft size={20} />
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg border border-[#EAE7E3] p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div>
                  <h3 className="text-lg font-medium text-[#333333] mb-4">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#333333] mb-2">
                        Item Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#D3D3D3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                        placeholder="e.g., Ceremonial Matcha"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#333333] mb-2">
                        Price (¥) *
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#D3D3D3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                        placeholder="800"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Category and Status */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#D3D3D3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                      required
                    >
                      {categories.map(category => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      Status
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#D3D3D3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-[#D3D3D3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent resize-none"
                    placeholder="Describe your menu item..."
                    required
                  />
                </div>

                {/* Ingredients */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="block text-sm font-medium text-[#333333]">
                      Ingredients
                    </label>
                    <button
                      type="button"
                      onClick={addIngredient}
                      className="px-3 py-1 bg-[#465775] text-white rounded-lg hover:bg-[#465775]/90 transition-colors duration-300 text-sm"
                    >
                      Add Ingredient
                    </button>
                  </div>
                  <div className="space-y-3">
                    {formData.ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <input
                          type="text"
                          value={ingredient}
                          onChange={(e) => handleIngredientChange(index, e.target.value)}
                          className="flex-1 px-4 py-3 border border-[#D3D3D3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                          placeholder="Enter ingredient"
                        />
                        {formData.ingredients.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeIngredient(index)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-300"
                          >
                            <X size={16} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">
                    Item Image
                  </label>
                  <div className="border-2 border-dashed border-[#D3D3D3] rounded-xl p-6 text-center hover:border-[#465775] transition-colors duration-300">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      {imagePreview ? (
                        <div className="space-y-3">
                          <img
                            src={imagePreview || "/placeholder.svg"}
                            alt="Preview"
                            className="w-32 h-32 object-cover rounded-xl mx-auto"
                          />
                          <p className="text-sm text-[#465775]">Click to change image</p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <Upload className="mx-auto text-[#D3D3D3]" size={48} />
                          <div>
                            <p className="text-[#465775] font-medium">Click to upload image</p>
                            <p className="text-sm text-[#333333] opacity-60">PNG, JPG up to 10MB</p>
                          </div>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex items-center space-x-4 pt-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-gradient-to-r from-[#465775] to-[#465775]/80 text-white py-3 rounded-xl hover:from-[#465775]/90 hover:to-[#465775]/70 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Save size={16} />
                        <span>{mode === 'edit' ? 'Update Item' : 'Create Item'}</span>
                      </>
                    )}
                  </button>
                  <Link href="/cms/dashboard">
                    <button
                      type="button"
                      className="px-6 py-3 border border-[#D3D3D3] text-[#333333] rounded-xl hover:bg-[#EAE7E3] transition-colors duration-300"
                    >
                      Cancel
                    </button>
                  </Link>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Preview */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg border border-[#EAE7E3] p-6 sticky top-8"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Eye size={20} className="text-[#465775]" />
                <h3 className="text-lg font-medium text-[#333333]">Preview</h3>
              </div>
              
              <div className="bg-white rounded-xl border border-[#EAE7E3] overflow-hidden">
                <div className="aspect-square bg-[#F8F5F2] flex items-center justify-center">
                  {imagePreview ? (
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImageIcon className="text-[#D3D3D3]" size={48} />
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-[#333333]">
                      {formData.name || 'Item Name'}
                    </h4>
                    <span className="text-[#465775] font-medium">
                      {formData.price ? `¥${formData.price}` : '¥0'}
                    </span>
                  </div>
                  <p className="text-sm text-[#333333] opacity-80 mb-3">
                    {formData.description || 'Item description will appear here...'}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#333333] opacity-60">
                      {categories.find(c => c.value === formData.category)?.label}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      formData.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {formData.status}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
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

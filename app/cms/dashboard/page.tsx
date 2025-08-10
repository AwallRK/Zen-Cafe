"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import { BarChart3, LogOut, Coffee, TrendingUp, MessageSquare, ShoppingBag, Edit } from 'lucide-react'
import Link from 'next/link'
import MenuTable from './components/MenuTable'
import CategoriesTable from './components/CategoriesTable'
import OrdersTable from './components/OrdersTable'
import ContactsTable from './components/ContactsTable'
import ReviewsTable from './components/ReviewsTable'
import StatsGrid from './components/StatsGrid'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SakuraCursor from '@/components/sakura-cursor'

interface MenuItem {
  id: string
  name: string
  category: string
  price: string
  status: 'active' | 'inactive'
  image: string
}

export default function CMSDashboard() {
  // Tab state for table switching
  const [activeTab, setActiveTab] = useState<'menu' | 'categories' | 'orders' | 'contacts' | 'reviews'>('menu')
  // Data for other tables
  const [categoriesData, setCategoriesData] = useState<any[]>([])
  const [ordersData, setOrdersData] = useState<any[]>([])
  const [contactsData, setContactsData] = useState<any[]>([])
  const [reviewsData, setReviewsData] = useState<any[]>([])

  // Fetch data for tabs
  useEffect(() => {
    if (activeTab === 'categories') {
      fetch('/api/category')
        .then(res => res.json())
        .then(data => setCategoriesData(data))
        .catch(() => setCategoriesData([]))
    } else if (activeTab === 'orders') {
      fetch('/api/order')
        .then(res => res.json())
        .then(data => setOrdersData(data))
        .catch(() => setOrdersData([]))

    } else if (activeTab === 'contacts') {
      fetch('/api/contact')
        .then(res => res.json())
        .then(data => setContactsData(data))
        .catch(() => setContactsData([]))
    } else if (activeTab === 'reviews') {
      fetch('/api/review')
        .then(res => res.json())
        .then(data => setReviewsData(data))
        .catch(() => setReviewsData([]))
    }
  }, [activeTab])
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  // Get unique categories from menuItems

  // Log ordersData whenever it changes
  useEffect(() => {
    if (activeTab === 'orders') {
      console.log('ordersData:', ordersData)
    }
  }, [ordersData, activeTab])
  const categories = Array.from(new Set(menuItems.map(item => item.category))).filter(Boolean)
  // Filtered items by category
  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory)
  // Paginated filtered items
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)

  useEffect(() => {
    const token = localStorage.getItem('cms_auth_token')
    if (!token) {
      router.push('/cms/login')
    } else {
      setIsAuthenticated(true)
      fetch('/api/menu-item', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          // Map DB data to dashboard format if needed
          setMenuItems(
            data.map((item: any) => ({
              id: item._id || item.id,
              name: item.name,
              category: item.category,
              price: item.price,
              status: item.status || 'active',
              image: item.image || '/placeholder.svg'
            }))
          )
        })
        .catch(() => setMenuItems([]))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('cms_auth_token')
    toast.success('Logged out successfully')
    setTimeout(() => {
      router.push('/cms/login')
    }, 1000)
  }

  const handleDeleteItem = async (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      const token = localStorage.getItem('cms_auth_token')
      const res = await fetch(`/api/menu-item?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      if (res.ok) {
        setMenuItems(menuItems.filter(item => item.id !== id))
        toast.success('Item deleted successfully')
      } else {
        toast.error('Failed to delete item')
      }
    }
  }

  const toggleItemStatus = async (id: string) => {
    const item = menuItems.find(item => item.id === id)
    if (!item) return
    const newStatus = item.status === 'active' ? 'inactive' : 'active'
    const token = localStorage.getItem('cms_auth_token')
    const res = await fetch(`/api/menu-item?id=${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ status: newStatus })
    })
    if (res.ok) {
      setMenuItems(menuItems.map(item =>
        item.id === id
          ? { ...item, status: newStatus }
          : item
      ))
      toast.success('Item status updated')
    } else {
      toast.error('Failed to update status')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F8F5F2] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#465775]/30 border-t-[#465775] rounded-full animate-spin"></div>
      </div>
    )
  }

  const stats = [
    {
      title: 'Total Menu Items',
      value: menuItems.length,
      icon: Coffee,
      color: 'from-blue-500 to-blue-600',
      change: '+2 this week'
    },
    {
      title: 'Active Items',
      value: menuItems.filter(item => item.status === 'active').length,
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      change: '+5% from last month'
    },
    {
      title: 'Contact Messages',
      value: 12,
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600',
      change: '3 unread'
    },
    {
      title: 'Orders Today',
      value: 28,
      icon: ShoppingBag,
      color: 'from-orange-500 to-orange-600',
      change: '+12% from yesterday'
    }
  ]

  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-[#EAE7E3]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-light text-[#333333] tracking-wide">
                禅茶房 CMS Dashboard
              </h1>
              <p className="text-sm text-[#333333] opacity-80">
                Welcome back, Admin
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-[#465775] text-white rounded-lg hover:bg-[#465775]/90 transition-colors duration-300"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <StatsGrid stats={stats} />

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-[#EAE7E3] mb-8"
        >
          <h2 className="text-xl font-medium text-[#333333] mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <button
              className={`w-full h-20 flex items-center justify-center space-x-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 ${activeTab === 'categories' ? 'ring-2 ring-yellow-500' : ''}`}
              onClick={() => setActiveTab('categories')}
            >
              <BarChart3 size={24} />
              <span className="text-base font-medium">List Categories</span>
            </button>
            <button
              className={`w-full h-20 flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 ${activeTab === 'menu' ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => setActiveTab('menu')}
            >
              <Coffee size={24} />
              <span className="text-base font-medium">List Menus</span>
            </button>
            <button
              className={`w-full h-20 flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 ${activeTab === 'orders' ? 'ring-2 ring-pink-500' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              <ShoppingBag size={24} />
              <span className="text-base font-medium">List Orders</span>
            </button>
            <button
              className={`w-full h-20 flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 ${activeTab === 'contacts' ? 'ring-2 ring-purple-500' : ''}`}
              onClick={() => setActiveTab('contacts')}
            >
              <MessageSquare size={24} />
              <span className="text-base font-medium">List Contact Messages</span>
            </button>
            <button
              className={`w-full h-20 flex items-center justify-center space-x-3 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-xl hover:from-red-500 hover:to-red-600 transition-all duration-300 ${activeTab === 'reviews' ? 'ring-2 ring-red-500' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              <Edit size={24} />
              <span className="text-base font-medium">List Reviews</span>
            </button>
          </div>
        </motion.div>

        {/* Table Content by Tab */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg border border-[#EAE7E3] overflow-hidden"
        >
          {/* Menu Items Table */}
          {activeTab === 'menu' && (
            <MenuTable
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              paginatedItems={paginatedItems}
              totalPages={totalPages}
              handleDeleteItem={handleDeleteItem}
              toggleItemStatus={toggleItemStatus}
            />
          )}
          {/* Categories Table */}
          {activeTab === 'categories' && (
            <CategoriesTable categoriesData={categoriesData} />
          )}
          {/* Orders Table */}
          {activeTab === 'orders' && (
            <OrdersTable ordersData={ordersData} />
          )}
          {/* Contacts Table */}
          {activeTab === 'contacts' && (
            <ContactsTable contactsData={contactsData} />
          )}
          {/* Reviews Table */}
          {activeTab === 'reviews' && (
            <ReviewsTable reviewsData={reviewsData} />
          )}
        </motion.div>
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

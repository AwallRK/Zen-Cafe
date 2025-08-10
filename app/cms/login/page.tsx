"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SakuraCursor from '@/components/sakura-cursor'

export default function CMSLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const result = await res.json()
      if (res.ok && result.token) {
        localStorage.setItem('cms_auth_token', result.token)
        toast.success('Login successful! Redirecting...', {
          position: "top-right",
          autoClose: 1500,
        })
        setTimeout(() => {
          router.push('/cms/dashboard')
        }, 1500)
      } else {
        toast.error(result.error || 'Invalid credentials. Please try again.', {
          position: "top-right",
          autoClose: 3000,
        })
      }
    } catch (err) {
      toast.error('Login failed. Please try again.', {
        position: "top-right",
        autoClose: 3000,
      })
    }
    setIsLoading(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F5F2] via-[#EAE7E3] to-[#D3D3D3] flex items-center justify-center p-6">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFE0E0] rounded-full opacity-20 -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#465775] rounded-full opacity-10 translate-x-24 translate-y-24"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-gradient-to-br from-[#465775] to-[#465775]/70 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Lock className="text-white" size={32} />
            </motion.div>
            <h1 className="text-3xl font-light text-[#333333] mb-2 tracking-wide">
              禅茶房 CMS
            </h1>
            <p className="text-[#333333] opacity-80">
              Content Management System
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="block text-sm font-medium text-[#333333] mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#465775]" size={20} />
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-[#D3D3D3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-[#333333] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#465775]" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-12 py-3 border border-[#D3D3D3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#465775] hover:text-[#333333] transition-colors duration-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#465775] to-[#465775]/80 text-white py-3 rounded-xl hover:from-[#465775]/90 hover:to-[#465775]/70 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <span>Sign In</span>
              )}
            </motion.button>
          </form>

          {/* Demo Credentials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 p-4 bg-[#FFE0E0]/50 rounded-xl border border-[#FFE0E0]"
          >
            <p className="text-sm text-[#333333] text-center mb-2 font-medium">Demo Credentials:</p>
            <p className="text-xs text-[#333333] opacity-80 text-center">
              Email: <span className="font-mono bg-white px-2 py-1 rounded">admin@zencafe.jp</span><br />
              Password: <span className="font-mono bg-white px-2 py-1 rounded">admin123</span>
            </p>
          </motion.div>
        </div>
      </motion.div>

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

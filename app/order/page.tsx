"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Minus, ShoppingBag, CreditCard, MapPin } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import SakuraCursor from '@/components/sakura-cursor'
import { useCart } from "@/context/CartContext"
import { useRouter } from 'next/navigation'

export default function OrderPage() {
  const router = useRouter()
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup')
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    prefecture: '',
    postalCode: '',
    paymentMethod: 'Credit Card',
  })
  const [loading, setLoading] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const subtotal = cart.reduce((sum, item) => {
    const price = typeof item.price === 'string' ? parseInt(item.price.replace(/[^\d]/g, ''), 10) : Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return sum + (price * quantity);
  }, 0);
  const tax = Math.round(subtotal * 0.1);
  const deliveryFee = orderType === 'delivery' ? 300 : 0;
  const total = subtotal + tax + deliveryFee

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setShowLoading(true)
    setError('')
    setSuccess('')
    try {
      const orderData = {
        orderType,
        cart: cart.map(item => ({
          ...item,
          price: typeof item.price === 'string' ? parseInt(item.price.replace(/[^\d]/g, ''), 10) : Number(item.price) || 0,
        })),
        subtotal,
        tax,
        deliveryFee,
        total,
        paymentMethod: form.paymentMethod,
        customer: {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          streetAddress: orderType === 'delivery' ? form.streetAddress : '',
          city: orderType === 'delivery' ? form.city : '',
          prefecture: orderType === 'delivery' ? form.prefecture : '',
          postalCode: orderType === 'delivery' ? form.postalCode : '',
        },
      }
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      })
      if (res.ok) {
        setSuccess('Order placed successfully!')
        clearCart()
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          streetAddress: '',
          city: '',
          prefecture: '',
          postalCode: '',
          paymentMethod: 'Credit Card',
        })
        setTimeout(() => {
          router.push('/')
        }, 1800)
      } else {
        setError('Failed to place order. Please try again.')
      }
    } catch {
      setError('Failed to place order. Please try again.')
    }
    setLoading(false)
    setShowLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      {showLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <svg className="animate-spin h-8 w-8 text-[#465775] mb-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="#465775" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            <span className="text-[#333333] text-lg font-medium">Processing your order...</span>
          </div>
        </div>
      )}

      <Navigation cartItems={cart} />

      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-light text-[#333333] mb-4 tracking-wide">
              Your Order
            </h1>
            <p className="text-lg text-[#333333] opacity-80">
              Complete your order for pickup or delivery
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Type Selection */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h2 className="text-2xl font-light text-[#333333] mb-4">Order Type</h2>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setOrderType('pickup')}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${orderType === 'pickup'
                      ? 'border-[#465775] bg-[#465775]/5'
                      : 'border-[#D3D3D3] hover:border-[#465775]/50'
                      }`}
                  >
                    <ShoppingBag className="mx-auto mb-2 text-[#465775]" size={24} />
                    <div className="text-[#333333] font-medium">Pickup</div>
                    <div className="text-[#333333] opacity-60 text-sm">Ready in 15-20 min</div>
                  </button>
                  <button
                    onClick={() => setOrderType('delivery')}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${orderType === 'delivery'
                      ? 'border-[#465775] bg-[#465775]/5'
                      : 'border-[#D3D3D3] hover:border-[#465775]/50'
                      }`}
                  >
                    <MapPin className="mx-auto mb-2 text-[#465775]" size={24} />
                    <div className="text-[#333333] font-medium">Delivery</div>
                    <div className="text-[#333333] opacity-60 text-sm">30-45 min • 300</div>
                  </button>
                </div>
              </motion.div>

              {/* Cart Items */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h2 className="text-2xl font-light text-[#333333] mb-4">Your Items</h2>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-[#F8F5F2] rounded-xl">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-[#333333]">{item.name}</h3>
                        <p className="text-[#465775] font-medium">{item.price}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 rounded-full bg-[#D3D3D3] hover:bg-[#465775] hover:text-white transition-colors duration-300 flex items-center justify-center"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-medium text-[#333333]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-[#D3D3D3] hover:bg-[#465775] hover:text-white transition-colors duration-300 flex items-center justify-center"
                        >
                          <Plus size={16} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-2 px-2 py-1 bg-red-100 text-red-700 rounded"
                          title="Remove"
                        >Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Customer Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h2 className="text-2xl font-light text-[#333333] mb-4">
                  {orderType === 'pickup' ? 'Contact Information' : 'Delivery Information'}
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                    required
                  />
                  {orderType === 'delivery' && (
                    <>
                      <input
                        type="text"
                        name="streetAddress"
                        value={form.streetAddress}
                        onChange={handleChange}
                        placeholder="Street Address"
                        className="w-full px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                        required
                      />
                      <div className="grid md:grid-cols-3 gap-4">
                        <input
                          type="text"
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          placeholder="City"
                          className="px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                          required
                        />
                        <input
                          type="text"
                          name="prefecture"
                          value={form.prefecture}
                          onChange={handleChange}
                          placeholder="Prefecture"
                          className="px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                          required
                        />
                        <input
                          type="text"
                          name="postalCode"
                          value={form.postalCode}
                          onChange={handleChange}
                          placeholder="Postal Code"
                          className="px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                          required
                        />
                      </div>
                    </>
                  )}
                  {success && <div className="text-green-600 text-sm">{success}</div>}
                  {error && <div className="text-red-600 text-sm">{error}</div>}
                </form>
              </motion.div>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg h-fit sticky top-24"
            >
              <h2 className="text-2xl font-light text-[#333333] mb-6">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-[#333333]">
                  <span>Subtotal</span>
                  <span>¥{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#333333]">
                  <span>Tax</span>
                  <span>¥{tax.toLocaleString()}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between text-[#333333]">
                    <span>Delivery Fee</span>
                    <span>¥{deliveryFee.toLocaleString()}</span>
                  </div>
                )}
                <div className="border-t border-[#D3D3D3] pt-3">
                  <div className="flex justify-between text-lg font-medium text-[#333333]">
                    <span>Total</span>
                    <span>¥{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              {/* Payment Method and Place Order Button below Total */}
              <div className="space-y-4">
                <div className="p-4 bg-[#EAE7E3] rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CreditCard className="text-[#465775]" size={20} />
                    <span className="font-medium text-[#333333]">Payment Method</span>
                  </div>
                  <select
                    name="paymentMethod"
                    value={form.paymentMethod}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                    required
                  >
                    <option>Credit Card</option>
                    <option>PayPay</option>
                    <option>Cash (Pickup Only)</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-[#465775] text-white py-4 rounded-full hover:bg-[#465775]/90 transition-colors duration-300 text-lg font-medium"
                  disabled={loading}
                >
                  {loading ? 'Placing Order...' : 'Place Order'}
                </button>
                <p className="text-xs text-[#333333] opacity-60 text-center mt-2">
                  By placing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
                {success && <div className="text-green-600 text-sm text-center">{success}</div>}
                {error && <div className="text-red-600 text-sm text-center">{error}</div>}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Sakura Cursor */}
      <SakuraCursor />
    </div>
  )
}

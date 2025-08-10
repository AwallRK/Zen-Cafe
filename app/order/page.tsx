"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Minus, ShoppingBag, CreditCard, MapPin } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import SakuraCursor from '@/components/sakura-cursor'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export default function OrderPage() {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup')
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Ceremonial Matcha',
      price: 800,
      quantity: 1,
      image: '/placeholder.svg?height=100&width=100'
    },
    {
      id: '2',
      name: 'Sakura Mochi',
      price: 520,
      quantity: 2,
      image: '/placeholder.svg?height=100&width=100'
    }
  ])

  const updateQuantity = (id: string, change: number) => {
    setCart(cart.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(0, item.quantity + change) }
        : item
    ).filter(item => item.quantity > 0))
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = Math.round(subtotal * 0.1)
  const deliveryFee = orderType === 'delivery' ? 300 : 0
  const total = subtotal + tax + deliveryFee

  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      <Navigation cartItems={[]} />
      
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
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      orderType === 'pickup'
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
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      orderType === 'delivery'
                        ? 'border-[#465775] bg-[#465775]/5'
                        : 'border-[#D3D3D3] hover:border-[#465775]/50'
                    }`}
                  >
                    <MapPin className="mx-auto mb-2 text-[#465775]" size={24} />
                    <div className="text-[#333333] font-medium">Delivery</div>
                    <div className="text-[#333333] opacity-60 text-sm">30-45 min • ¥300</div>
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
                        <p className="text-[#465775] font-medium">¥{item.price}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-full bg-[#D3D3D3] hover:bg-[#465775] hover:text-white transition-colors duration-300 flex items-center justify-center"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-medium text-[#333333]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-full bg-[#D3D3D3] hover:bg-[#465775] hover:text-white transition-colors duration-300 flex items-center justify-center"
                        >
                          <Plus size={16} />
                        </button>
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
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                  />
                  {orderType === 'delivery' && (
                    <>
                      <input
                        type="text"
                        placeholder="Street Address"
                        className="w-full px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                      />
                      <div className="grid md:grid-cols-3 gap-4">
                        <input
                          type="text"
                          placeholder="City"
                          className="px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                        />
                        <input
                          type="text"
                          placeholder="Prefecture"
                          className="px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                        />
                        <input
                          type="text"
                          placeholder="Postal Code"
                          className="px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                        />
                      </div>
                    </>
                  )}
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
                  <span>¥{subtotal}</span>
                </div>
                <div className="flex justify-between text-[#333333]">
                  <span>Tax</span>
                  <span>¥{tax}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between text-[#333333]">
                    <span>Delivery Fee</span>
                    <span>¥{deliveryFee}</span>
                  </div>
                )}
                <div className="border-t border-[#D3D3D3] pt-3">
                  <div className="flex justify-between text-lg font-medium text-[#333333]">
                    <span>Total</span>
                    <span>¥{total}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-[#EAE7E3] rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CreditCard className="text-[#465775]" size={20} />
                    <span className="font-medium text-[#333333]">Payment Method</span>
                  </div>
                  <select className="w-full px-3 py-2 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent">
                    <option>Credit Card</option>
                    <option>PayPay</option>
                    <option>Cash (Pickup Only)</option>
                  </select>
                </div>

                <button className="w-full bg-[#465775] text-white py-4 rounded-full hover:bg-[#465775]/90 transition-colors duration-300 text-lg font-medium">
                  Place Order
                </button>

                <p className="text-xs text-[#333333] opacity-60 text-center">
                  By placing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
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

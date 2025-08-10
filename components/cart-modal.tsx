"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface CartItem {
  id: string
  name: string
  quantity: number
  price: string
  image?: string
}

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
  cartItems: CartItem[]
  onUpdateQuantity?: (id: string, change: number) => void
}

export default function CartModal({ isOpen, onClose, cartItems, onUpdateQuantity }: CartModalProps) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace('¥', ''))
      return total + (price * item.quantity)
    }, 0)
  }

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#EAE7E3]">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="text-[#465775]" size={24} />
                <h2 className="text-2xl font-medium text-[#333333]">Your Cart</h2>
                {totalItems > 0 && (
                  <span className="bg-[#FFE0E0] text-[#333333] text-sm px-3 py-1 rounded-full font-medium">
                    {totalItems} {totalItems === 1 ? 'item' : 'items'}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[#EAE7E3] rounded-full transition-colors duration-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Content */}
            <div className="max-h-[60vh] overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="p-12 text-center">
                  <ShoppingBag className="mx-auto mb-4 text-[#D3D3D3]" size={48} />
                  <h3 className="text-xl font-medium text-[#333333] mb-2">Your cart is empty</h3>
                  <p className="text-[#333333] opacity-80 mb-6">
                    Discover our carefully curated selection of teas and treats
                  </p>
                  <Link href="/menu">
                    <button 
                      onClick={onClose}
                      className="bg-[#465775] text-white px-6 py-3 rounded-full hover:bg-[#465775]/90 transition-colors duration-300"
                    >
                      Browse Menu
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="p-6 space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-4 p-4 bg-[#F8F5F2] rounded-xl"
                    >
                      <div className="w-16 h-16 bg-[#EAE7E3] rounded-lg overflow-hidden flex-shrink-0">
                        {item.image ? (
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-2xl">🍵</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-medium text-[#333333] mb-1">{item.name}</h3>
                        <p className="text-[#465775] font-medium">{item.price}</p>
                      </div>
                      
                      {onUpdateQuantity && (
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-full bg-white hover:bg-[#465775] hover:text-white transition-colors duration-300 flex items-center justify-center border border-[#D3D3D3]"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-medium text-[#333333]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-full bg-white hover:bg-[#465775] hover:text-white transition-colors duration-300 flex items-center justify-center border border-[#D3D3D3]"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      )}
                      
                      {!onUpdateQuantity && (
                        <div className="text-right">
                          <span className="text-sm text-[#333333] opacity-80">Qty: {item.quantity}</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-[#EAE7E3] bg-[#F8F5F2]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-medium text-[#333333]">Total</span>
                  <span className="text-2xl font-medium text-[#465775]">¥{calculateTotal()}</span>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={onClose}
                    className="flex-1 px-6 py-3 border border-[#D3D3D3] text-[#333333] rounded-full hover:bg-[#EAE7E3] transition-colors duration-300"
                  >
                    Continue Shopping
                  </button>
                  <Link href="/order" className="flex-1">
                    <button
                      onClick={onClose}
                      className="w-full bg-[#465775] text-white px-6 py-3 rounded-full hover:bg-[#465775]/90 transition-colors duration-300 font-medium"
                    >
                      Order Online
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

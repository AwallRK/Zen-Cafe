"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, ShoppingBag } from 'lucide-react'
import CartModal from './cart-modal'

interface NavigationProps {
  cartItems?: {id: string, name: string, quantity: number, price: string, image?: string}[]
}

export default function Navigation({ cartItems = [] }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Our Story', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Order Online', href: '/order' }
  ]

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F5F2]/90 backdrop-blur-md border-b border-[#EAE7E3]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-light text-[#333333] tracking-wide">
              禅茶房
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#333333] hover:text-[#465775] transition-colors duration-300 font-light tracking-wide"
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="bg-[#465775] text-white px-6 py-2 rounded-full hover:bg-[#465775]/90 transition-colors duration-300 flex items-center space-x-2 relative"
              >
                <ShoppingBag size={16} />
                <span>Cart</span>
                {totalCartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FFE0E0] text-[#333333] text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {totalCartItems}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#333333] hover:text-[#465775] transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[73px] left-0 right-0 z-40 bg-[#F8F5F2] border-b border-[#EAE7E3] md:hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-[#333333] hover:text-[#465775] transition-colors duration-300 font-light tracking-wide py-2"
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={() => {
                  setIsCartOpen(true)
                  setIsOpen(false)
                }}
                className="w-full bg-[#465775] text-white px-6 py-3 rounded-full hover:bg-[#465775]/90 transition-colors duration-300 flex items-center justify-center space-x-2 relative"
              >
                <ShoppingBag size={16} />
                <span>Cart</span>
                {totalCartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FFE0E0] text-[#333333] text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {totalCartItems}
                  </span>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />
    </>
  )
}

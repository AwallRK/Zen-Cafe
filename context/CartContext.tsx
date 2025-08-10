import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"

export type CartItem = {
    id: string
    name: string
    quantity: number
    price: string
    image?: string
}

interface CartContextType {
    cart: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (id: string) => void
    updateQuantity: (id: string, quantity: number) => void
    clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) throw new Error("useCart must be used within a CartProvider")
    return context
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([])

    useEffect(() => {
        // Optionally persist cart in localStorage
        const stored = localStorage.getItem("zen-cafe-cart")
        if (stored) setCart(JSON.parse(stored))
    }, [])

    useEffect(() => {
        localStorage.setItem("zen-cafe-cart", JSON.stringify(cart))
    }, [cart])

    const addToCart = (item: CartItem) => {
        setCart(prev => {
            const existing = prev.find(ci => ci.id === item.id)
            if (existing) {
                return prev.map(ci => ci.id === item.id ? { ...ci, quantity: ci.quantity + item.quantity } : ci)
            }
            return [...prev, item]
        })
    }

    const removeFromCart = (id: string) => {
        setCart(prev => prev.filter(ci => ci.id !== id))
    }

    const updateQuantity = (id: string, quantity: number) => {
        setCart(prev => prev.map(ci => ci.id === id ? { ...ci, quantity } : ci))
    }

    const clearCart = () => setCart([])

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

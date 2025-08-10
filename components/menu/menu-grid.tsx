"use client"

import { motion, AnimatePresence } from "framer-motion"
import MenuItemCard from "./menu-item-card"

interface MenuItem {
    id: string
    name: string
    description: string
    price: string
    category: string
    image: string
    ingredients?: string[]
    preparationTime?: string
    isSignature?: boolean
    isOrganic?: boolean
    rating?: number
    origin?: string
}

interface MenuGridProps {
    items: MenuItem[]
    onItemClick: (item: MenuItem) => void
    onAddToCart: (item: MenuItem) => void
}

export default function MenuGrid({ items, onItemClick, onAddToCart }: MenuGridProps) {
    return (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[600px]">
            <AnimatePresence mode="wait">
                {items.map((item) => (
                    <MenuItemCard key={item.id} item={item} onItemClick={onItemClick} onAddToCart={onAddToCart} />
                ))}
            </AnimatePresence>
        </motion.div>
    )
}

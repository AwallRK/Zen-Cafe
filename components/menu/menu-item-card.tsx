"use client"

import type React from "react"

import { useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Plus, Star, Clock, Leaf, Award } from "lucide-react"

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

interface MenuItemCardProps {
    item: MenuItem
    onItemClick: (item: MenuItem) => void
    onAddToCart: (item: MenuItem) => void
}

export default function MenuItemCard({ item, onItemClick, onAddToCart }: MenuItemCardProps) {
    const handleAddToCart = useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation()
            onAddToCart(item)
        },
        [item, onAddToCart],
    )

    const handleItemClick = useCallback(() => {
        onItemClick(item)
    }, [item, onItemClick])

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full relative border border-[#EAE7E3]/50"
            onClick={handleItemClick}
        >
            {/* Premium badges */}
            <div className="absolute top-4 left-4 z-20 flex flex-col space-y-2">
                {item.isSignature && (
                    <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                        <Award size={12} />
                        <span>SIGNATURE</span>
                    </div>
                )}
                {item.isOrganic && (
                    <div className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                        <Leaf size={12} />
                        <span>ORGANIC</span>
                    </div>
                )}
            </div>

            {/* Price badge */}
            <div className="absolute top-4 right-4 z-20">
                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg border border-white/50">
                    <span className="text-xl font-bold text-[#465775]">{item.price}</span>
                </div>
            </div>

            {/* Image container */}
            <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={false}
                />

                {/* Floating info on hover */}
                <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                        <div className="flex items-center justify-between">
                            {item.rating && (
                                <div className="flex items-center space-x-1">
                                    <Star className="text-amber-400 fill-current" size={16} />
                                    <span className="text-sm font-medium text-[#333333]">{item.rating}</span>
                                </div>
                            )}
                            {item.preparationTime && (
                                <div className="flex items-center space-x-1 text-[#333333] opacity-80">
                                    <Clock size={14} />
                                    <span className="text-xs">{item.preparationTime}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-[#333333] mb-2 group-hover:text-[#465775] transition-colors duration-300">
                        {item.name}
                    </h3>
                    {item.origin && <p className="text-xs text-[#465775] font-medium opacity-80 mb-2">Origin: {item.origin}</p>}
                </div>

                <p className="text-[#333333] opacity-80 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{item.description}</p>

                {/* Stats row */}
                <div className="flex items-center justify-between mb-4 text-xs text-[#333333] opacity-60">
                    <div className="flex items-center space-x-4">
                        {item.rating && (
                            <div className="flex items-center space-x-1">
                                <Star className="text-amber-400 fill-current" size={12} />
                                <span>{item.rating}</span>
                            </div>
                        )}
                        {item.preparationTime && (
                            <div className="flex items-center space-x-1">
                                <Clock size={12} />
                                <span>{item.preparationTime}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Add to order button */}
                <button
                    onClick={handleAddToCart}
                    className="w-full bg-[#465775] text-white py-3 rounded-2xl hover:bg-[#465775]/90 transition-all duration-300 flex items-center justify-center space-x-2 font-medium"
                >
                    <Plus size={16} />
                    <span>Add to Order</span>
                </button>
            </div>
        </motion.div>
    )
}

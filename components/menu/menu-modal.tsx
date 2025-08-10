"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, Star, Clock, Leaf, Award } from "lucide-react"

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

interface MenuModalProps {
    item: MenuItem | null
    onClose: () => void
    onAddToCart: () => void
}

export default function MenuModal({ item, onClose, onAddToCart }: MenuModalProps) {
    if (!item) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative">
                        <div className="aspect-[21/9] relative">
                            <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors duration-300 shadow-lg"
                            >
                                <X size={20} />
                            </button>

                            {/* Badges on modal */}
                            <div className="absolute top-6 left-6 flex flex-col space-y-2">
                                {item.isSignature && (
                                    <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg">
                                        <Award size={16} />
                                        <span>SIGNATURE ITEM</span>
                                    </div>
                                )}
                                {item.isOrganic && (
                                    <div className="bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg">
                                        <Leaf size={16} />
                                        <span>ORGANIC</span>
                                    </div>
                                )}
                            </div>

                            {/* Price badge on modal */}
                            <div className="absolute bottom-6 right-6">
                                <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
                                    <span className="text-3xl font-bold text-[#465775]">{item.price}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Main content */}
                                <div className="lg:col-span-2">
                                    <div className="mb-6">
                                        <h2 className="text-3xl font-bold text-[#333333] mb-3">{item.name}</h2>
                                        {item.origin && <p className="text-[#465775] font-medium mb-2">Origin: {item.origin}</p>}
                                        <div className="flex items-center space-x-4 text-sm text-[#333333] opacity-80">
                                            {item.rating && (
                                                <div className="flex items-center space-x-1">
                                                    <Star className="text-amber-400 fill-current" size={16} />
                                                    <span className="font-medium">{item.rating} rating</span>
                                                </div>
                                            )}
                                            {item.preparationTime && (
                                                <div className="flex items-center space-x-1">
                                                    <Clock size={16} />
                                                    <span>Prep time: {item.preparationTime}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-[#333333] opacity-90 leading-relaxed text-lg mb-8">{item.description}</p>

                                    {item.ingredients && (
                                        <div className="mb-8">
                                            <h3 className="text-xl font-semibold text-[#333333] mb-4">Ingredients & Preparation</h3>
                                            <div className="grid grid-cols-1 gap-3">
                                                {item.ingredients.map((ingredient, index) => (
                                                    <div key={index} className="flex items-center space-x-3 p-3 bg-[#F8F5F2] rounded-xl">
                                                        <div className="w-2 h-2 bg-[#465775] rounded-full"></div>
                                                        <span className="text-[#333333] opacity-90">{ingredient}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Sidebar */}
                                <div className="lg:col-span-1">
                                    <div className="bg-[#F8F5F2] rounded-2xl p-6 sticky top-6">
                                        <h4 className="text-lg font-semibold text-[#333333] mb-4">Order Details</h4>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[#333333] opacity-80">Price</span>
                                                <span className="text-xl font-bold text-[#465775]">{item.price}</span>
                                            </div>
                                            {item.preparationTime && (
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[#333333] opacity-80">Prep Time</span>
                                                    <span className="text-[#333333]">{item.preparationTime}</span>
                                                </div>
                                            )}
                                            {item.rating && (
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[#333333] opacity-80">Rating</span>
                                                    <div className="flex items-center space-x-1">
                                                        <Star className="text-amber-400 fill-current" size={16} />
                                                        <span className="text-[#333333] font-medium">{item.rating}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <button
                                            onClick={onAddToCart}
                                            className="w-full bg-gradient-to-r from-[#465775] to-[#465775]/80 text-white py-4 rounded-2xl hover:from-[#465775]/90 hover:to-[#465775]/70 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                        >
                                            Add to Order
                                        </button>

                                        <button
                                            onClick={onClose}
                                            className="w-full mt-3 px-6 py-3 border-2 border-[#D3D3D3] text-[#333333] rounded-2xl hover:bg-[#EAE7E3] hover:border-[#465775]/30 transition-all duration-300"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

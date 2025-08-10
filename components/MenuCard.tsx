import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Plus, Star, Clock, Leaf, Award } from 'lucide-react';

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: string;
    category: string;
    image: string;
    ingredients?: string[];
    preparationTime?: string;
    isSignature?: boolean;
    isOrganic?: boolean;
    rating?: number;
    origin?: string;
}

interface MenuCardProps {
    item: MenuItem;
    onSelect: () => void;
    onAddToCart: () => void;
}

export default function MenuCard({ item, onSelect, onAddToCart }: MenuCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -12, scale: 1.03 }}
            className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full relative border border-[#EAE7E3]/50"
            onClick={onSelect}
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

            {/* Enhanced image container */}
            <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
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

            {/* Enhanced content */}
            <div className="p-8 flex flex-col flex-1 relative">
                {/* Decorative line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#465775]/30 to-transparent"></div>

                <div className="flex flex-col flex-1">
                    <div className="mb-4">
                        <h3 className="text-2xl font-semibold text-[#333333] mb-2 group-hover:text-[#465775] transition-colors duration-300">
                            {item.name}
                        </h3>
                        {item.origin && (
                            <p className="text-xs text-[#465775] font-medium opacity-80 mb-2">
                                Origin: {item.origin}
                            </p>
                        )}
                    </div>

                    <p className="text-[#333333] opacity-80 text-sm leading-relaxed mb-6 flex-1">
                        {item.description}
                    </p>

                    {/* Enhanced stats row */}
                    <div className="flex items-center justify-between mb-6 text-xs text-[#333333] opacity-60">
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

                    {/* Premium add to order button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart();
                        }}
                        className="w-full bg-gradient-to-r from-[#465775] via-[#465775] to-[#465775]/80 text-white py-4 rounded-2xl hover:from-[#465775]/90 hover:to-[#465775]/70 transition-all duration-300 flex items-center justify-center space-x-3 mt-auto group-hover:shadow-xl transform group-hover:-translate-y-1 relative overflow-hidden font-medium"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <Plus size={18} className="relative z-10" />
                        <span className="relative z-10">Add to Order</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Plus, Edit, Trash2 } from 'lucide-react'

interface MenuItem {
    id: string
    name: string
    category: string
    price: string
    status: 'active' | 'inactive'
    image: string
}

interface Props {
    categories: string[]
    selectedCategory: string
    setSelectedCategory: (cat: string) => void
    currentPage: number
    setCurrentPage: (page: number) => void
    paginatedItems: MenuItem[]
    totalPages: number
    handleDeleteItem: (id: string) => void
    toggleItemStatus: (id: string) => void
}

export default function MenuTable({
    categories,
    selectedCategory,
    setSelectedCategory,
    currentPage,
    setCurrentPage,
    paginatedItems,
    totalPages,
    handleDeleteItem,
    toggleItemStatus
}: Props) {
    return (
        <>
            <div className="p-6 border-b border-[#EAE7E3]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl font-medium text-[#333333]">Menu Items</h2>
                        {/* Category Filter Dropdown */}
                        <div>
                            <label htmlFor="category-filter" className="mr-2 text-sm text-[#333333]">Filter by Category:</label>
                            <select
                                id="category-filter"
                                value={selectedCategory}
                                onChange={e => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
                                className="px-3 py-2 rounded border border-[#EAE7E3] bg-white text-[#333333]"
                            >
                                <option value="all">All</option>
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <Link href="/cms/item-form">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-[#465775] text-white rounded-lg hover:bg-[#465775]/90 transition-colors duration-300">
                            <Plus size={16} />
                            <span>Add Item</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-[#F8F5F2]">
                        <tr>
                            <th className="text-left p-4 text-sm font-medium text-[#333333]">Item</th>
                            <th className="text-left p-4 text-sm font-medium text-[#333333]">Category</th>
                            <th className="text-left p-4 text-sm font-medium text-[#333333]">Price</th>
                            <th className="text-left p-4 text-sm font-medium text-[#333333]">Status</th>
                            <th className="text-left p-4 text-sm font-medium text-[#333333]">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedItems.map((item, index) => (
                            <motion.tr
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="border-b border-[#EAE7E3] hover:bg-[#F8F5F2]/50 transition-colors duration-200"
                            >
                                <td className="p-4">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-lg object-cover"
                                        />
                                        <span className="font-medium text-[#333333]">{item.name}</span>
                                    </div>
                                </td>
                                <td className="p-4 text-[#333333] opacity-80">{item.category}</td>
                                <td className="p-4 font-medium text-[#465775]">{item.price}</td>
                                <td className="p-4">
                                    <button
                                        onClick={() => toggleItemStatus(item.id)}
                                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${item.status === 'active'
                                            ? 'bg-green-100 text-green-800 hover:bg-green-200'
                                            : 'bg-red-100 text-red-800 hover:bg-red-200'
                                            }`}
                                    >
                                        {item.status}
                                    </button>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center space-x-2">
                                        <Link href={`/cms/item-form?id=${item.id}&mode=edit`}>
                                            <button className="p-2 text-[#465775] hover:bg-[#465775]/10 rounded-lg transition-colors duration-300">
                                                <Edit size={16} />
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDeleteItem(item.id)}
                                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-300"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 py-4">
                        <button
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1 rounded bg-[#EAE7E3] text-[#465775] disabled:opacity-50"
                        >
                            Prev
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-[#465775] text-white' : 'bg-[#EAE7E3] text-[#465775]'}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 rounded bg-[#EAE7E3] text-[#465775] disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

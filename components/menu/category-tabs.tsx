"use client"

import { useCallback } from "react"

interface Category {
    id: string
    name: string
    icon?: string
}

interface CategoryTabsProps {
    categories: Category[]
    selectedCategory: string
    onCategoryChange: (categoryId: string) => void
}

export default function CategoryTabs({ categories, selectedCategory, onCategoryChange }: CategoryTabsProps) {
    const handleCategoryClick = useCallback(
        (categoryId: string) => {
            onCategoryChange(categoryId)
        },
        [onCategoryChange],
    )

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className={`group flex items-center space-x-3 px-6 py-3 rounded-2xl transition-all duration-300 ${selectedCategory === category.id
                        ? "bg-[#465775] text-white shadow-lg scale-105"
                        : "bg-white text-[#333333] hover:bg-[#EAE7E3] shadow-md hover:shadow-lg hover:scale-102"
                        }`}
                >
                    <span className="text-xl">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                </button>
            ))}
        </div>
    )
}

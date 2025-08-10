import React from 'react';

interface CategoryTabsProps {
    selectedCategory: string;
    setSelectedCategory: (id: string) => void;
    categories: { id: string; name: string; icon: string }[];
}

export default function CategoryTabs({ selectedCategory, setSelectedCategory, categories }: CategoryTabsProps) {
    return (
        <div className="flex flex-wrap justify-center gap-6 mb-16">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`group flex items-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-300 ${selectedCategory === category.id
                        ? 'bg-[#465775] text-white shadow-lg scale-105'
                        : 'bg-white text-[#333333] hover:bg-[#EAE7E3] shadow-md hover:shadow-lg hover:scale-102'
                        }`}
                >
                    <span className="text-2xl">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                </button>
            ))}
        </div>
    );
}

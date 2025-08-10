"use client"

import React, { useEffect, useState } from "react"
import { BarChart3 } from "lucide-react"
import { toast } from "react-toastify"

interface Category {
    id: string
    name: string
    icon?: string
}
export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([])
    const [newCategory, setNewCategory] = useState("")
    const [newIcon, setNewIcon] = useState("")
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        fetch("/api/category")
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setCategories(data.map((cat: any) => ({ id: cat._id || cat.id, name: cat.name, icon: cat.icon })))
            })
            .catch(() => toast.error("Failed to fetch categories"))
    }, [])

    const handleAddCategory = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!newCategory.trim()) return toast.error("Category name required")
        setLoading(true)
        try {
            const res = await fetch("/api/category", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: newCategory, icon: newIcon })
            })
            if (res.ok) {
                const data = await res.json()
                setCategories([...categories, { id: data._id || data.id, name: data.name, icon: data.icon }])
                setNewCategory("")
                setNewIcon("")
                setShowModal(false)
                toast.success("Category added")
            } else {
                toast.error("Failed to add category")
            }
        } catch {
            toast.error("Failed to add category")
        }
        setLoading(false)
    }

    return (
        <div className="min-h-screen bg-[#F8F5F2] p-8">
            <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 size={28} /> Categories
            </h1>
            <button
                onClick={() => setShowModal(true)}
                className="mb-6 px-4 py-2 bg-[#465775] text-white rounded-lg hover:bg-[#465775]/90 transition-colors duration-300"
            >
                Add New Category
            </button>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
                    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Add Category</h2>
                        <form onSubmit={handleAddCategory} className="flex flex-col gap-4">
                            <input
                                type="text"
                                value={newCategory}
                                onChange={e => setNewCategory(e.target.value)}
                                placeholder="Category name"
                                className="px-4 py-2 rounded border border-[#EAE7E3] bg-white text-[#333333]"
                                disabled={loading}
                                autoFocus
                            />
                            <input
                                type="text"
                                value={newIcon}
                                onChange={e => setNewIcon(e.target.value)}
                                placeholder="Icon (emoji, e.g. 🍵)"
                                className="px-4 py-2 rounded border border-[#EAE7E3] bg-white text-[#333333]"
                                disabled={loading}
                            />
                            <div className="flex gap-2 mt-2">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#465775] text-white rounded-lg hover:bg-[#465775]/90 transition-colors duration-300"
                                    disabled={loading}
                                >
                                    {loading ? "Adding..." : "Add Category"}
                                </button>
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-200 text-[#333333] rounded-lg hover:bg-gray-300 transition-colors duration-300"
                                    onClick={() => { setShowModal(false); setNewCategory(""); setNewIcon(""); }}
                                    disabled={loading}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <div className="bg-white rounded-xl shadow p-6">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left p-4">No.</th>
                            <th className="text-left p-4">Icon</th>
                            <th className="text-left p-4">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((cat, idx) => (
                            <tr key={cat.id} className="border-b">
                                <td className="p-4 font-medium">{idx + 1}</td>
                                <td className="p-4 text-2xl">
                                    {cat.icon ? cat.icon : <BarChart3 size={20} className="text-[#465775]" />}
                                </td>
                                <td className="p-4">{cat.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

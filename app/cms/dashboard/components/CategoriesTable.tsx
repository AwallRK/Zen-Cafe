import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BarChart3, Plus, Edit, Trash2 } from 'lucide-react'

interface Category {
    _id?: string
    id?: string
    name: string
    icon?: string
}

interface Props {
    categoriesData: Category[]
}

const CategoriesTable: React.FC<Props> = ({ categoriesData: initialCategories }) => {
    const [showModal, setShowModal] = useState(false)
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [icon, setIcon] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [editId, setEditId] = useState<string | null>(null)
    const [categories, setCategories] = useState<Category[]>(initialCategories)
    // Refresh categories from API after create/update/delete
    const fetchCategories = async () => {
        try {
            const res = await fetch('/api/category')
            if (res.ok) {
                const data = await res.json()
                setCategories(data)
            }
        } catch { }
    }

    useEffect(() => {
        setCategories(initialCategories)
    }, [initialCategories])

    const handleCreateOrUpdateCategory = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess('')
        try {
            let res
            if (editId) {
                // Update category
                res = await fetch(`/api/category?id=${editId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, icon })
                })
            } else {
                // Create category with custom id
                res = await fetch('/api/category', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id, name, icon })
                })
            }
            if (res.ok) {
                toast.success(editId ? 'Category updated!' : 'Category created!')
                setId('')
                setName('')
                setIcon('')
                setEditId(null)
                setShowModal(false)
                await fetchCategories()
            } else {
                setError(editId ? 'Failed to update category' : 'Failed to create category')
                setTimeout(() => setError(''), 2000)
            }
        } catch {
            setError(editId ? 'Failed to update category' : 'Failed to create category')
            setTimeout(() => setError(''), 2000)
        }
        setLoading(false)
    }

    const handleDeleteCategory = async (id: string) => {
        const result = await Swal.fire({
            title: 'Delete Category',
            text: 'Are you sure you want to delete this category? This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#465775',
            confirmButtonText: 'Yes, delete it',
            cancelButtonText: 'Cancel',
        })
        if (!result.isConfirmed) return
        setLoading(true)
        setError('')
        setSuccess('')
        try {
            const res = await fetch(`/api/category?id=${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
            if (res.ok) {
                toast.success('Category deleted!')
                await fetchCategories()
            } else {
                setError('Failed to delete category')
                setTimeout(() => setError(''), 2000)
            }
        } catch {
            setError('Failed to delete category')
            setTimeout(() => setError(''), 2000)
        }
        setLoading(false)
    }

    const openEditModal = (cat: Category) => {
        setEditId(cat._id || cat.id || null)
        setId(cat.id || '')
        setName(cat.name)
        setIcon(cat.icon || '')
        setShowModal(true)
    }

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium text-[#333333]">Categories</h2>
                <button
                    className="flex items-center space-x-2 px-4 py-2 bg-[#465775] text-white rounded-lg hover:bg-[#465775]/90 transition-colors duration-300"
                    onClick={() => setShowModal(true)}
                >
                    <Plus size={16} />
                    <span>Add New Category</span>
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left p-4">No.</th>
                            <th className="text-left p-4">Icon</th>
                            <th className="text-left p-4">Name</th>
                            <th className="text-left p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((cat, idx) => (
                            <tr key={cat._id || cat.id} className="border-b">
                                <td className="p-4 font-medium">{idx + 1}</td>
                                <td className="p-4 text-2xl">{cat.icon ? cat.icon : <BarChart3 size={20} className="text-[#465775]" />}</td>
                                <td className="p-4">{cat.name}</td>
                                <td className="p-4">
                                    <div className="flex gap-2">
                                        <button
                                            className="p-2 text-blue-700 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                                            onClick={() => openEditModal(cat)}
                                            title="Edit"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            className="p-2 text-red-700 hover:bg-red-100 rounded-lg transition-colors duration-200"
                                            onClick={() => handleDeleteCategory(cat._id || cat.id || '')}
                                            disabled={loading}
                                            title="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Modal */}
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                toastStyle={{ backgroundColor: '#F8F5F2', color: '#333333', border: '1px solid #EAE7E3' }}
            />
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                        <h3 className="text-lg font-medium mb-4">{editId ? 'Edit Category' : 'Add New Category'}</h3>
                        <form onSubmit={handleCreateOrUpdateCategory} className="space-y-4">
                            {!editId && (
                                <div>
                                    <label className="block text-sm mb-1">Custom ID (e.g. tea, sweets)</label>
                                    <input
                                        type="text"
                                        value={id}
                                        onChange={e => setId(e.target.value)}
                                        className="w-full px-3 py-2 border rounded"
                                        required
                                        placeholder="e.g. tea, sweets"
                                    />
                                </div>
                            )}
                            <div>
                                <label className="block text-sm mb-1">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Icon (emoji)</label>
                                <input
                                    type="text"
                                    value={icon}
                                    onChange={e => setIcon(e.target.value)}
                                    className="w-full px-3 py-2 border rounded"
                                    maxLength={2}
                                    placeholder="🍵"
                                />
                            </div>
                            {error && <div className="text-red-500 text-sm">{error}</div>}
                            {success && <div className="text-green-500 text-sm">{success}</div>}
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-200 rounded"
                                    onClick={() => { setShowModal(false); setEditId(null); setName(''); setIcon(''); }}
                                >Cancel</button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#465775] text-white rounded-lg"
                                    disabled={loading}
                                >{loading ? (editId ? 'Updating...' : 'Creating...') : (editId ? 'Update' : 'Create')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CategoriesTable

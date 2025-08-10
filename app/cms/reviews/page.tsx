"use client"

import { useEffect, useState } from "react"
import { Edit } from "lucide-react"
import { toast } from "react-toastify"

interface Review {
    id: string
    name: string
    rating: number
    comment: string
}

export default function ReviewsPage() {
    const [reviews, setReviews] = useState<Review[]>([])
    useEffect(() => {
        fetch("/api/review")
            .then(res => res.json())
            .then(data => {
                setReviews(data.map((review: any) => ({
                    id: review._id || review.id,
                    name: review.name || "-",
                    rating: review.rating || 0,
                    comment: review.comment || ""
                })))
            })
            .catch(() => toast.error("Failed to fetch reviews"))
    }, [])

    return (
        <div className="min-h-screen bg-[#F8F5F2] p-8">
            <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Edit size={28} /> Reviews
            </h1>
            <div className="bg-white rounded-xl shadow p-6">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left p-4">ID</th>
                            <th className="text-left p-4">Name</th>
                            <th className="text-left p-4">Rating</th>
                            <th className="text-left p-4">Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map(review => (
                            <tr key={review.id} className="border-b">
                                <td className="p-4">{review.id}</td>
                                <td className="p-4">{review.name}</td>
                                <td className="p-4">{review.rating}</td>
                                <td className="p-4">{review.comment}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

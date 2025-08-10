interface Review {
    _id?: string
    id?: string
    name: string
    rating: string
    comment: string
}

interface Props {
    reviewsData: Review[]
}

export default function ReviewsTable({ reviewsData }: Props) {
    return (
        <div className="p-6">
            <h2 className="text-xl font-medium text-[#333333] mb-4">Reviews</h2>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left p-4">Name</th>
                            <th className="text-left p-4">Rating</th>
                            <th className="text-left p-4">Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviewsData.map(review => (
                            <tr key={review._id || review.id} className="border-b">
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

"use client"

import { useEffect, useState } from "react"
import { ShoppingBag } from "lucide-react"
import { toast } from "react-toastify"

interface Order {
    id: string
    customer: string
    items: string
    total: string
    status: string
}

export default function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([])
    useEffect(() => {
        fetch("/api/order")
            .then(res => res.json())
            .then(data => {
                setOrders(data.map((order: any) => ({
                    id: order._id || order.id,
                    customer: order.customer || "-",
                    items: order.items ? order.items.length : 0,
                    total: order.total || "-",
                    status: order.status || "pending"
                })))
            })
            .catch(() => toast.error("Failed to fetch orders"))
    }, [])

    return (
        <div className="min-h-screen bg-[#F8F5F2] p-8">
            <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <ShoppingBag size={28} /> Orders
            </h1>
            <div className="bg-white rounded-xl shadow p-6">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left p-4">ID</th>
                            <th className="text-left p-4">Customer</th>
                            <th className="text-left p-4">Items</th>
                            <th className="text-left p-4">Total</th>
                            <th className="text-left p-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id} className="border-b">
                                <td className="p-4">{order.id}</td>
                                <td className="p-4">{order.customer}</td>
                                <td className="p-4">{order.items}</td>
                                <td className="p-4">{order.total}</td>
                                <td className="p-4">{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

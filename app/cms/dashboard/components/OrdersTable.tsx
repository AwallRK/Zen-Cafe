import { useState } from "react";
import Image from "next/image";
interface Customer {
    firstName?: string
    lastName?: string
}

interface Order {
    _id?: string
    id?: string
    customer?: Customer
    cart?: any[]
    total?: string
    paymentMethod?: string
}

interface Props {
    ordersData: Order[]
}

export default function OrdersTable({ ordersData }: Props) {
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

    return (
        <div className="p-6">
            <h2 className="text-xl font-medium text-[#333333] mb-4">Orders</h2>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left p-4">ID</th>
                            <th className="text-left p-4">Customer</th>
                            <th className="text-left p-4">Items</th>
                            <th className="text-left p-4">Total</th>
                            <th className="text-left p-4">Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersData.map(order => (
                            <tr key={order._id || order.id} className="border-b">
                                <td className="p-4">{order._id || order.id}</td>
                                <td className="p-4">{
                                    order.customer
                                        ? (order.customer.firstName + ' ' + order.customer.lastName)
                                        : '-'
                                }</td>
                                <td className="p-4">
                                    {order.cart && order.cart.length > 0 ? (
                                        <button
                                            className="text-blue-600 underline hover:text-blue-800"
                                            onClick={() => setSelectedOrder(order)}
                                        >
                                            {order.cart.length === 1
                                                ? '1 item'
                                                : `${order.cart.length} items`}
                                        </button>
                                    ) : '-'}
                                </td>
                                <td className="p-4">{order.total || '-'}</td>
                                <td className="p-4">{order.paymentMethod || 'pending'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal for showing ordered items */}
            {selectedOrder && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full relative">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setSelectedOrder(null)}
                        >
                            Close
                        </button>
                        <h3 className="text-lg font-semibold mb-4">Ordered Items</h3>
                        <ul className="space-y-4">
                            {selectedOrder.cart?.map((item: any) => (
                                <li key={item._id || item.id} className="flex items-center space-x-4">
                                    <Image src={item.image} alt={item.name} width={48} height={48} className="rounded" />
                                    <div>
                                        <div className="font-medium">{item.name}</div>
                                        <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
                                        <div className="text-sm text-gray-600">Price: ¥{item.price}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}


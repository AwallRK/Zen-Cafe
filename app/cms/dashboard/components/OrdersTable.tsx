interface Order {
    _id?: string
    id?: string
    customer?: string
    items?: any[]
    total?: string
    status?: string
}

interface Props {
    ordersData: Order[]
}

export default function OrdersTable({ ordersData }: Props) {
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
                            <th className="text-left p-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersData.map(order => (
                            <tr key={order._id || order.id} className="border-b">
                                <td className="p-4">{order._id || order.id}</td>
                                <td className="p-4">{order.customer || '-'}</td>
                                <td className="p-4">{order.items ? order.items.length : 0}</td>
                                <td className="p-4">{order.total || '-'}</td>
                                <td className="p-4">{order.status || 'pending'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

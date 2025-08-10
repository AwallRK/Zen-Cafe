import { Minus, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface CartItem {
    id: string;
    name: string;
    price: number | string;
    quantity: number;
    image?: string;
}

interface Props {
    cart: CartItem[];
    updateQuantity: (id: string, quantity: number) => void;
    removeFromCart: (id: string) => void;
}

export default function CartItems({ cart, updateQuantity, removeFromCart }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
        >
            <h2 className="text-2xl font-light text-[#333333] mb-4">Your Items</h2>
            <div className="space-y-4">
                {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-[#F8F5F2] rounded-xl">
                        <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                            <h3 className="font-medium text-[#333333]">{item.name}</h3>
                            <p className="text-[#465775] font-medium">{item.price}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                className="w-8 h-8 rounded-full bg-[#D3D3D3] hover:bg-[#465775] hover:text-white transition-colors duration-300 flex items-center justify-center"
                            >
                                <Minus size={16} />
                            </button>
                            <span className="w-8 text-center font-medium text-[#333333]">
                                {item.quantity}
                            </span>
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-full bg-[#D3D3D3] hover:bg-[#465775] hover:text-white transition-colors duration-300 flex items-center justify-center"
                            >
                                <Plus size={16} />
                            </button>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="ml-2 px-2 py-1 bg-red-100 text-red-700 rounded"
                                title="Remove"
                            >Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

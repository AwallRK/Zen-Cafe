import { ShoppingBag, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
    orderType: 'pickup' | 'delivery';
    setOrderType: (type: 'pickup' | 'delivery') => void;
}

export default function OrderTypeSelector({ orderType, setOrderType }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
        >
            <h2 className="text-2xl font-light text-[#333333] mb-4">Order Type</h2>
            <div className="grid grid-cols-2 gap-4">
                <button
                    onClick={() => setOrderType('pickup')}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${orderType === 'pickup'
                        ? 'border-[#465775] bg-[#465775]/5'
                        : 'border-[#D3D3D3] hover:border-[#465775]/50'
                        }`}
                >
                    <ShoppingBag className="mx-auto mb-2 text-[#465775]" size={24} />
                    <div className="text-[#333333] font-medium">Pickup</div>
                    <div className="text-[#333333] opacity-60 text-sm">Ready in 15-20 min</div>
                </button>
                <button
                    onClick={() => setOrderType('delivery')}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${orderType === 'delivery'
                        ? 'border-[#465775] bg-[#465775]/5'
                        : 'border-[#D3D3D3] hover:border-[#465775]/50'
                        }`}
                >
                    <MapPin className="mx-auto mb-2 text-[#465775]" size={24} />
                    <div className="text-[#333333] font-medium">Delivery</div>
                    <div className="text-[#333333] opacity-60 text-sm">30-45 min • 300</div>
                </button>
            </div>
        </motion.div>
    );
}

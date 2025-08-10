import { CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

interface Props {
    subtotal: number;
    tax: number;
    deliveryFee: number;
    total: number;
    form: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    loading: boolean;
    success: string;
    error: string;
}

export default function OrderSummary({ subtotal, tax, deliveryFee, total, form, handleChange, handleSubmit, loading, success, error }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-lg h-fit sticky top-24"
        >
            <h2 className="text-2xl font-light text-[#333333] mb-6">Order Summary</h2>
            <div className="space-y-3 mb-6">
                <div className="flex justify-between text-[#333333]">
                    <span>Subtotal</span>
                    <span>¥{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#333333]">
                    <span>Tax</span>
                    <span>¥{tax.toLocaleString()}</span>
                </div>
                {deliveryFee > 0 && (
                    <div className="flex justify-between text-[#333333]">
                        <span>Delivery Fee</span>
                        <span>¥{deliveryFee.toLocaleString()}</span>
                    </div>
                )}
                <div className="border-t border-[#D3D3D3] pt-3">
                    <div className="flex justify-between text-lg font-medium text-[#333333]">
                        <span>Total</span>
                        <span>¥{total.toLocaleString()}</span>
                    </div>
                </div>
            </div>
            {/* Payment Method and Place Order Button below Total */}
            <div className="space-y-4">
                <div className="p-4 bg-[#EAE7E3] rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                        <CreditCard className="text-[#465775]" size={20} />
                        <span className="font-medium text-[#333333]">Payment Method</span>
                    </div>
                    <select
                        name="paymentMethod"
                        value={form.paymentMethod}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                        required
                    >
                        <option>Credit Card</option>
                        <option>PayPay</option>
                        <option>Cash (Pickup Only)</option>
                    </select>
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-[#465775] text-white py-4 rounded-full hover:bg-[#465775]/90 transition-colors duration-300 text-lg font-medium"
                    disabled={loading}
                >
                    {loading ? 'Placing Order...' : 'Place Order'}
                </button>
                <p className="text-xs text-[#333333] opacity-60 text-center mt-2">
                    By placing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
                {success && <div className="text-green-600 text-sm text-center">{success}</div>}
                {error && <div className="text-red-600 text-sm text-center">{error}</div>}
            </div>
        </motion.div>
    );
}

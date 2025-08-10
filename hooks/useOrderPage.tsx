import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { sendOrderEmail } from '@/lib/email';

export default function useOrderPage() {
    const router = useRouter();
    const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
    const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        streetAddress: '',
        city: '',
        prefecture: '',
        postalCode: '',
        paymentMethod: 'Credit Card',
    });
    const [loading, setLoading] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const subtotal = cart.reduce((sum, item) => {
        const price = typeof item.price === 'string' ? parseInt(item.price.replace(/[^\d]/g, ''), 10) : Number(item.price) || 0;
        const quantity = Number(item.quantity) || 0;
        return sum + (price * quantity);
    }, 0);
    const tax = Math.round(subtotal * 0.1);
    const deliveryFee = orderType === 'delivery' ? 300 : 0;
    const total = subtotal + tax + deliveryFee;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setShowLoading(true);
        setError("");
        setSuccess("");
        type OrderItem = {
            id: string;
            name: string;
            price: number;
            quantity: number;
            image?: string;
            [key: string]: any;
        };

        type OrderData = {
            orderType: 'pickup' | 'delivery';
            cart: OrderItem[];
            paymentMethod: string;
            customer: {
                firstName: string;
                lastName: string;
                email: string;
                phone: string;
                streetAddress?: string;
                city?: string;
                prefecture?: string;
                postalCode?: string;
            };
            subtotal: number;
            tax: number;
            total: number;
            deliveryFee?: number;
        };

        const orderData: OrderData = {
            orderType,
            cart: cart.map(item => ({
                ...item,
                price: typeof item.price === 'string' ? parseInt(item.price.replace(/[^\d]/g, ''), 10) : Number(item.price) || 0,
            })),
            paymentMethod: form.paymentMethod,
            customer: {
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email,
                phone: form.phone,
                streetAddress: form.streetAddress,
                city: form.city,
                prefecture: form.prefecture,
                postalCode: form.postalCode,
            },
            ...(orderType === 'delivery' ? { deliveryFee } : {}),
            subtotal,
            tax,
            total,
        };

        try {
            if (form.paymentMethod === 'Credit Card') {
                // Stripe Checkout flow
                const res = await fetch('/api/create-checkout-session', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(orderData),
                });
                const data = await res.json();
                if (res.ok && data.url) {
                    try {
                        await sendOrderEmail({
                            customer_name: `${form.firstName} ${form.lastName}`,
                            customer_email: form.email,
                            order_id: (await res.json())._id || '',
                            order_date: new Date().toLocaleString(),
                            order_items: cart.map(item => ({
                                name: item.name,
                                quantity: item.quantity,
                                price: typeof item.price === 'string' ? parseInt(item.price.replace(/[^\d]/g, ''), 10) : Number(item.price) || 0,
                            })),
                            subtotal_formatted: `¥${subtotal.toLocaleString()}`,
                            shipping_formatted: orderType === 'delivery' ? `¥${deliveryFee.toLocaleString()}` : 'Pickup',
                            total_formatted: `¥${total.toLocaleString()}`,
                            shipping_address_line_1: form.streetAddress,
                            shipping_address_line_2: '',
                            shipping_city: form.city,
                            shipping_prefecture: form.prefecture,
                            shipping_postal: form.postalCode,
                            orderType,
                            email: form.email,
                        });
                    } catch (err) {
                        console.error('Email send error:', err);
                    }
                    clearCart();
                    window.location.href = data.url;
                } else {
                    setError(data.error || 'Failed to start payment. Please try again.');
                }
            } else {
                // Normal order flow (PayPay or Cash)
                const res = await fetch('/api/order', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(orderData),
                });
                if (res.ok) {
                    try {
                        await sendOrderEmail({
                            customer_name: `${form.firstName} ${form.lastName}`,
                            customer_email: form.email,
                            order_id: (await res.json())._id || '',
                            order_date: new Date().toLocaleString(),
                            order_items: cart.map(item => ({
                                name: item.name,
                                quantity: item.quantity,
                                price: typeof item.price === 'string' ? parseInt(item.price.replace(/[^\d]/g, ''), 10) : Number(item.price) || 0,
                            })),
                            subtotal_formatted: `¥${subtotal.toLocaleString()}`,
                            shipping_formatted: orderType === 'delivery' ? `¥${deliveryFee.toLocaleString()}` : 'Pickup',
                            total_formatted: `¥${total.toLocaleString()}`,
                            shipping_address_line_1: form.streetAddress,
                            shipping_address_line_2: '',
                            shipping_city: form.city,
                            shipping_prefecture: form.prefecture,
                            shipping_postal: form.postalCode,
                            orderType,
                            email: form.email,
                        });
                    } catch (err) {
                        console.error('Email send error:', err);
                    }
                    setSuccess('Order placed successfully!');
                    clearCart();
                    setForm({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        streetAddress: '',
                        city: '',
                        prefecture: '',
                        postalCode: '',
                        paymentMethod: 'Credit Card',
                    });
                    setTimeout(() => {
                        router.push('/');
                    }, 1800);
                } else {
                    setError('Failed to place order. Please try again.');
                }
            }
        } catch (err: any) {
            setError('Failed to place order. Please try again.');
        }
        setLoading(false);
        setShowLoading(false);
    };

    return {
        orderType,
        setOrderType,
        cart,
        updateQuantity,
        removeFromCart,
        clearCart,
        form,
        setForm,
        loading,
        showLoading,
        success,
        error,
        subtotal,
        tax,
        deliveryFee,
        total,
        handleChange,
        handleSubmit,
    };
}

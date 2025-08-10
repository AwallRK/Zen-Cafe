"use client"

import OrderTypeSelector from '@/components/order/OrderTypeSelector';
import CartItems from '@/components/order/CartItems';
import CustomerForm from '@/components/order/CustomerForm';
import OrderSummary from '@/components/order/OrderSummary';
import { sendOrderEmail } from '@/lib/email';

declare global {
  interface Window {
    snap?: any;
  }
}

import { useState } from 'react'
import { motion } from 'framer-motion'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import SakuraCursor from '@/components/sakura-cursor'
import { useCart } from "@/context/CartContext"
import { useRouter } from 'next/navigation'

export default function OrderPage() {
  // Remove Midtrans Snap.js script loading
  const router = useRouter()
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup')
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()
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
  })
  const [loading, setLoading] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const subtotal = cart.reduce((sum, item) => {
    const price = typeof item.price === 'string' ? parseInt(item.price.replace(/[^\d]/g, ''), 10) : Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return sum + (price * quantity);
  }, 0);
  const tax = Math.round(subtotal * 0.1);
  const deliveryFee = orderType === 'delivery' ? 300 : 0;
  const total = subtotal + tax + deliveryFee

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

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
        price: typeof item.price === "string" ? parseInt(item.price.replace(/[^\d]/g, ""), 10) : Number(item.price) || 0,
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
      if (form.paymentMethod === "Credit Card") {
        // Stripe Checkout flow
        const res = await fetch("/api/create-checkout-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        });
        const data = await res.json();
        if (res.ok && data.url) {
          clearCart();
          window.location.href = data.url;
        } else {
          setError(data.error || "Failed to start payment. Please try again.");
        }
      } else {
        // Normal order flow (PayPay or Cash)
        const res = await fetch("/api/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        });
        if (res.ok) {
          // Send order confirmation email
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
            });
          } catch (err) {
            console.error('Email send error:', err);
          }
          setSuccess("Order placed successfully!");
          clearCart();
          setForm({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            streetAddress: "",
            city: "",
            prefecture: "",
            postalCode: "",
            paymentMethod: "Credit Card",
          });
          setTimeout(() => {
            router.push("/");
          }, 1800);
        } else {
          setError("Failed to place order. Please try again.");
        }
      }
    } catch (err: any) {
      setError("Failed to place order. Please try again.");
    }
    setLoading(false);
    setShowLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      {showLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <svg className="animate-spin h-8 w-8 text-[#465775] mb-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="#465775" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            <span className="text-[#333333] text-lg font-medium">Processing your order...</span>
          </div>
        </div>
      )}

      <Navigation cartItems={cart} />

      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-light text-[#333333] mb-4 tracking-wide">
              Your Order
            </h1>
            <p className="text-lg text-[#333333] opacity-80">
              Complete your order for pickup or delivery
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Details */}
            <div className="lg:col-span-2 space-y-6">
              <OrderTypeSelector orderType={orderType} setOrderType={setOrderType} />
              <CartItems cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
              <CustomerForm orderType={orderType} form={form} handleChange={handleChange} handleSubmit={handleSubmit} success={success} error={error} />
            </div>
            <OrderSummary subtotal={subtotal} tax={tax} deliveryFee={deliveryFee} total={total} form={form} handleChange={handleChange} handleSubmit={handleSubmit} loading={loading} success={success} error={error} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Sakura Cursor */}
      <SakuraCursor />
    </div>
  )
}

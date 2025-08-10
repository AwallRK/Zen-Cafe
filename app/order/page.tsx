
"use client";

// Order page for pickup/delivery, clean and maintainable
import OrderTypeSelector from '@/components/order/OrderTypeSelector';
import CartItems from '@/components/order/CartItems';
import CustomerForm from '@/components/order/CustomerForm';
import OrderSummary from '@/components/order/OrderSummary';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import SakuraCursor from '@/components/sakura-cursor';
import { motion } from 'framer-motion';
import useOrderPage from '@/hooks/useOrderPage';

export default function OrderPage() {
  const {
    orderType,
    setOrderType,
    cart,
    updateQuantity,
    removeFromCart,
    form,
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
  } = useOrderPage();

  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      {/* Loading overlay */}
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

      {/* Navigation bar with cart */}
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
            <OrderSummary
              subtotal={subtotal}
              tax={tax}
              deliveryFee={deliveryFee}
              total={total}
              form={form}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              loading={loading}
              success={success}
              error={error}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Sakura Cursor */}
      <SakuraCursor />
    </div>
  );
}

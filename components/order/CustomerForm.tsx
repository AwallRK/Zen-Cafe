import React from 'react';

interface Props {
    orderType: 'pickup' | 'delivery';
    form: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    success: string;
    error: string;
}

export default function CustomerForm({ orderType, form, handleChange, handleSubmit, success, error }: Props) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-light text-[#333333] mb-4">
                {orderType === 'pickup' ? 'Contact Information' : 'Delivery Information'}
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                        required
                    />
                </div>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                    required
                />
                {orderType === 'delivery' && (
                    <>
                        <input
                            type="text"
                            name="streetAddress"
                            value={form.streetAddress}
                            onChange={handleChange}
                            placeholder="Street Address"
                            className="w-full px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                            required
                        />
                        <div className="grid md:grid-cols-3 gap-4">
                            <input
                                type="text"
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                placeholder="City"
                                className="px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                                required
                            />
                            <input
                                type="text"
                                name="prefecture"
                                value={form.prefecture}
                                onChange={handleChange}
                                placeholder="Prefecture"
                                className="px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                                required
                            />
                            <input
                                type="text"
                                name="postalCode"
                                value={form.postalCode}
                                onChange={handleChange}
                                placeholder="Postal Code"
                                className="px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                                required
                            />
                        </div>
                    </>
                )}
                {success && <div className="text-green-600 text-sm">{success}</div>}
                {error && <div className="text-red-600 text-sm">{error}</div>}
            </form>
        </div>
    );
}

import mongoose, { Schema, Document, Model } from 'mongoose';

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export interface Order extends Document {
    orderType: 'pickup' | 'delivery';
    cart: CartItem[];
    subtotal: number;
    tax: number;
    deliveryFee?: number;
    total: number;
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
    createdAt: Date;
    updatedAt: Date;
}

const CartItemSchema = new Schema<CartItem>({
    id: { type: String, required: false },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, required: true },
});

const OrderSchema: Schema<Order> = new Schema(
    {
        orderType: { type: String, enum: ['pickup', 'delivery'], required: true },
        cart: [CartItemSchema],
        subtotal: { type: Number, required: true },
        tax: { type: Number, required: true },
        deliveryFee: { type: Number },
        total: { type: Number, required: true },
        paymentMethod: { type: String, required: true },
        customer: {
            firstName: { type: String, required: true },
            lastName: { type: String, required: true },
            email: { type: String, required: true },
            phone: { type: String, required: true },
            streetAddress: { type: String },
            city: { type: String },
            prefecture: { type: String },
            postalCode: { type: String },
        },
    },
    { timestamps: true }
);

const OrderModel: Model<Order> = mongoose.models.Order || mongoose.model<Order>('Order', OrderSchema);

export default OrderModel;
// Order model schema
// TODO: Implement Order mongoose schema

import mongoose, { Schema, Document, Model } from 'mongoose';

export interface MenuItem extends Document {
    id: string;
    name: string;
    description: string;
    price: string;
    category: string;
    image: string;
    ingredients?: string[];
    preparationTime?: string;
    isSignature?: boolean;
    isOrganic?: boolean;
    rating?: number;
    origin?: string;
    createdAt: Date;
    updatedAt: Date;
}

const MenuItemSchema: Schema<MenuItem> = new Schema(
    {
        id: { type: String, required: false, unique: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: String, required: true },
        category: { type: String, required: true },
        image: { type: String, required: true },
        ingredients: [{ type: String }],
        preparationTime: { type: String },
        isSignature: { type: Boolean, default: false },
        isOrganic: { type: Boolean, default: false },
        rating: { type: Number },
        origin: { type: String },
    },
    { timestamps: true }
);

const MenuItemModel: Model<MenuItem> = mongoose.models.MenuItem || mongoose.model<MenuItem>('MenuItem', MenuItemSchema);

export default MenuItemModel;
// Menu item model schema
// TODO: Implement MenuItem mongoose schema

import mongoose, { Schema, Document, Model } from 'mongoose';

export interface Category extends Document {
    id: string;
    name: string;
    icon?: string;
    createdAt: Date;
    updatedAt: Date;
}

const CategorySchema: Schema<Category> = new Schema(
    {
        id: { type: String, required: false, unique: true },
        name: { type: String, required: true },
        icon: { type: String },
    },
    { timestamps: true }
);

const CategoryModel: Model<Category> = mongoose.models.Category || mongoose.model<Category>('Category', CategorySchema);

export default CategoryModel;// Category model schema
// TODO: Implement Category mongoose schema



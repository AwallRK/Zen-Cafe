import mongoose, { Schema, Document, Model, Types } from 'mongoose';

export interface Review extends Document {
    menuItem: Types.ObjectId; // Reference to MenuItem
    name?: string; // Reviewer name or anonymous
    rating: number;
    comment: string;
    id?: string;
    createdAt: Date;
    updatedAt: Date;
}

const ReviewSchema: Schema<Review> = new Schema(
    {
        menuItem: { type: Schema.Types.ObjectId, ref: 'MenuItem', required: true },
        name: { type: String, default: 'Anonymous' },
        rating: { type: Number, required: true, min: 1, max: 5 },
        comment: { type: String, required: true },
        id: { type: String, required: false },
    },
    { timestamps: true }
);

const ReviewModel: Model<Review> = mongoose.models.Review || mongoose.model<Review>('Review', ReviewSchema);

export default ReviewModel;

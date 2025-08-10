import mongoose, { Schema, Document, Model } from 'mongoose';

export interface Admin extends Document {
    id?: string;
    name: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}

const AdminSchema: Schema<Admin> = new Schema(
    {
        id: { type: String, required: false },
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, default: 'admin' },
    },
    { timestamps: true }
);

const AdminModel: Model<Admin> = mongoose.models.Admin || mongoose.model<Admin>('Admin', AdminSchema);

export default AdminModel;

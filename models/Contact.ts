import mongoose, { Schema, Document, Model } from 'mongoose';

export interface Contact extends Document {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
}

const ContactSchema: Schema<Contact> = new Schema(
    {
        id: { type: String, required: false },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        subject: { type: String, required: true },
        message: { type: String, required: true },
    },
    { timestamps: true }
);

const ContactModel: Model<Contact> = mongoose.models.Contact || mongoose.model<Contact>('Contact', ContactSchema);

export default ContactModel;
// Contact form model schema
// TODO: Implement Contact mongoose schema

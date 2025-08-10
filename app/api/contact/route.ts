import { NextResponse } from 'next/server';
import dbConnect from '@/lib/database';
import Contact from '@/models/Contact';

// GET all contacts or single contact by id
export async function GET(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (id) {
        const contact = await Contact.findById(id);
        if (!contact) return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
        return NextResponse.json(contact);
    }
    const contacts = await Contact.find();
    return NextResponse.json(contacts);
}

// Create contact
export async function POST(req: Request) {
    await dbConnect();
    const data = await req.json();
    const contact = await Contact.create(data);
    return NextResponse.json(contact);
}

// Update contact by id
export async function PUT(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const data = await req.json();
    const contact = await Contact.findByIdAndUpdate(id, data, { new: true });
    if (!contact) return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
    return NextResponse.json(contact);
}

// Delete contact by id
export async function DELETE(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
    return NextResponse.json({ success: true });
}

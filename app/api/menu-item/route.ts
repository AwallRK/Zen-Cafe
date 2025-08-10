import { NextResponse } from 'next/server';
import dbConnect from '@/lib/database';
import MenuItem from '@/models/MenuItem';

// GET all menu items or single item by id
export async function GET(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (id) {
        const item = await MenuItem.findById(id);
        if (!item) return NextResponse.json({ error: 'Menu item not found' }, { status: 404 });
        return NextResponse.json(item);
    }
    const items = await MenuItem.find();
    return NextResponse.json(items);
}

// Create menu item
export async function POST(req: Request) {
    await dbConnect();
    const data = await req.json();
    const item = await MenuItem.create(data);
    return NextResponse.json(item);
}

// Update menu item by id
export async function PUT(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const data = await req.json();
    const item = await MenuItem.findByIdAndUpdate(id, data, { new: true });
    if (!item) return NextResponse.json({ error: 'Menu item not found' }, { status: 404 });
    return NextResponse.json(item);
}

// Delete menu item by id
export async function DELETE(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const item = await MenuItem.findByIdAndDelete(id);
    if (!item) return NextResponse.json({ error: 'Menu item not found' }, { status: 404 });
    return NextResponse.json({ success: true });
}

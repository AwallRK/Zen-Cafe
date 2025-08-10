import { NextResponse } from 'next/server';
import dbConnect from '@/lib/database';
import Order from '@/models/Order';

// GET all orders or single order by id
export async function GET(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (id) {
        const order = await Order.findById(id);
        if (!order) return NextResponse.json({ error: 'Order not found' }, { status: 404 });
        return NextResponse.json(order);
    }
    const orders = await Order.find();
    return NextResponse.json(orders);
}

// Create order
export async function POST(req: Request) {
    await dbConnect();
    const data = await req.json();
    const order = await Order.create(data);
    return NextResponse.json(order);
}

// Update order by id
export async function PUT(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const data = await req.json();
    const order = await Order.findByIdAndUpdate(id, data, { new: true });
    if (!order) return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    return NextResponse.json(order);
}

// Delete order by id
export async function DELETE(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const order = await Order.findByIdAndDelete(id);
    if (!order) return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    return NextResponse.json({ success: true });
}

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/database';
import Category from '@/models/Category';

// GET all categories or single category by id
export async function GET(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (id) {
        const category = await Category.findById(id);
        if (!category) return NextResponse.json({ error: 'Category not found' }, { status: 404 });
        return NextResponse.json(category);
    }
    const categories = await Category.find();
    return NextResponse.json(categories);
}

// Create category
export async function POST(req: Request) {
    await dbConnect();
    const data = await req.json();
    const category = await Category.create(data);
    return NextResponse.json(category);
}

// Update category by id
export async function PUT(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const data = await req.json();
    const category = await Category.findByIdAndUpdate(id, data, { new: true });
    if (!category) return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    return NextResponse.json(category);
}

// Delete category by id
export async function DELETE(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const category = await Category.findByIdAndDelete(id);
    if (!category) return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    return NextResponse.json({ success: true });
}

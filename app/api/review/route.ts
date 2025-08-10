import { NextResponse } from 'next/server';
import dbConnect from '@/lib/database';
import Review from '@/models/Review';

// GET all reviews or single review by id
export async function GET(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (id) {
        const review = await Review.findById(id);
        if (!review) return NextResponse.json({ error: 'Review not found' }, { status: 404 });
        return NextResponse.json(review);
    }
    const reviews = await Review.find();
    return NextResponse.json(reviews);
}

// Create review
export async function POST(req: Request) {
    await dbConnect();
    const data = await req.json();
    const review = await Review.create(data);
    return NextResponse.json(review);
}

// Update review by id
export async function PUT(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const data = await req.json();
    const review = await Review.findByIdAndUpdate(id, data, { new: true });
    if (!review) return NextResponse.json({ error: 'Review not found' }, { status: 404 });
    return NextResponse.json(review);
}

// Delete review by id
export async function DELETE(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const review = await Review.findByIdAndDelete(id);
    if (!review) return NextResponse.json({ error: 'Review not found' }, { status: 404 });
    return NextResponse.json({ success: true });
}

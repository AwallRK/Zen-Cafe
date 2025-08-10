import { NextResponse } from 'next/server';
import dbConnect from '@/lib/database';
import Admin from '@/models/Admin';

// GET all admins or single admin by id
export async function GET(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (id) {
        const admin = await Admin.findById(id);
        if (!admin) return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
        return NextResponse.json(admin);
    }
    const admins = await Admin.find();
    return NextResponse.json(admins);
}

// Login or create admin
export async function POST(req: Request) {
    await dbConnect();
    const data = await req.json();
    // If login request
    if (data.email && data.password && Object.keys(data).length === 2) {
        const admin = await Admin.findOne({ email: data.email });
        if (!admin) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        const valid = await import('bcryptjs').then(b => b.default.compare(data.password, admin.password));
        if (!valid) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        const { generateToken } = await import('@/lib/auth');
        const token = await generateToken({ id: admin._id, email: admin.email, role: admin.role });
        return NextResponse.json({ token, admin: { id: admin._id, email: admin.email, role: admin.role, name: admin.name } });
    }
    // Otherwise, create admin (requires name, email, password, role)
    const admin = await Admin.create(data);
    return NextResponse.json(admin);
}

// Update admin by id
export async function PUT(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const data = await req.json();
    const admin = await Admin.findByIdAndUpdate(id, data, { new: true });
    if (!admin) return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
    return NextResponse.json(admin);
}

// Delete admin by id
export async function DELETE(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const admin = await Admin.findByIdAndDelete(id);
    if (!admin) return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
    return NextResponse.json({ success: true });
}

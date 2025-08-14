import { NextRequest, NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(req: NextRequest) {
    const formData = await req.formData()
    const file = formData.get('file') as File | null

    if (!file) {
        return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    try {
        const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({
                folder: 'zen-cafe-menu',
                resource_type: 'image',
            }, (error, result) => {
                if (error) return reject(error)
                resolve(result)
            }).end(buffer)
        })
        return NextResponse.json({ url: (uploadResult as any).secure_url })
    } catch (error) {
        return NextResponse.json({ error: 'Cloudinary upload failed' }, { status: 500 })
    }
}

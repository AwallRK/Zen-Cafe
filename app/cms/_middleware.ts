import { NextResponse } from 'next/server';

export function middleware(req: Request) {
    // Only protect /cms paths except /cms/login
    const url = new URL(req.url);
    if (url.pathname.startsWith('/cms') && url.pathname !== '/cms/login') {
        const token = req.headers.get('authorization');
        if (!token) {
            return NextResponse.redirect(new URL('/cms/login', req.url));
        }
        // Optionally, verify token here (client stores in localStorage, so SSR can't check, but you can use cookies for SSR)
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/cms/:path*'],
};

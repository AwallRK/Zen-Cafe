
import { verifyToken } from './auth';

export async function requireAuth(req: Request) {
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return { authorized: false, error: 'Missing or invalid token' };
    }
    const token = authHeader.replace('Bearer ', '');
    const payload = await verifyToken(token);
    if (!payload) {
        return { authorized: false, error: 'Invalid or expired token' };
    }
    return { authorized: true, payload };
}

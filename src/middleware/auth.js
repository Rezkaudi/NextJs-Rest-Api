import { NextResponse } from 'next/server';
import { verifyToken } from '../utils/auth';

export const withAuth = (handler) => {
  return async (req) => {
    const token = req.headers.get('token');
    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 403 });
    }

    req.user = decoded;
    return handler(req);
  };
};


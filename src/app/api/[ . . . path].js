import { NextResponse } from 'next/server';
export default function handler() {
    return NextResponse.json({ "message": "page not found" }, { "status": 404 });
}

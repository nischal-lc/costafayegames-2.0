import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Prevent redirect loop for /mantainance
    if (request.nextUrl.pathname === '/mantainance') {
        return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = '/mantainance';
    return NextResponse.redirect(url);
}
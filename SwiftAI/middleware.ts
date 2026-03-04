import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Routes that are only accessible via internal client-side navigation.
 * Directly entering these URLs in the browser redirects to the homepage.
 */
const INTERNAL_ONLY_ROUTES = [
  '/products',
  '/solutions',
  '/services',
  '/team',
  '/about',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isRestricted = INTERNAL_ONLY_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + '/')
  );

  if (!isRestricted) return NextResponse.next();

  // Always allow in non-production environments (local dev, preview, staging).
  if (process.env.NODE_ENV !== 'production') return NextResponse.next();

  // Next.js sets the "RSC" header on all client-side navigations (App Router).
  const isNextNavigation = request.headers.get('RSC') === '1';

  // Also allow when navigating from the same origin (e.g. a link on another page).
  const referer = request.headers.get('referer');
  const host = request.headers.get('host');
  const isSameOrigin = !!(referer && host && referer.includes(host));

  if (isNextNavigation || isSameOrigin) {
    return NextResponse.next();
  }

  // Direct access — redirect to homepage.
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: [
    '/products',
    '/products/(.*)',
    '/solutions',
    '/solutions/(.*)',
    '/services',
    '/services/(.*)',
    '/team',
    '/team/(.*)',
    '/about',
    '/about/(.*)',
  ],
};

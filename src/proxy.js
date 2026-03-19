import { NextResponse } from 'next/server';
import { routes } from './constants';

export function proxy(request) {
  const authToken = request.cookies.get('authToken')?.value;

  // Define paths that are considered protected
  // For a basic setup, we'll imagine a few protected paths, though right now we can protect the dashboard/boards
  // Or we can say any route except auth routes are protected. Let's assume paths starting with /auth, /login, /register are public.
  // And the root "/" could be public or protected depending on app design. Let's protect everything except /login and /register for a trello-clone.

  const currentPath = request.nextUrl.pathname;
  
  // Exclude static assets, API routes, or Next.js internals
  if (
    currentPath.startsWith('/_next') ||
    currentPath.startsWith('/api') ||
    currentPath.includes('.')
  ) {
    return NextResponse.next();
  }

  const publicPaths = [routes.home , routes.auth.login , routes.auth.forgotPassword, routes.auth.register]

  const isPublicPath = publicPaths.includes(currentPath);

  if (!authToken && !isPublicPath) {
    // If user is NOT logged in and trying to access a protected route, redirect to login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (authToken && isPublicPath) {
    // If user IS logged in and trying to access login/register, redirect to dashboard (or root "/")
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Apply middleware to all routes except api, _next/static, _next/image, favicon.ico
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

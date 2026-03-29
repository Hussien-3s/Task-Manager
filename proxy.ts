import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware((auth, request) => {
  const clerkDomain = "nice-falcon-2.clerk.accounts.dev";

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://${clerkDomain} https://clerk.browser.js;
    style-src 'self' 'unsafe-inline' https://${clerkDomain};
    img-src 'self' blob: data: https://${clerkDomain} https://img.clerk.com;
    font-src 'self' data: https://${clerkDomain};
    connect-src 'self' https://${clerkDomain};
    frame-src 'self' https://${clerkDomain};
    worker-src 'self' blob:;
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();

  const response = NextResponse.next();

  response.headers.set('Content-Security-Policy', cspHeader);

  return response;
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
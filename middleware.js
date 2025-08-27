import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl.clone()
  
  // Handle www redirects
  if (url.hostname === 'www.hmi-tomrermester.dk') {
    url.hostname = 'hmi-tomrermester.dk'
    return NextResponse.redirect(url, 301)
  }
  
  // Handle .html redirects
  if (url.pathname.endsWith('.html')) {
    url.pathname = url.pathname.replace('.html', '')
    return NextResponse.redirect(url, 301)
  }
  
  // Handle trailing slashes (except for root)
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1)
    return NextResponse.redirect(url, 301)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots.txt file)
     * - sitemap.xml (sitemap file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}

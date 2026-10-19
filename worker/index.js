// Serves the built site (dist/) from Cloudflare: www → apex redirect, security headers, SPA fallback via the ASSETS binding.
const CSP = [
  "default-src 'self'",
  // Labs games are single-file HTML with inline scripts; the beacon is Cloudflare Web Analytics (cookie-free).
  "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com",
  "style-src 'self' 'unsafe-inline'", // Emotion injects styles at runtime
  "img-src 'self' data:",
  "font-src 'self' data:", // Vite inlines the smallest font subsets as data: URLs
  "connect-src 'self' https://api.emailjs.com https://cloudflareinsights.com",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname.startsWith('www.')) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.toString(), 301);
    }
    const res = await env.ASSETS.fetch(request);
    const out = new Response(res.body, res);
    out.headers.set('X-Content-Type-Options', 'nosniff');
    out.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    out.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    if ((out.headers.get('content-type') || '').includes('text/html')) {
      out.headers.set('Content-Security-Policy', CSP);
    }
    if (url.pathname.startsWith('/assets/')) {
      out.headers.set('Cache-Control', 'public, max-age=31536000, immutable'); // hashed filenames
    }
    return out;
  },
};

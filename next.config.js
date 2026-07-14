/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        process.env.NEXT_PUBLIC_APP_URL || "",
        "*.vercel.app",
      ].filter(Boolean),
    },
  },
  images: {
    remotePatterns: [],
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(self), geolocation=()",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: blob:",
            "font-src 'self'",
            "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://api.stripe.com",
            "frame-src 'self' https://js.stripe.com",
          ].join("; "),
        },
      ],
    },
    {
      // Allow eor-pearls HTML files to be embedded in same-origin iframes
      source: "/eor-pearls/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
      ],
    },
  ],
};

module.exports = nextConfig;

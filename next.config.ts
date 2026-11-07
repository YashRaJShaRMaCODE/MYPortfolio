import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    const isDev = process.env.NODE_ENV === "development";
    const isVercelPreview = process.env.VERCEL_ENV === "preview";
    const devScriptPolicy = isDev ? " 'unsafe-eval'" : "";
    const devConnectionPolicy = isDev ? " 'self' ws:" : " 'self'";
    const upgradeInsecureRequests = isDev ? "" : "; upgrade-insecure-requests";
    const previewToolbarScript = isVercelPreview ? " https://vercel.live" : "";
    const previewToolbarConnections = isVercelPreview ? " https://vercel.live wss://ws-us3.pusher.com" : "";
    const previewToolbarImages = isVercelPreview ? " https://vercel.live https://vercel.com" : "";
    const previewToolbarFrames = isVercelPreview ? " https://vercel.live" : "";
    const previewToolbarStyles = isVercelPreview ? " https://vercel.live" : "";
    const previewToolbarFonts = isVercelPreview ? " https://vercel.live https://assets.vercel.com" : "";
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: `default-src 'self'; script-src 'self' 'unsafe-inline'${devScriptPolicy}${previewToolbarScript}; style-src 'self' 'unsafe-inline'${previewToolbarStyles}; img-src 'self' data: blob:${previewToolbarImages}; font-src 'self'${previewToolbarFonts}; connect-src${devConnectionPolicy}${previewToolbarConnections}; frame-src 'self'${previewToolbarFrames}; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'${upgradeInsecureRequests}` },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), clipboard-write=(self), web-share=(self)" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          ...(isDev ? [] : [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" }]),
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    const isDev = process.env.NODE_ENV === "development";
    const devScriptPolicy = isDev ? " 'unsafe-eval'" : "";
    const devConnectionPolicy = isDev ? " 'self' ws:" : " 'self'";
    const upgradeInsecureRequests = isDev ? "" : "; upgrade-insecure-requests";
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: `default-src 'self'; script-src 'self' 'unsafe-inline'${devScriptPolicy}; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src${devConnectionPolicy}; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'${upgradeInsecureRequests}` },
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

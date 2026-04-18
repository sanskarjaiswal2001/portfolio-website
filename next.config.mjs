/**
 * ESM Next.js config equivalent of next.config.ts - keep minimal and compatible.
 * If you need TypeScript-typed config, keep the .ts for editing and compile to .mjs
 * before building, or use a commonjs/esm interoperable pattern.
 */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "date-fns",
    ],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

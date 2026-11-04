/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // Allows a minimal, self-contained production image for Coolify or any other
  // Node host; static assets are copied in the Dockerfile below.
  output: "standalone",
  experimental: {
    // react-icons ships one barrel file per family; without this every page pays for the whole set.
    optimizePackageImports: ["react-icons", "framer-motion"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "ecomstorage.blr1.digitaloceanspaces.com" },
      { protocol: "https", hostname: "ecomstorage.blr1.cdn.digitaloceanspaces.com" },
      { protocol: "https", hostname: "blr1.digitaloceanspaces.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      // Photos on the suite pages (same source as the original About and Contact heroes).
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      // Old WordPress URLs Google still holds for growcord.com (the same brand's earlier site).
      // Host canonicalisation (growcord.com → growcord.in) happens in src/proxy.js first.
      { source: "/home", destination: "/", permanent: true },
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
      { source: "/our-services", destination: "/services", permanent: true },
      { source: "/our-services/influencer-marketing", destination: "/influencer-marketing", permanent: true },
      { source: "/our-services/search-engine-optimization", destination: "/seo", permanent: true },
      { source: "/our-services/seo", destination: "/seo", permanent: true },
      { source: "/our-services/social-media-marketing", destination: "/social-media-management", permanent: true },
      { source: "/our-services/social-media-management", destination: "/social-media-management", permanent: true },
      { source: "/our-services/ppc", destination: "/ppc-ads", permanent: true },
      { source: "/our-services/website-development", destination: "/website-development", permanent: true },
      { source: "/our-services/content-marketing", destination: "/content-development", permanent: true },
      { source: "/our-services/:path*", destination: "/services", permanent: true },
      { source: "/platform", destination: "/products", permanent: true },
      { source: "/suite", destination: "/products", permanent: true },
      { source: "/plans", destination: "/pricing", permanent: true },
    ];
  },
};

export default nextConfig;

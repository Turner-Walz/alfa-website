/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  // apex → www is already handled by the Vercel domain settings.
  async redirects() {
    return [{ source: "/about", destination: "/#pilot", permanent: true }];
  },
};

module.exports = nextConfig;

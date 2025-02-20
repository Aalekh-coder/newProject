/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['bebran.com'],
        remotePatterns: [
            {
                hostname: "images.unsplash.com",
                protocol: "https"
            }
        ]
    },
    webpack: (config, { dev }) => {
        if (!dev) {
            config.devtool = false;
        }
        return config;
    }
}

export default nextConfig;
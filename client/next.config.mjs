/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

    images:{
        remotePatterns:[
          {
            protocol: 'https',
            hostname: "images.pexels.com"
          }
        ],
        domains: ['m.media-amazon.com'],
    }
      
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

    images:{
        remotePatterns:[
          {
            protocol: 'https',
            hostname: "images.pexels.com"
          },
          {
            protocol: 'https',
            hostname: "m.media-amazon.com"
          }
        ],
    }
      
};

export default nextConfig;

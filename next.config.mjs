/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables React Strict Mode for development
    async headers() {
      return [
        {
          source: '/:path*', // Apply headers to all routes
          headers: [
            {
              key: 'X-Custom-Header',
              value: 'my-custom-value', // Example of adding a custom header
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Fix www redirect (should be first)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.hmi-tomrermester.dk',
          },
        ],
        destination: 'https://hmi-tomrermester.dk/:path*',
        permanent: true,
      },
      // Fix Google sitelinks pointing to .html URLs - comprehensive list
      {
        source: '/kontakt.html',
        destination: '/kontakt',
        permanent: true,
      },
      {
        source: '/galleri.html',
        destination: '/galleri',
        permanent: true,
      },
      {
        source: '/om-os.html',
        destination: '/om-os',
        permanent: true,
      },
      {
        source: '/ydelser.html',
        destination: '/ydelser',
        permanent: true,
      },
      // Fix any other legacy .html URLs for services
      {
        source: '/ydelser/:slug.html',
        destination: '/ydelser/:slug',
        permanent: true,
      },
      // Fix specific service pages that might be indexed
      {
        source: '/kokken.html',
        destination: '/ydelser/kokken',
        permanent: true,
      },
      {
        source: '/renovering.html',
        destination: '/ydelser/renovering',
        permanent: true,
      },
      {
        source: '/carport.html',
        destination: '/ydelser/carport',
        permanent: true,
      },
      {
        source: '/gulv.html',
        destination: '/ydelser/gulv',
        permanent: true,
      },
      {
        source: '/hegn.html',
        destination: '/ydelser/hegn',
        permanent: true,
      },
      {
        source: '/terrasse.html',
        destination: '/ydelser/terrasse',
        permanent: true,
      },
      {
        source: '/gipsarbejde.html',
        destination: '/ydelser/gipsarbejde',
        permanent: true,
      },
      {
        source: '/dor-vinduer.html',
        destination: '/ydelser/dor-vinduer',
        permanent: true,
      },
      {
        source: '/andre-opgaver.html',
        destination: '/ydelser/andre-opgaver',
        permanent: true,
      },
      {
        source: '/total-renovering.html',
        destination: '/ydelser/total-renovering',
        permanent: true,
      },
      // Catch-all for any .html files
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.hmi-tomrermester.dk',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hmi-tomrermester.vercel.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hmi-tomrermester.dk',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.hmi-tomrermester.dk',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
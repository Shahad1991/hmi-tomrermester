export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Block unwanted crawlers
      {
        userAgent: ['AhrefsBot', 'MJ12bot', 'DotBot'],
        disallow: '/',
      },
    ],
    sitemap: 'https://hmi-tomrermester.dk/sitemap.xml',
    host: 'https://hmi-tomrermester.dk',
  }
}

import { MetadataRoute } from 'next'

export default function sitemapIndex(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hmi-tomrermester.dk/sitemap.xml',
      lastModified: new Date(),
    },
  ]
}

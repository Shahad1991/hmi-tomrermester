export default function sitemap() {
  const baseUrl = 'https://hmi-tomrermester.dk'
  const now = new Date().toISOString()
  
  return [
    // Hovedsider - Højeste prioritet
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95, // Vigtigste for business
    },
    {
      url: `${baseUrl}/galleri`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9, // Vigtig for konvertering
    },
    {
      url: `${baseUrl}/om-os`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Services - Optimeret for lokale søgninger
    {
      url: `${baseUrl}/ydelser/carport`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85, // Populær service
    },
    {
      url: `${baseUrl}/ydelser/terrasse`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ydelser/kokken`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ydelser/gulv`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ydelser/renovering`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ydelser/total-renovering`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85, // High-value service
    },
    {
      url: `${baseUrl}/ydelser/gipsarbejde`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/ydelser/dor-vinduer`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ydelser/hegn`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/ydelser/andre-opgaver`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}

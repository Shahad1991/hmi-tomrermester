// lib/api.js
const WORDPRESS_API_URL = 'http://localhost:8888/hmi-tomrermster-wp/wp-json/wp/v2';

// Mock data til test - fjern når WordPress API virker
const mockGalleryItems = [
  {
    id: 1,
    title: 'Køkken renovering',
    imageUrl: '/images/services/køkken.png',
    altText: 'Moderne køkken renovering',
    galleryType: [],
    content: 'Komplet køkken renovering'
  },
  {
    id: 2,
    title: 'Terrasse projekt',
    imageUrl: '/images/services/terrasse.jpg',
    altText: 'Smuk terrasse installation',
    galleryType: [],
    content: 'Ny terrasse installation'
  },
  {
    id: 3,
    title: 'Gipsarbejde',
    imageUrl: '/images/services/gipsarbejde.jpeg',
    altText: 'Professionelt gipsarbejde',
    galleryType: [],
    content: 'Kvalitets gipsarbejde'
  }
];

export async function getAllGalleryItems() {
  try {
    console.log('Attempting to fetch from:', `${WORDPRESS_API_URL}/gallery?_embed`);
    
    const res = await fetch(`${WORDPRESS_API_URL}/gallery?_embed`, {
      cache: 'no-store', // Ændret fra 'force-cache' for at teste
    });
    
    if (!res.ok) {
      console.warn(`WordPress API not available (${res.status}), using mock data`);
      return mockGalleryItems;
    }
    
    const data = await res.json();
    console.log('WordPress API response:', data);
    
    if (!data || data.length === 0) {
      console.warn('No data from WordPress API, using mock data');
      return mockGalleryItems;
    }
    
    return data.map((item) => ({
      id: item.id,
      title: item.title.rendered,
      imageUrl: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
      altText: item._embedded?.['wp:featuredmedia']?.[0]?.alt_text || item.title.rendered,
      galleryType: item.gallery_type || [],
      content: item.content?.rendered,
    }));
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    console.log('Falling back to mock data');
    return mockGalleryItems;
  }
}
// lib/api.js
const WORDPRESS_API_URL = 'https://api.hmi-tomrermester.dk/wp-json/wp/v2';

export async function getAllGalleryItems() {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/gallery?_embed`, {
      cache: 'force-cache',
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    
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
    return [];
  }
}
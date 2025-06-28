// lib/api.js
const WORDPRESS_API_URL = 'https://api.hmi-tomrermester.dk/wp-json/wp/v2';

export async function getAllGalleryItems() {
  try {
    // Fetch både items og kategorier parallelt
    const itemsRes = await fetch(`${WORDPRESS_API_URL}/gallery?_embed`);
    const categoriesRes = await fetch(`${WORDPRESS_API_URL}/gallery_category`);

    // Tjek om begge requests var succesfulde
    if (!itemsRes.ok) {
      throw new Error(`Failed to fetch gallery items: ${itemsRes.status} ${itemsRes.statusText}`);
    }

    if (!categoriesRes.ok) {
      console.warn(`Failed to fetch gallery categories: ${categoriesRes.status} ${categoriesRes.statusText}`);
      // Lad os ikke fejle helt hvis kun kategorier fejler
    }

    const items = await itemsRes.json();
    const categories = categoriesRes.ok ? await categoriesRes.json() : [];

    return items.map(item => {
      // Hent alle kategorier fra _embedded["wp:term"] eller brug tomt array hvis ikke tilgængeligt
      const allTerms = item._embedded?.['wp:term']?.flat() || [];
      const galleryCategories = allTerms.filter(term => term.taxonomy === 'gallery_category');

      // Sikre at featured media eksisterer
      const featuredMedia = item._embedded?.['wp:featuredmedia']?.[0];
      
      return {
        id: item.id,
        title: item.title?.rendered || 'Untitled',
        imageUrl: featuredMedia?.source_url || '/images/placeholder.jpg',
        altText: featuredMedia?.alt_text || item.title?.rendered || 'Gallery image',
        categories: galleryCategories.map(cat => ({
          id: cat.id,
          name: cat.name,
          slug: cat.slug
        })),
        content: item.content?.rendered || '',
        slug: item.slug,
        date: item.date,
        url: `/gallery/${item.slug}`
      };
    });
  } catch (error) {
    console.error('Error in getAllGalleryItems:', error);
    // Returner et tomt array i stedet for at kaste fejl, så UI kan håndtere det
    return [];
  }
}
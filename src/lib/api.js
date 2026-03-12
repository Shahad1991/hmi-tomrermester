// lib/api.js
const WORDPRESS_API_URL = 'https://api.hmi-tomrermester.dk/wp-json/wp/v2';

export async function getAllGalleryItems() {
  try {
    let allItems = [];
    let page = 1;
    let morePagesAvailable = true;
    const perPage = 100;

    // Fetch all categories once (if needed elsewhere)
    const categoriesRes = await fetch(`${WORDPRESS_API_URL}/gallery_category`);
    const categories = categoriesRes.ok ? await categoriesRes.json() : [];

    // Fetch all gallery items with pagination and ACF fields
    while (morePagesAvailable) {
      const itemsRes = await fetch(
        `${WORDPRESS_API_URL}/gallery?_embed&acf_format=standard&per_page=${perPage}&page=${page}`
      );
      if (!itemsRes.ok) {
        throw new Error(`Failed to fetch gallery items: ${itemsRes.status} ${itemsRes.statusText}`);
      }
      const items = await itemsRes.json();
      allItems = [...allItems, ...items];
      const totalPages = itemsRes.headers.get('X-WP-TotalPages');
      morePagesAvailable = page < totalPages;
      page++;
    }

    // Only show items where "vis_pa_galleri_side" is true (in acf or meta)
    const filteredItems = allItems.filter(item => {
      const showOnGallery = item.acf?.['vis_pa_galleri_side'] || item.meta?.['vis_pa_galleri_side'] || false;
      return showOnGallery === true || showOnGallery === '1' || showOnGallery === 1;
    });

    // Return all items (used by service pages for category filtering)
    return allItems.map(item => {
      const allTerms = item._embedded?.['wp:term']?.flat() || [];
      const galleryCategories = allTerms.filter(term => term.taxonomy === 'gallery_category');
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
        url: `/gallery/${item.slug}`,
        acf: item.acf || {},
        showOnGallery: item.acf?.['vis_pa_galleri_side'] || item.meta?.['vis_pa_galleri_side'] || false,
        description: item.acf?.kategori_beskrivelse || ''
      };
    });
  } catch (error) {
    console.error('Error in getAllGalleryItems:', error);
    return [];
  }
}

// Returns only items where "showOnGallery" is true
export async function getGalleryPageItems() {
  try {
    const allItems = await getAllGalleryItems();
    return allItems.filter(item => {
      const isVisible = item.showOnGallery === true || item.showOnGallery === '1' || item.showOnGallery === 1;
      return isVisible;
    });
  } catch (error) {
    console.error('Error fetching gallery page items:', error);
    return [];
  }
}
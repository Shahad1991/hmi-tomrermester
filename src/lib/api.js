const WORDPRESS_API_URL = 'https://api.hmi-tomrermester.dk/wp-json/wp/v2';

export async function getAllGalleryItems() {
  try {
    let allItems = [];
    let page = 1;
    let morePagesAvailable = true;
    const perPage = 100; // Max antal pr. request

    // Først hent alle kategorier én gang
    const categoriesRes = await fetch(`${WORDPRESS_API_URL}/gallery_category`);
    const categories = categoriesRes.ok ? await categoriesRes.json() : [];

    // Hent alle galleri items med paginering
    while (morePagesAvailable) {
      const itemsRes = await fetch(
        `${WORDPRESS_API_URL}/gallery?_embed&per_page=${perPage}&page=${page}`
      );

      if (!itemsRes.ok) {
        throw new Error(`Failed to fetch gallery items: ${itemsRes.status} ${itemsRes.statusText}`);
      }

      const items = await itemsRes.json();
      allItems = [...allItems, ...items];

      // Tjek om der er flere sider
      const totalPages = itemsRes.headers.get('X-WP-TotalPages');
      morePagesAvailable = page < totalPages;
      page++;
    }

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
        url: `/gallery/${item.slug}`
      };
    });
  } catch (error) {
    console.error('Error in getAllGalleryItems:', error);
    return [];
  }
}
// lib/api.js
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

    // Hent alle galleri items med paginering og ACF felter
    while (morePagesAvailable) {
      const itemsRes = await fetch(
        `${WORDPRESS_API_URL}/gallery?_embed&acf_format=standard&per_page=${perPage}&page=${page}`
      );

      if (!itemsRes.ok) {
        throw new Error(`Failed to fetch gallery items: ${itemsRes.status} ${itemsRes.statusText}`);
      }

      const items = await itemsRes.json();
      
      // Debug: Log the first item structure
      if (items.length > 0 && page === 1) {
        console.log('Raw WordPress API response structure:', {
          firstItem: items[0],
          acfData: items[0].acf,
          metaData: items[0].meta,
          allKeys: Object.keys(items[0])
        });
        
        // Also log all items to see their structure
        console.log('All items with ACF data:', items.map(item => ({
          id: item.id,
          title: item.title?.rendered,
          acf: item.acf,
          meta: item.meta,
          keys: Object.keys(item)
        })));
      }
      
      allItems = [...allItems, ...items];

      // Tjek om der er flere sider
      const totalPages = itemsRes.headers.get('X-WP-TotalPages');
      morePagesAvailable = page < totalPages;
      page++;
    }

    console.log(`Total items fetched from WordPress: ${allItems.length}`);
    const visibleItems = allItems.filter(item => item.acf?.vis_pa_galleri_side === true);

    // Filtrer items baseret på "vis på galleri page" custom field
    const filteredItems = allItems.filter(item => {
      // Tjek forskellige mulige field names
      const showOnGallery =item.acf?.['vis_pa_galleri_side'] || 
+                          item.meta?.['vis_pa_galleri_side'] ||
                           false;
                          
      
      // Debug logging for each item
      console.log(`Gallery item "${item.title?.rendered}":`, {
        acf: item.acf,
        meta: item.meta,
        showOnGallery,
        willShow: showOnGallery === true || showOnGallery === '1' || showOnGallery === 1
      });
      
      return showOnGallery === true || showOnGallery === '1' || showOnGallery === 1;
    });

    console.log(`Total gallery items: ${allItems.length}, Filtered items: ${filteredItems.length}`);
    
    // Returner alle items (bruges af service sider for kategori filtrering)
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
        url: `/gallery/${item.slug}`,        acf: item.acf || {},
        showOnGallery: 
                       item.acf?.['vis_pa_galleri_side'] ||
                       item.meta?.['vis_pa_galleri_side'] ||
                       false,
        description: item.acf?.kategori_beskrivelse || ''
      };
    });
  } catch (error) {
    console.error('Error in getAllGalleryItems:', error);
    return [];
  }
}

// Separat funktion til gallery siden - returnerer kun items hvor "vis på galleri page" er true
export async function getGalleryPageItems() {
  try {
    console.log('Fetching gallery items for gallery page using getAllGalleryItems...');
    
    // Brug den eksisterende funktionelle API
    const allItems = await getAllGalleryItems();
    
    // Filtrer kun items hvor showOnGallery er true
    const filteredItems = allItems.filter(item => {
      const isVisible = item.showOnGallery === true || item.showOnGallery === '1' || item.showOnGallery === 1;
      console.log(`Gallery page item "${item.title}": showOnGallery=${item.showOnGallery}, willShow=${isVisible}`);
      return isVisible;
    });
    
    console.log(`Gallery page: ${allItems.length} total items, ${filteredItems.length} filtered items`);
    
    return filteredItems;
    
  } catch (error) {
    console.error('Error fetching gallery page items:', error);
    return [];
  }
}
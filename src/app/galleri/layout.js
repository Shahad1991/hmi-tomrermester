import { generatePageMetadata } from '../../metadata/MetaDataCollection';

// Export metadata for the gallery page
export const metadata = generatePageMetadata('galleri');

export default function GalleryLayout({ children }) {
  return children;
}

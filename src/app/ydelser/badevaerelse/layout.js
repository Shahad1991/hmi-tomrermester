import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';

// Export metadata for the badevaerelse service page
export const metadata = generateServiceMetadata('badevaerelse');

export default function BadevaerelseLayout({ children }) {
  return children;
}
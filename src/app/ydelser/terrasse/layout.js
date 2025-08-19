import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';

// Export metadata for the terrasse service page
export const metadata = generateServiceMetadata('terrasse');

export default function TerrasseLayout({ children }) {
  return children;
}

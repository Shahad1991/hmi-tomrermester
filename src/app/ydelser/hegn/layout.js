import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';

// Export metadata for the hegn service page
export const metadata = generateServiceMetadata('hegn');

export default function HegnLayout({ children }) {
  return children;
}

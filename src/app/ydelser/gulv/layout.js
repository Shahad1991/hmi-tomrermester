import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';

// Export metadata for the gulv service page
export const metadata = generateServiceMetadata('gulv');

export default function GulvLayout({ children }) {
  return children;
}

import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';

// Export metadata for the gipsarbejde service page
export const metadata = generateServiceMetadata('gipsarbejde');

export default function GipsarbejdeLayout({ children }) {
  return children;
}

import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';

// Export metadata for the renovering service page
export const metadata = generateServiceMetadata('renovering');

export default function RenoveringLayout({ children }) {
  return children;
}

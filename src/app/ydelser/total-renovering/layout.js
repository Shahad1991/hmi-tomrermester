import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';

// Export metadata for the total-renovering service page
export const metadata = generateServiceMetadata('total-renovering');

export default function TotalRenoveringLayout({ children }) {
  return children;
}

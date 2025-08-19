import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';

// Export metadata for the carport service page
export const metadata = generateServiceMetadata('carport');

export default function CarportLayout({ children }) {
  return children;
}

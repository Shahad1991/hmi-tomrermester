import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';

// Export metadata for the andre-opgaver service page
export const metadata = generateServiceMetadata('andre-opgaver');

export default function AndreOpgaverLayout({ children }) {
  return children;
}

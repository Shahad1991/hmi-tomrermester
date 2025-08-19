import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';

// Export metadata for the kokken service page
export const metadata = generateServiceMetadata('kokken');

export default function KokkenLayout({ children }) {
  return children;
}

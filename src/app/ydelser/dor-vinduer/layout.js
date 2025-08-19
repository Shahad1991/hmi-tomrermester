import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';

// Export metadata for the dor-vinduer service page
export const metadata = generateServiceMetadata('dor-vinduer');

export default function DorVinduerLayout({ children }) {
  return children;
}

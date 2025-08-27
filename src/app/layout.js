import { Montserrat, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { jsonLdSchema } from '../metadata/MetaDataCollection';
import siteMetadata from '../metadata/MetaDataCollection';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  metadataBase: siteMetadata.metadataBase,
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: siteMetadata.authors,
  creator: siteMetadata.creator,
  publisher: siteMetadata.publisher,
  robots: siteMetadata.robots,
  category: siteMetadata.category,
  openGraph: siteMetadata.openGraph,
  twitter: siteMetadata.twitter,
  verification: siteMetadata.verification,
  other: siteMetadata.other,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${ibmPlexSerif.variable} font-sans antialiased bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
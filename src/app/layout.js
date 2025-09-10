import { Montserrat, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { jsonLdSchema, websiteSchema, navigationSchema } from '../metadata/MetaDataCollection';
import siteMetadata from '../metadata/MetaDataCollection';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import ScrollTracker from "./components/ScrollTracker";

// Google Analytics ID (erstatt med din egen)
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

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
  keywords: siteMetadata.keywords.join(', '), // Fix: Convert array to string
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
        {/* Main business schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
        {/* Website schema for search functionality */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {/* Navigation schema for sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(navigationSchema),
          }}
        />
        <link rel="canonical" href="https://hmi-tomrermester.dk" />
        
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
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
        <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
        <ScrollTracker />
        {children}
        <Footer />
      </body>
    </html>
  );
}
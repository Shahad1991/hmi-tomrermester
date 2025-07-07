import { Montserrat, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { jsonLdSchema } from '../metadata/MetaDataCollection';
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${ibmPlexSerif.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer  />
      </body>
    </html>
  );
}
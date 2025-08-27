import AboutSection from "./components/sections/AboutSection";
import ContactInfoSection from "./components/sections/ContactInfoSection";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import Reviews from "./components/sections/ReviewsSection";
import ServicesSection from "./components/sections/ServicesSection";
import siteMetadata from "../metadata/MetaDataCollection";

export const metadata = {
  metadataBase: siteMetadata.metadataBase,
  title: siteMetadata.title.default,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords.join(', '), // Fix: Convert array to string
  authors: siteMetadata.authors,
  creator: siteMetadata.creator,
  publisher: siteMetadata.publisher,
  robots: siteMetadata.robots,
  category: siteMetadata.category,
  alternates: {
    canonical: 'https://hmi-tomrermester.dk',
  },
  openGraph: {
    ...siteMetadata.openGraph,
    url: 'https://hmi-tomrermester.dk',
    images: [
      {
        url: siteMetadata.openGraph.images[0].url,
        width: siteMetadata.openGraph.images[0].width,
        height: siteMetadata.openGraph.images[0].height,
        alt: siteMetadata.openGraph.images[0].alt,
      },
    ],
  },
  twitter: {
    ...siteMetadata.twitter,
    images: [
      {
        url: siteMetadata.twitter.images[0].url,
        width: siteMetadata.twitter.images[0].width,
        height: siteMetadata.twitter.images[0].height,
        alt: siteMetadata.twitter.images[0].alt,
      },
    ],
  },
  verification: siteMetadata.verification,
  other: siteMetadata.other,
};

export default function Home() {
  return (
    <div className="pt-28">
      <HeroSection /> 
      <ServicesSection />    
      <AboutSection />
      <Reviews />
      <ContactSection />
      <ContactInfoSection />
    </div>
  );
}
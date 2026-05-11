// SEO Metadata Collection for HMI Tømrermester

const siteMetadata = {
  title: {
    template: "%s | HMI Tømrermester",
    default: "HMI Tømrermester - Professionel tømrer og byggefirma i Taastrup",
  },
  description: "HMI Tømrermester er din lokale tømrer i Taastrup og på Sjælland. Vi tilbyder alt fra carporte og terrasser til køkkenrenovering, gulvlægning og døre/vinduer. Kvalitet, service og solidt håndværk – altid til tiden.",
  metadataBase: new URL("https://hmi-tomrermester.dk"),
  keywords: [
    "tømrer Taastrup", "håndværker Taastrup", "byggefirma Taastrup", "tømrer København", "tømrer Sjælland",
    "carport byggeri Taastrup", "el-installation carport", "terrassebyggeri Taastrup", "køkkenmontering Taastrup", "gulvlægning Sjælland", "gipsarbejde København", "montering af døre og vinduer",
    "hjælp til renovering", "lav en carport", "overdækket terrasse løsning", "nyt gulv i huset", "skift af vinduer og døre", "professionel tømrer nær mig",
    "tømrerarbejde", "renovering af hus", "håndværker med garanti", "lokal tømrer med erfaring"
  ],
  authors: [{ name: "HMI Tømrermester" }],
  creator: "HMI Tømrermester",
  publisher: "HMI Tømrermester",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "HMI Tømrermester - Professionel tømrer og byggefirma",
    description: "Professionelle tømrer- og byggeløsninger i Taastrup og omegn. Carporte, terrasser, køkkener, renovering og meget mere. Kontakt os for et uforpligtende tilbud.",
    url: "https://hmi-tomrermester.dk",
    siteName: "HMI Tømrermester",
    images: [
      {
        url: "https://hmi-tomrermester.dk/images/ali-hmi/hmi-ali.png",
        width: 1200,
        height: 630,
        alt: "HMI Tømrermester - Ali og hans team af professionelle håndværkere",
      },
    ],
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HMI Tømrermester - Professionel tømrer og byggefirma",
    description: "Professionelle tømrer- og byggeløsninger i Taastrup og omegn. Carporte, terrasser, køkkener, renovering og meget mere.",
    images: [
      {
        url: "https://hmi-tomrermester.dk/images/ali-hmi/hmi-ali.png",
        width: 1200,
        height: 630,
        alt: "HMI Tømrermester - Professionelle byggeløsninger",
      },
    ],
  },
  verification: {
    google: "",
    yandex: "",
    yahoo: "",
    other: {
      me: ["mailto:ali@hmi-tomrermester.dk", "tel:+4528225060"],
    },
  },
  category: "construction",
  classification: "Business",
  other: {
    "business:contact_data:street_address": "Vibevej 7",
    "business:contact_data:locality": "Taastrup",
    "business:contact_data:postal_code": "2630",
    "business:contact_data:country_name": "Denmark",
    "business:contact_data:email": "ali@hmi-tomrermester.dk",
    "business:contact_data:phone_number": "+45 28 22 50 60",
  },
};

// Example reviews and aggregate rating for SEO rich snippets
const reviews = [
  {
    author: "Mette Jensen",
    datePublished: "2026-03-10",
    reviewBody: "Super professionelt arbejde – vi er meget tilfredse!",
    ratingValue: 5
  },
  {
    author: "Lars Hansen",
    datePublished: "2026-02-28",
    reviewBody: "Hurtig service og flot resultat. Kan varmt anbefales!",
    ratingValue: 5
  }
];
const aggregateRating = {
  ratingValue: 5,
  reviewCount: reviews.length
};

// JSON-LD Schema for structured data (SEO)
export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HMI Tømrermester",
  image: "https://hmi-tomrermester.dk/images/ali-hmi/hmi-ali.png",
  "@id": "https://hmi-tomrermester.dk",
  url: "https://hmi-tomrermester.dk",
  telephone: "+4528225060",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vibevej 7",
    addressLocality: "Taastrup",
    postalCode: "2630",
    addressCountry: "DK"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.651,
    longitude: 12.299
  },
  openingHours: [
    "Mo-Fr 07:00-16:00",
    "Sa 08:00-12:00"
  ],
  priceRange: "$$",
  areaServed: ["Taastrup", "København", "Sjælland"],
  serviceType: [
    "Tømrerarbejde", "Carport byggeri", "Terrasse anlæggelse", "Køkkenrenovering", "Gulvlægning", "Renovering", "Gipsarbejde", "Døre og vinduer", "Hegn opsætning", "Andre byggeopgaver", "Total renovering", "Akustikpaneler", "Specialiserede håndværksløsninger"
  ],
  sameAs: [
    "https://www.facebook.com/hmitomrermester",
    "https://www.instagram.com/hmitomrermester",
    "https://www.linkedin.com/company/hmi-t%C3%B8mrermester"
  ],
  potentialAction: [
    {
      "@type": "ViewAction",
      target: "https://hmi-tomrermester.dk/kontakt",
      name: "Kontakt HMI Tømrermester",
      description: "Kontakt os for tilbud på tømrerarbejde"
    },
    {
      "@type": "ViewAction",
      target: "https://hmi-tomrermester.dk/galleri",
      name: "Se vores projekter",
      description: "Galleri med færdige projekter og portefølje"
    },
    {
      "@type": "ViewAction",
      target: "https://hmi-tomrermester.dk/om-os",
      name: "Om HMI Tømrermester",
      description: "Lær mere om vores virksomhed og erfaring"
    },
    {
      "@type": "ViewAction",
      target: "https://hmi-tomrermester.dk/ydelser",
      name: "Vores ydelser",
      description: "Se alle vores tømrer- og byggetekniske ydelser"
    }
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://hmi-tomrermester.dk"
  },
  review: reviews.map(r => ({
    "@type": "Review",
    "author": r.author,
    "datePublished": r.datePublished,
    "reviewBody": r.reviewBody,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": r.ratingValue,
      "bestRating": "5"
    }
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    "ratingValue": aggregateRating.ratingValue,
    "reviewCount": aggregateRating.reviewCount
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HMI Tømrermester",
  url: "https://hmi-tomrermester.dk",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://hmi-tomrermester.dk/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const navigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: "HMI Tømrermester Navigation",
  url: "https://hmi-tomrermester.dk",
  hasPart: [
    {
      "@type": "SiteNavigationElement",
      name: "Kontakt",
      description: "Kontakt HMI Tømrermester for tilbud",
      url: "https://hmi-tomrermester.dk/kontakt"
    },
    {
      "@type": "SiteNavigationElement",
      name: "Galleri",
      description: "Se vores projekter og portefølje",
      url: "https://hmi-tomrermester.dk/galleri"
    },
    {
      "@type": "SiteNavigationElement",
      name: "Om os",
      description: "Lær mere om HMI Tømrermester",
      url: "https://hmi-tomrermester.dk/om-os"
    },
    {
      "@type": "SiteNavigationElement",
      name: "Ydelser",
      description: "Se vores tømrer og byggeydelser",
      url: "https://hmi-tomrermester.dk/ydelser"
    }
  ]
};

// Service-specific metadata templates
export const serviceMetadata = {
  carport: {
    title: "Carporte i høj kvalitet - Skræddersyede løsninger",
    description: "Få bygget en carport i høj kvalitet af HMI Tømrermester. Skræddersyede løsninger med professionel konstruktion, el-installationer og malerbehandling. Kontakt os for tilbud.",
    keywords: ["carport", "carport byggeri", "carport konstruktion", "carport Taastrup", "carport el-installation", "carport maler"],
    image: "/images/ydelser/carport.jpeg",
  },
  terrasse: {
    title: "Terrasser og udendørs træstrukturer - Professionel anlæggelse",
    description: "HMI Tømrermester anlægger smukke terrasser og udendørs træstrukturer. Fra planlægning til færdig terrasse - vi leverer kvalitet der holder i mange år.",
    keywords: ["terrasse", "terrasse anlæggelse", "træterrasse", "udendørs strukturer", "terrasse Taastrup", "terrasse byggeri"],
    image: "/images/ydelser/terrasse.jpg",
  },
  "kokken-renovering": {
    title: "Køkkenrenovering og køkkenmontering - Professionel udførelse",
    description: "Lad HMI Tømrermester tage sig af din køkkenrenovering. Fra design til montering leverer vi komplette køkkenløsninger med fokus på kvalitet og funktionalitet.",
    keywords: ["køkken", "køkkenrenovering", "køkkenmontering", "køkken installation", "køkken Taastrup", "køkken byggeri"],
    image: "/images/ydelser/køkken.png",
  },
  gulv: {
    title: "Gulvlægning og gulvrenovering - Alle typer gulve",
    description: "Professionel gulvlægning af alle typer gulve. HMI Tømrermester udfører både nylægning og renovering af gulve med fokus på holdbarhed og æstetik.",
    keywords: ["gulv", "gulvlægning", "gulvrenovering", "trægulv", "gulv installation", "gulv Taastrup"],
    image: "/images/ydelser/gulv.png",
  },
  renovering: {
    title: "Renovering og ombygning - Komplet byggerenovering",
    description: "HMI Tømrermester udfører omfattende renoveringer og ombygninger. Vi koordinerer alle håndværksfag og sikrer professionel udførelse fra start til slut.",
    keywords: ["renovering", "ombygning", "husrenovering", "total renovering", "byggeprojekt", "renovering Taastrup"],
    image: "/images/ydelser/andre-opgaver.jpg",
  },
  "total-renovering": {
    title: "Total renovering - Komplet transformation af dit hjem",
    description: "Få en komplet transformation af dit hjem med HMI Tømrermester. Vi håndterer alle aspekter af totalrenovering med koordinering af alle fagområder.",
    keywords: ["total renovering", "komplet renovering", "husrenovering", "totalrenovering", "renovering Taastrup", "byggeprojekt"],
    image: "/images/ydelser/andre-opgaver.jpg",
  },
  gipsarbejde: {
    title: "Gipsarbejde og vægge - Professionel spartling og finish",
    description: "HMI Tømrermester udfører alt gipsarbejde, spartling og væg finish. Fra opsætning af gipsvægge til spartling og klargøring til maling.",
    keywords: ["gipsarbejde", "spartling", "vægge", "gipsvægge", "væg finish", "gips Taastrup"],
    image: "/images/ydelser/gipsarbejde.jpeg",
  },
  "dor-vinduer": {
    title: "Døre og vinduer - Installation og reparation",
    description: "Professionel installation og reparation af døre og vinduer. HMI Tømrermester sikrer korrekt montering og optimal energieffektivitet.",
    keywords: ["døre", "vinduer", "dør installation", "vindue installation", "døre vinduer", "Taastrup"],
    image: "/images/ydelser/dør-vinduer.png",
  },
  hegn: {
    title: "Hegn og afskærmning - Kvalitetshegn i træ",
    description: "HMI Tømrermester opsætter kvalitetshegn i træ og andre materialer. Fra planlægning til færdig opsætning leverer vi holdbare hegnsløsninger.",
    keywords: ["hegn", "træhegn", "hegn opsætning", "afskærmning", "hegn Taastrup", "hegn installation"],
    image: "/images/ydelser/hegn.jpeg",
  },
  "andre-opgaver": {
    title: "Andre byggeopgaver - Specialiserede håndværksløsninger",
    description: "HMI Tømrermester løser alle typer byggeopgaver og specialiserede håndværksopgaver. Kontakt os for at høre hvordan vi kan hjælpe med dit projekt.",
    keywords: ["byggeopgaver", "håndværker", "specialopgaver", "byggearbejde", "tømrerarbejde", "Taastrup"],
    image: "/images/ydelser/andre-opgaver.jpg",
  },
  badevaerelse: {
    title: "Badeværelse renovering og tømrerarbejde i Taastrup - HMI Tømrermester",
    description: "Professionel renovering og tømrerarbejde til badeværelse i Taastrup og på Sjælland. Få et moderne, funktionelt og æstetisk badeværelse med HMI Tømrermester. Kontakt os for et uforpligtende tilbud på badeværelsesrenovering og specialopgaver.",
    keywords: [
      "badeværelse", "badeværelsesrenovering", "badeværelse Taastrup", "tømrer badeværelse", "renovering badeværelse", "nyt badeværelse", "badeværelse håndværker", "badeværelse Sjælland", "badeværelse modernisering", "badeværelse tilbud", "tømrer Taastrup"
    ],
    image: "/images/ydelser/badevaerelse.webp",
  },
};

// Page-specific metadata
export const pageMetadata = {
  galleri: {
    title: "Galleri – Se vores tømrerprojekter og referencer",
    description: "Bliv inspireret af vores tidligere projekter inden for carporte, terrasser, køkkener og renoveringer. Se billeder og få idéer til dit næste byggeprojekt.",
    keywords: ["galleri", "tømrer projekter", "byggeri billeder", "carport galleri", "terrasse referencer", "køkkenrenovering billeder"],
    image: "/images/backgrounds/galleri-bg.png",
  },
  kontakt: {
    title: "Kontakt din lokale tømrer i Taastrup – Få et tilbud i dag",
    description: "Kontakt HMI Tømrermester for et uforpligtende tilbud på tømrerarbejde, renovering eller specialopgaver. Vi svarer hurtigt og hjælper dig videre.",
    keywords: ["kontakt tømrer", "tilbud tømrer", "tømrer Taastrup", "byggetilbud", "kontakt byggefirma"],
    image: "/images/kontakt/kontakt-ali.jpeg",
  },
  "om-os": {
    title: "Om HMI Tømrermester – Erfaring, kvalitet og lokalt engagement",
    description: "Læs om HMI Tømrermesters historie, værdier og erfaring. Vi er din pålidelige tømrer i Taastrup og på Sjælland med fokus på kvalitet og kundetilfredshed.",
    keywords: ["om os", "tømrer erfaring", "byggefirma værdier", "tømrer Taastrup", "lokal tømrer"],
    image: "/images/om-os/om-os-ali.png",
  },
  faq: {
    title: "FAQ - Ofte stillede spørgsmål om tømrerarbejde | HMI Tømrermester",
    description: "Få svar på de mest almindelige spørgsmål om tømrerarbejde, renovering, priser og processer hos HMI Tømrermester. Kontakt os for mere information.",
    keywords: ["FAQ", "spørgsmål", "tømrer FAQ", "byggeri spørgsmål", "tømrer Taastrup", "renovering FAQ"],
    image: "/images/backgrounds/om-os-bg.jpg",
  },
  index: {
    title: "Tømrer Taastrup & Sjælland – HMI Tømrermester | Kvalitet og service",
    description: "Din lokale tømrer i Taastrup og på Sjælland. Vi tilbyder alt fra carporte, terrasser og køkkenrenovering til totalrenovering og specialopgaver. Kontakt os for et uforpligtende tilbud.",
    keywords: ["tømrer Taastrup", "tømrer Sjælland", "byggefirma Taastrup", "carport", "terrasse", "køkkenrenovering", "totalrenovering", "tømrerarbejde"],
    image: "/images/ali-hmi/hmi-ali.png",
  },
};

// Helper function to generate complete metadata for page components
export const generatePageMetadata = (pageKey) => {
  const page = pageMetadata[pageKey];
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords.join(', '),
    openGraph: {
      title: page.title,
      description: page.description,
      images: [page.image],
      type: 'website',
      locale: 'da_DK',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [page.image],
    },
  };
};

// Helper function to generate complete metadata for service pages
export const generateServiceMetadata = (serviceKey) => {
  const service = serviceMetadata[serviceKey];
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords.join(', '),
    openGraph: {
      title: service.title,
      description: service.description,
      images: [service.image],
      type: 'website',
      locale: 'da_DK',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.description,
      images: [service.image],
    },
  };
};

export default siteMetadata;
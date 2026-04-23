/**
 * SEO Utilities for Snypyr
 * Provides reusable functions for metadata, schema, and SEO optimization
 */

export const SITE_CONFIG = {
  name: "Snypyr",
  url: "https://Snypyr.com",
  description: "Snypyr is a live startup ecosystem where founders, contributors, and investors connect to build real products. Execution and collaboration define visibility, not pitch decks.",
  ogImage: "/og-image.jpg",
  twitterHandle: "@Snypyr",
  foundingYear: "2026",
  email: "[EMAIL_ADDRESS]",
  phone: "+1-contact-us", // Generic professional placeholder
  address: {
    street: "Virtual Hub",
    city: "San Francisco",
    state: "CA",
    country: "United States",
    postalCode: "94103"
  }
};

export interface PageMetadata {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}

/**
 * Generate complete page metadata
 */
export function generateMetadata(page: PageMetadata) {
  const title = page.title.includes('|') ? page.title : `${page.title} | ${SITE_CONFIG.name}`;
  const canonical = page.canonical || SITE_CONFIG.url;
  const ogImage = page.ogImage || SITE_CONFIG.ogImage;

  return {
    title,
    description: page.description,
    canonical,
    ogImage,
    keywords: page.keywords,
    robots: {
      index: !page.noindex,
      follow: !page.nofollow,
    }
  };
}

/**
 * Organization Schema for Snypyr
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    foundingDate: SITE_CONFIG.foundingYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country
    },
    sameAs: [
      "https://x.com/Snypyr",
      "https://linkedin.com/company/Snypyr",
      "https://github.com/Snypyr",
      "https://instagram.com/Snypyr"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      "telephone": SITE_CONFIG.phone,
      "contactType": "customer service",
      "email": SITE_CONFIG.email,
      "areaServed": "Worldwide",
      "availableLanguage": ["English"]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127"
    }
  };
}

/**
 * Website Schema with Search Action
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * Breadcrumb Schema Generator
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Service Schema Generator
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string;
  priceRange?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.serviceType,
    provider: {
      "@id": `${SITE_CONFIG.url}/#organization`
    },
    name: service.name,
    description: service.description,
    url: service.url,
    areaServed: service.areaServed || "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description
          }
        }
      ]
    }
  };
}

/**
 * FAQ Schema Generator
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

/**
 * Article Schema Generator
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      name: article.author
    },
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url
    }
  };
}

/**
 * Person Schema Generator
 */
export function generatePersonSchema(person: {
  name: string;
  jobTitle: string;
  image?: string;
  description?: string;
  sameAs?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    image: person.image,
    description: person.description,
    worksFor: {
      "@id": `${SITE_CONFIG.url}/#organization`
    },
    sameAs: person.sameAs || []
  };
}

/**
 * Local Business Schema
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/logo.png`,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "XX.XXXXXX",
      longitude: "-XX.XXXXXX"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      opens: "09:00",
      closes: "18:00"
    },
    priceRange: "$$$",
    areaServed: "Worldwide",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127"
    }
  };
}

/**
 * Generate JSON-LD script tag
 */
export function generateJSONLD(schema: any) {
  return {
    __html: JSON.stringify(schema)
  };
}

/**
 * Canonical URL generator
 */
export function generateCanonicalUrl(path: string) {
  const cleanPath = path.replace(/\/$/, ''); // Remove trailing slash
  return `${SITE_CONFIG.url}${cleanPath}`;
}

/**
 * OpenGraph metadata generator
 */
export function generateOpenGraphTags(metadata: PageMetadata) {
  const title = metadata.title.includes('|') ? metadata.title : `${metadata.title} | ${SITE_CONFIG.name}`;

  return {
    title,
    description: metadata.description,
    url: metadata.canonical || SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: metadata.ogImage || SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: title
      }
    ],
    locale: 'en_US',
    type: 'website'
  };
}

/**
 * Twitter Card metadata generator
 */
export function generateTwitterTags(metadata: PageMetadata) {
  const title = metadata.title.includes('|') ? metadata.title : `${metadata.title} | ${SITE_CONFIG.name}`;

  return {
    card: 'summary_large_image',
    site: SITE_CONFIG.twitterHandle,
    creator: SITE_CONFIG.twitterHandle,
    title,
    description: metadata.description,
    images: [metadata.ogImage || SITE_CONFIG.ogImage]
  };
}

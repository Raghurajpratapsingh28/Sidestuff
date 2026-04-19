import Head from 'next/head';
import { useRouter } from 'next/router';
import { generateCanonicalUrl, generateJSONLD, SITE_CONFIG, type PageMetadata } from '@/utils/seo';

interface SEOHeadProps {
  metadata: PageMetadata;
  schema?: any | any[];
}

export default function SEOHead({ metadata, schema }: SEOHeadProps) {
  const router = useRouter();
  const canonical = metadata.canonical || generateCanonicalUrl(router.asPath);
  const title = metadata.title.includes('|') ? metadata.title : `${metadata.title} | ${SITE_CONFIG.name}`;
  const ogImage = metadata.ogImage || `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`;

  // Handle multiple schemas
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={metadata.description} />
      {metadata.keywords && <meta name="keywords" content={metadata.keywords.join(', ')} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Robots */}
      <meta 
        name="robots" 
        content={`${metadata.noindex ? 'noindex' : 'index'}, ${metadata.nofollow ? 'nofollow' : 'follow'}`} 
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metadata.description} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={SITE_CONFIG.twitterHandle} />
      <meta name="twitter:site" content={SITE_CONFIG.twitterHandle} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content={SITE_CONFIG.name} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* JSON-LD Structured Data */}
      {schemas.map((schemaItem, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={generateJSONLD(schemaItem)}
        />
      ))}
    </Head>
  );
}

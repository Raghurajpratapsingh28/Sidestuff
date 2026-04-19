import { GetServerSideProps } from 'next';
import { SITE_CONFIG } from '@/utils/seo';

function generateSiteMap() {
  const baseUrl = SITE_CONFIG.url;
  
  // Define all routes with their priorities and change frequencies
  const routes = [
    { path: '', priority: '1.0', changefreq: 'weekly' }, // Homepage
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/services/web-development', priority: '0.9', changefreq: 'monthly' },
    { path: '/services/app-development', priority: '0.9', changefreq: 'monthly' },
    { path: '/services/ai-agent', priority: '0.9', changefreq: 'monthly' },
    { path: '/services/devops', priority: '0.9', changefreq: 'monthly' },
    { path: '/services/blockchain', priority: '0.9', changefreq: 'monthly' },
    { path: '/services/smart-contracts', priority: '0.9', changefreq: 'monthly' },
    { path: '/team', priority: '0.8', changefreq: 'monthly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
    { path: '/case', priority: '0.7', changefreq: 'weekly' },
    { path: '/insights', priority: '0.7', changefreq: 'daily' },
    { path: '/culture', priority: '0.6', changefreq: 'monthly' },
    { path: '/ecosystem', priority: '0.5', changefreq: 'yearly' },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
  .map((route) => {
    return `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Generate the XML sitemap
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;

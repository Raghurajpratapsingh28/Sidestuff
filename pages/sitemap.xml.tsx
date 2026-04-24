import type { GetServerSideProps } from 'next';
import { SITE_CONFIG } from '@/utils/seo';

type ChangeFreq =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

interface SitemapRoute {
  path: string;
  priority: number;
  changefreq: ChangeFreq;
  lastmod?: string;
}

const ROUTES: SitemapRoute[] = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/waitlist', priority: 0.9, changefreq: 'weekly' },
  { path: '/careers', priority: 0.7, changefreq: 'monthly' },
];

const escapeXml = (unsafe: string): string =>
  unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case "'": return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });

const resolveBaseUrl = (hostHeader?: string, forwardedProto?: string): string => {
  const configured = SITE_CONFIG.url?.replace(/\/$/, '');
  if (process.env.NODE_ENV === 'production' && configured) return configured;
  if (!hostHeader) return configured ?? '';
  const proto = forwardedProto?.split(',')[0]?.trim() || 'https';
  return `${proto}://${hostHeader}`;
};

const buildSitemap = (baseUrl: string): string => {
  const nowIso = new Date().toISOString();
  const urls = ROUTES.map((route) => {
    const loc = escapeXml(`${baseUrl}${route.path === '/' ? '' : route.path}`);
    const lastmod = route.lastmod ?? nowIso;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
};

function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const host = req.headers.host;
  const forwardedProto = (req.headers['x-forwarded-proto'] as string | undefined) ?? undefined;
  const baseUrl = resolveBaseUrl(host, forwardedProto);
  const sitemap = buildSitemap(baseUrl);

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader(
    'Cache-Control',
    'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400'
  );
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default SiteMap;

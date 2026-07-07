import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { DEFAULT_CONFIGURATION } from '@/lib/constants';

export const GET: APIRoute = async ({ site }) => {
    const posts = (await getCollection('posts')).sort(
        (a, b) => b.data.date.getTime() - a.data.date.getTime()
    );

    const baseUrl = (site?.href || DEFAULT_CONFIGURATION.baseUrl).replace(/\/$/, '');
    const buildUrl = (path: string) => `${baseUrl}${path}`;

    const escape = (s: string) =>
        s
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');

    const items = posts
        .map((post) => {
            const url = buildUrl(`/writing/${post.id}/`);
            const title = escape(post.data.title);
            const description = escape(post.data.seo?.description ?? '');
            const pubDate = post.data.date.toUTCString();
            return `    <item>
      <title>${title}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
    </item>`;
        })
        .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(DEFAULT_CONFIGURATION.seo.title)}</title>
    <link>${baseUrl}</link>
    <description>${escape(DEFAULT_CONFIGURATION.seo.description)}</description>
    <language>en</language>
    <atom:link href="${buildUrl('/rss.xml')}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
        },
    });
};

/**
 * Shared post metadata helpers.
 * Categories are derived from slug/title because posts do not carry a
 * category field in their frontmatter (content model intentionally unchanged).
 */

export type Topic =
    | 'Engineering'
    | 'Product'
    | 'XR / 3D Web'
    | 'Music'
    | 'Travel'
    | 'Personal';

export function deriveCategory(id: string, title: string): Topic {
    const s = (id + ' ' + title).toLowerCase();
    if (/(cover|guitar|chord|music|record|munjya|ghar|hoshwalo|tum-hi-ho|pal-|aashiqui)/.test(s))
        return 'Music';
    if (/(travel|fort|tranquility|adventure|dhak|weekend|trip|trek)/.test(s)) return 'Travel';
    if (/(javascript|wordpress|astro|cloudflare|ninja|migration|deploy|frontend|backend)/.test(s))
        return 'Engineering';
    if (/(xr|webxr|three\.js|babylon|webgl|spatial|3d|vr|ar)/.test(s)) return 'XR / 3D Web';
    if (/(product|saas|marketplace|platform)/.test(s)) return 'Product';
    if (/(patriotism|india|personal|reflection|life)/.test(s)) return 'Personal';
    return 'Personal';
}

export function extractYouTubeId(rawUrl: string): string | null {
    const normalized = rawUrl.replace(/[),.;!?]+$/, '');
    try {
        const url = new URL(normalized);
        const host = url.hostname.replace(/^www\./, '');
        if (host === 'youtu.be') {
            const id = url.pathname.slice(1).split('/')[0] || null;
            return id && id.length === 11 ? id : null;
        }
        if (host === 'youtube.com' || host === 'm.youtube.com') {
            if (url.pathname === '/watch') {
                const id = url.searchParams.get('v');
                return id && id.length === 11 ? id : null;
            }
            if (url.pathname.startsWith('/shorts/')) {
                const id = url.pathname.split('/')[2] || null;
                return id && id.length === 11 ? id : null;
            }
            if (url.pathname.startsWith('/embed/')) {
                const id = url.pathname.split('/')[2] || null;
                return id && id.length === 11 ? id : null;
            }
            if (url.pathname.startsWith('/live/')) {
                const id = url.pathname.split('/')[2] || null;
                return id && id.length === 11 ? id : null;
            }
        }
    } catch {
        return null;
    }
    return null;
}

export function extractFirstYouTubeUrl(text: string): string | null {
    const match = text.match(
        /https?:\/\/(?:www\.)?(?:m\.)?(?:youtu\.be|youtube\.com)\/[^\s<)"']+/i
    );
    return match?.[0] ?? null;
}

import type { z } from 'astro/zod';
import MetaDefaultImage from '@/assets/images/meta-default.jpg';
import avatar from '@/assets/images/avatar.png';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
};

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
};

type DefaultConfigurationType = {
  baseUrl: string;
  author: AuthorInfo;
  seo: Seo;
};

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://anupj.dev',
  author: {
    avatar,
    name: 'Anup Jambhekar',
    headline: '🧙 Principal Code Wizard',
    username: 'anupjambhekar',
    location: 'Pune 🇮🇳',
    pronouns: 'He/Him',
  },
  seo: {
    title: 'Anup Jambhekar — Principal Engineer',
    description:
      'Experienced Principal Software Engineer with hands-on expertise in development using best design practices, tools, and SOLID principles',
    type: 'website',
    image: MetaDefaultImage,
    twitter: {
      creator: '@anupjambhekar',
    },
    robots: 'noindex, nofollow',
  },
};

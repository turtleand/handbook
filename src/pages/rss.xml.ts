import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

const SITE = 'https://handbook.turtleand.com';
const feedUrl = new URL('/rss.xml', SITE).href;

const pageUrl = (id: string) => {
  const path = id.replace(/\/index$/, '');
  return path === 'index' ? '/' : `${path}/`;
};

export async function GET() {
  const docs = (await getCollection('docs'))
    .filter((doc) => doc.id !== 'index')
    .sort((a, b) => a.data.title.localeCompare(b.data.title));

  return rss({
    title: 'Turtleand Handbook',
    description: 'Compressed operating principles for human-AI collaboration from Turtleand.',
    site: SITE,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
      dc: 'http://purl.org/dc/elements/1.1/',
    },
    customData: [
      '<language>en</language>',
      `<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
      `<atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />`,
    ].join(''),
    items: docs.map((doc) => ({
      title: doc.data.title,
      description: doc.data.description ?? 'A Turtleand Handbook principle.',
      link: pageUrl(doc.id),
      categories: doc.id.split('/').slice(0, -1),
      customData: '<dc:creator>Turtleand</dc:creator>',
    })),
  });
}

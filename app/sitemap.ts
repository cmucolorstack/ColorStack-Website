import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://colorstackcmu.org';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/events`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/meet-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/sponsors`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];
}

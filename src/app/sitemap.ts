import { getBlogPosts } from "@/app/blog/utils";
import { MetadataRoute } from 'next';

export const baseUrl = "https://portfolio-blog-starter.vercel.app";

// Add the required configuration for static export
export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const routes = ["", "/blog", "/gallery"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...routes, ...blogs];
}

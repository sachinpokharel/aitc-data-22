import type { BlogPost } from './types';
import { restaurantManagementPost } from './restaurant-management-software-development';

// ── REGISTRY ──────────────────────────────────────────────────────────────────
// Add new blog posts here. Each post lives in its own data file.

export const allBlogPosts: BlogPost[] = [restaurantManagementPost];

export function getBlogPost(slug: string): BlogPost | undefined {
  return allBlogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return allBlogPosts.map((post) => post.slug);
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return slugs.map((slug) => getBlogPost(slug)).filter(Boolean) as BlogPost[];
}

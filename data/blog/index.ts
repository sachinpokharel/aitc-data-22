import type { BlogPost, GenericBlogPost } from './types';
import { restaurantManagementPost } from './restaurant-management-software-development';
import { saasProductScopingPost } from './saas-product-scoping';

// ── REGISTRY ──────────────────────────────────────────────────────────────────
// Add new blog posts here. Each post lives in its own data file.

export type AnyBlogPost = BlogPost | GenericBlogPost;

export const allBlogPosts: AnyBlogPost[] = [restaurantManagementPost, saasProductScopingPost];

export function getBlogPost(slug: string): AnyBlogPost | undefined {
  return allBlogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return allBlogPosts.map((post) => post.slug);
}

export function isGenericPost(post: AnyBlogPost): post is GenericBlogPost {
  return 'kind' in post && post.kind === 'generic';
}

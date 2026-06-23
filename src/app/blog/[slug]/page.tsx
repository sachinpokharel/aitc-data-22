import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost, getAllSlugs, isGenericPost } from '@/data/blog';
import type { BlogPost } from '@/data/blog/types';
import BlogTemplate from './BlogTemplate';
import GenericBlogTemplate from './GenericBlogTemplate';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  const canonicalUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}blog/${post.slug}`;

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    authors: [{ name: post.author.name }],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      url: canonicalUrl,
      type: 'website',
      siteName: 'AITC International',
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.title,
      description: post.seo.description,
      images: [post.coverImage],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: post.title,
        description: post.seo.description,
        image: post.coverImage,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: { '@type': 'Organization', name: 'AITC International', url: 'https://aitc.ai' },
        publisher: {
          '@type': 'Organization',
          name: 'AITC International',
          url: 'https://aitc.ai',
          logo: { '@type': 'ImageObject', url: '/icons/logo.png' },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}blog/${post.slug}`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}blog/${post.slug}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {isGenericPost(post) ? (
        <GenericBlogTemplate post={post} />
      ) : (
        <BlogTemplate post={post as BlogPost} />
      )}
    </>
  );
}

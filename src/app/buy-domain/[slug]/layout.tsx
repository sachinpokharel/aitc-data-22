import type { Metadata } from 'next';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const { slug } = params;

  const descriptions = `Buy ${slug} with AITC International. We offer a wide range of domain extensions and top-level domains (TLDs) at competitive prices. Find the perfect domain name for your website today!`;

  const keywords = [slug, 'aitc', 'aitc international', 'aitc domain', 'aitc buy', 'aitc sell', 'aitc domain'];

  return {
    title: `Buy ${slug} `,
    description: descriptions,
    keywords: keywords,

    openGraph: {
      title: `Buy ${slug} `,
      description: descriptions,
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}buy-domain/${slug}`,
      images: [
        {
          url: '',
          width: 1200,
          height: 630,
          alt: `Buy ${slug} Domain from AITC International`,
        },
      ],
      siteName: 'AITC International',
    },

    twitter: {
      site: `${process.env.NEXT_PUBLIC_CLIENT_URL}buy-domain/${slug}`,
    },

    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}buy-domain/${slug}`,
    },
  };
}

export default function SingleDomainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

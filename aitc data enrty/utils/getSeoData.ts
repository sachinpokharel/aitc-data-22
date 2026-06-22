import { fetchData } from './getData';

export interface SeoDataResponse {
  id: number;
  description: string;
  title: string;
  imageUrl: string;
}

export async function generateMetadata(url: string, link?: string) {
  const metadata = await fetchData<SeoDataResponse>(url);

  const isLink = link ? `${link}` : '';

  return {
    title: metadata?.title,
    description: metadata?.description,

    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}${isLink}`,
    },
    openGraph: {
      title: metadata?.title,
      description: metadata?.description,
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}${isLink}`,
      type: 'website',
      siteName: 'AITC International',
      images: [
        {
          url: metadata?.imageUrl,
          width: 1200,
          height: 630,
          alt: metadata?.title,
        },
      ],
    },
  };
}

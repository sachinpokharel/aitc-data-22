import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leaflet',
  description: 'Leaflet',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AITC - Corporate Social Responsibility',
  description: 'AITC - Corporate Social Responsibility',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

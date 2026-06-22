import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';

import './globals.css';

import Footer, { TermsAndConditions } from '@/components/common/layout/Footer';
import Header from '@/components/common/layout/Header';
import RecaptchaWrapper from '@/components/common/layout/RecaptchaWrapper';
import ScrollToTop from '@/components/common/layout/ScrollToTop';
import TopLoader from '@/components/common/Toploader';
import ContactSection from '@/components/pages/Home/ContactSection/ContactSection';

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900'],
});
export const metadata: Metadata = {
  title: 'AITC website',
  description: 'Website of aitc international private limited',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${lato.className}  scroll-smooth antialiased`}>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        {/* <link rel='icon' href='/icon?<generated>' type='image/<generated>' sizes='<generated>' /> added
        <link rel='apple-touch-icon' href='/apple-icon?<generated>' type='image/<generated>' sizes='<generated>' /> */}
      </head>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID ?? ''} />
      <body className=''>
        <Header />
        <RecaptchaWrapper>
          <main className=''>
            <TopLoader />

            {children}
            <ScrollToTop />
            <ContactSection />
          </main>
          <div className='site-footer-wrapper flex flex-col gap-10 px-6 pb-[3.125rem] pt-20 xmd:gap-[3.125rem] xmd:px-16 xl:pt-[6.25rem] 3xl:px-[9.375rem]'>
            <Footer />
            <TermsAndConditions />
          </div>
        </RecaptchaWrapper>

        <div id='root'></div>
      </body>
      {/* </ErrorBoundaryWrapper> */}
    </html>
  );
}

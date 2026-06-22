import Image from 'next/image';
import MarqueeComponent from '@/components/pages/Home/CollaborativePartners/MarqueeComponent';

const logos = [
  { name: 'Client 1', src: '/offshore/item1.png' },
  { name: 'Client 2', src: '/offshore/item2.png' },
  { name: 'Client 3', src: '/offshore/item3.png' },
  { name: 'Client 4', src: '/offshore/item4.png' },
  { name: 'Client 5', src: '/offshore/item5.webp' },
  { name: 'Client 6', src: '/offshore/item6.webp' },
  { name: 'Client 7', src: '/offshore/item7.webp' },
  { name: 'Client 8', src: '/offshore/item8.webp' },
  { name: 'Client 9', src: '/offshore/item9.webp' },
];

export default function ClientLogos() {
  return (
    <section className='border-b border-gray-100 bg-white py-10'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <p className='text-[#3d2d72]-400 mb-8 text-center text-lg font-bold uppercase tracking-widest'>
          Trusted by 200+ Global Brands
        </p>
        <div className='scrollbar-wrapper relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased'>
          <MarqueeComponent pauseOnHover className='[--duration:30s]'>
            <ul className='flex w-max min-w-full flex-nowrap items-center justify-center gap-8 overflow-hidden py-4 lg:gap-16'>
              {logos.map((logo, i) => (
                <li key={i}>
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={100}
                    height={100}
                    className='max-h-[75px] object-contain'
                  />
                </li>
              ))}
            </ul>
          </MarqueeComponent>
        </div>
      </div>
    </section>
  );
}

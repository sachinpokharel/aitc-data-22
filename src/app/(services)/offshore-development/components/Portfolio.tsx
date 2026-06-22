'use client';

import { delays } from '@/utils/animation-config';
import { Slide } from 'react-awesome-reveal';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import { OffshoreDevelopmentCard } from '@/components/pages/Home/CreativeStove/CreativeStoveCard';

const headerData = {
  mainTitle: 'Our Portfolio',
  description:
    "Explore how we've helped businesses scale, innovate, and achieve their goals through dedicated offshore development teams.",
};

const portfolioData = [
  {
    id: '1',
    slug: 'monas-esthetics',
    title: "Mona's Esthetics",
    bgImage: '/images/mona-esthetics.jpg',
  },
  {
    id: '2',
    slug: 'nepal-biryani',
    title: 'Nepal Biryani',
    bgImage: '/images/nepal-biryani.jpg',
  },
  {
    id: '3',
    slug: 'annapurna-galleries',
    title: 'Annapurna Galleries',
    bgImage: '/images/annapurna-galaries.jpg',
  },
  {
    id: '4',
    slug: 'cafe-boh',
    title: 'Cafe Boh',
    bgImage: '/images/cafeboh.jpg',
  },
  {
    id: '5',
    slug: 'de-beautilox-salon',
    title: 'De Beautilox Salon',
    bgImage: '/images/debeautilox.jpg',
  },
  {
    id: '6',
    slug: 'eduvantage',
    title: 'Eduvantage',
    bgImage: '/images/eduvantage.jpg',
  },
  {
    id: '7',
    slug: 'eureka-traders',
    title: 'Eureka Traders',
    bgImage: '/images/eureka.jpg',
  },
  {
    id: '8',
    slug: 'german-homes',
    title: 'German Homes',
    bgImage: '/images/german-homes-hospitality.jpg',
  },
  {
    id: '9',
    slug: 'hotel-square',
    title: 'Hotel Square',
    bgImage: '/images/hotel-square.jpg',
  },
  {
    id: '10',
    slug: 'jasper-education',
    title: 'Jasper Education',
    bgImage: '/images/jesper.jpg',
  },
  {
    id: '11',
    slug: 'dfw-wet',
    title: 'DFW WET',
    bgImage: '/images/dfw.jpg',
  },
  {
    id: '12',
    slug: 'htx-smokeshop',
    title: 'HTX Smokeshop',
    bgImage: '/images/htx.jpg',
  },
];

const Portfolio = () => {
  return (
    <div className=' bg-lightShad2'>
      <CommonAnimation className='main-common-padding mx-auto flex max-w-[1500px] flex-col items-center justify-center gap-12'>
        <div className='flex flex-col items-center justify-center gap-8 text-center'>
          <CommonTitle title={headerData.mainTitle} delay={delays.medium} />
          <CommonParargraph text={headerData.description} delay={delays.long} />
        </div>
        <div className='flex flex-wrap justify-center gap-8'>
          {portfolioData.map((item) => (
            <Slide
              key={item.id}
              direction='up'
              triggerOnce
              cascade
              damping={0.2}
              fraction={0.2}
              className='flex w-full max-w-[350px]'
            >
              <div className='flex size-full'>
                <OffshoreDevelopmentCard
                  key={item.id}
                  // id={item.slug}
                  title={item.title}
                  // description={item.description}
                  image={item.bgImage}
                  // results={item.results}
                />
              </div>
            </Slide>
          ))}
        </div>
      </CommonAnimation>
    </div>
  );
};

export default Portfolio;

import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonTitle from '@/components/common/CommonTitle';

import TestimonialSwiper from './TestimonialSwiper';

export interface TestimonialData {
  id: string;
  title: string;
  items: Testimonial[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  designation: string;
  description: string;
  highlight: string;
  imageUrl: string;
}

const TestimonialSection = async ({ url }: { url: string }) => {
  const data = await fetchData<TestimonialData>(url);

  return (
    <CommonAnimation
      style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '100%' }}
      className="flex  min-h-[80dvh] flex-col items-center justify-center  gap-8 bg-lightShad2 bg-[url('/svg/testimonial-small.svg')] bg-cover bg-no-repeat  px-6 py-14 xmd:bg-[url('/svg/testimonial-medium.svg')] xl:bg-[url('/svg/testimonial.svg')]"
    >
      <div className='flex flex-col items-center justify-center gap-2'>
        <p className='rounded-lg bg-lightShade1 px-[6px] py-1 text-mainBlack'>CLIENT TESTIMONIALS</p>
        <CommonTitle title={data?.title} className='max-w-[1350px] text-center' delay={delays.medium} />
      </div>
      <TestimonialSwiper data={data?.items} />
    </CommonAnimation>
  );
};

export default TestimonialSection;

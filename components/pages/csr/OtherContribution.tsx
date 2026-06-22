/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import { CommonTitleV2 } from '@/components/common/CommonTitle';
import Pagination from '@/components/common/Pagination';

type Contribution = {
  id: string;
  title: string;
  imageUrl: string;
  contributionCategory: {
    title: string;
  };
};

const OtherContribution = ({ pagination, contributions }: { pagination: any; contributions: Contribution[] }) => {
  return (
    <section className='main-common-padding relative mx-auto flex max-w-[1600px]  flex-col gap-[40px] py-14 md:py-20 lg:gap-[52px]'>
      <div className='flex flex-col items-center justify-between gap-8 xmd:flex-row'>
        <CommonAnimation className='flex flex-col items-center justify-center gap-2 xmd:items-start  xmd:justify-start'>
          <CommonChip text='Other Contributions' />
          <CommonTitleV2
            main='Continuing'
            secondary='Our Commitment '
            third='to Serve '
            className='text-center xmd:text-start'
          />
        </CommonAnimation>

        <div className='relative h-[157px] min-w-[157px]'>
          <Image src={'/images/love-hand.png'} alt='Love Hand' fill className='object-contain' />
        </div>
      </div>

      {/* Contributions Grid */}
      <div>
        <div className='lg grid w-full grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3'>
          {contributions?.map((contribution: Contribution) => (
            <Fade key={contribution.id} direction='up' triggerOnce>
              <div className='group relative h-[459px] w-full overflow-hidden rounded-2xl  lg:h-[447px] lg:w-[423px] xl:h-[392px] xl:w-[338px] 2xl:h-[470px] 2xl:w-full'>
                {/* Image */}
                <Image
                  src={contribution.imageUrl}
                  alt={contribution.title}
                  fill
                  className='object-cover transition-transform duration-300 group-hover:scale-105'
                />

                {/* Overlay Gradient */}
                <div className='absolute inset-0 bg-[linear-gradient(to_bottom,_#00000000_60%,_#3D2D72_80%)]' />

                {/* Content */}
                <div className='absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 pt-0'>
                  <h3 className='text-lg font-bold text-white'>{contribution.title}</h3>
                  <span className='inline-block w-fit rounded-full border border-white bg-primary px-4 py-1 text-sm font-medium capitalize text-white'>
                    {contribution.contributionCategory.title}
                  </span>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {contributions.length > 6 && (
          <div className='mt-8 flex justify-center'>
            <Pagination totalPages={pagination?.total?.page || 1} pageName='corporate-social-responsibility' />
          </div>
        )}
      </div>
    </section>
  );
};

export default OtherContribution;

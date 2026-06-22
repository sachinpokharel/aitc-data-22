import Image from 'next/image';
import Link from 'next/link';
import { type RelatedServices } from '@/types/insights/insights';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';

const RelatedService = ({ related }: { related: RelatedServices }) => {
  return (
    <CommonAnimation>
      <Link
        // href={`/services/${related?.clientSlug}`}
        href={`/${related?.clientSlug}`}
        className='flex w-full flex-col gap-6'
      >
        <p className='text-2xl font-black text-mainBlack'>Related Service</p>
        <div className='flex flex-col gap-6 rounded-2xl bg-secondary p-6 text-white'>
          <Image
            src={related?.bgImage}
            alt='spotlight'
            width={700}
            height={500}
            draggable={false}
            quality={100}
            className='aspect-[16/9] max-h-[15.625rem] w-full rounded-2xl object-cover'
          />
          <div className='flex flex-row items-center gap-4 text-lg font-black'>
            <p>{related?.title}</p>
            <svg width='19' height='14' viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1.49968 7.5384C1.30077 7.5384 1.11 7.45938 0.969352 7.31873C0.828701 7.17808 0.749683 6.98731 0.749683 6.7884C0.749683 6.58949 0.828701 6.39872 0.969352 6.25807C1.11 6.11742 1.30077 6.0384 1.49968 6.0384L10.7497 6.0384L10.7497 0.788403C10.7498 0.640163 10.7939 0.495286 10.8763 0.372071C10.9587 0.248855 11.0758 0.152827 11.2128 0.0961159C11.3497 0.0394045 11.5004 0.0245532 11.6458 0.0534376C11.7912 0.082322 11.9248 0.153646 12.0297 0.258403L18.0297 6.2584C18.1701 6.39903 18.249 6.58965 18.249 6.7884C18.249 6.98715 18.1701 7.17778 18.0297 7.3184L12.0297 13.3184C11.9248 13.4232 11.7912 13.4945 11.6458 13.5234C11.5004 13.5523 11.3497 13.5374 11.2128 13.4807C11.0758 13.424 10.9587 13.328 10.8763 13.2047C10.7939 13.0815 10.7498 12.9366 10.7497 12.7884L10.7497 7.5384L1.49968 7.5384Z'
                fill='#FF7500'
              />
            </svg>
          </div>
          <CommonParargraph text={related?.description} className='text-white' />
        </div>
      </Link>
    </CommonAnimation>
  );
};

export default RelatedService;

import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import Link from 'next/link';
import { type SubService, type SubServicesListDTO } from '@/types/service';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';
import LongArrow from '@/components/common/icon/LongArrow';

const SoftwareDevelopment = async ({ url, isHeaderColor }: { url: string; isHeaderColor?: boolean }) => {
  const subServicesList = await fetchData<SubServicesListDTO>(`/services/sub-service/${url}`);
  const slug = url == 'app-development' ? 'mobile-application-development' : 'digital-marketing';
  return (
    <CommonAnimation className={cn(isHeaderColor ? 'bg-lightShad2' : 'bg-white')}>
      <div className='main-common-padding flex max-w-[1300px] flex-col items-center gap-10 xsm:gap-[3.25rem] '>
        <div className='flex flex-col items-center gap-8'>
          <CommonTitle title={subServicesList?.title} className='text-center' />
          <CommonParargraph text={subServicesList?.description} className='text-center' />
        </div>
        <div className='grid  grid-cols-1 gap-8 xmd:grid-cols-2'>
          {subServicesList?.subServices?.map((item, index) => (
            <Card
              key={item?.id}
              last={subServicesList?.subServices?.length % 2 !== 0}
              index={index}
              item={item}
              slug={slug}
              isHeaderColor={isHeaderColor}
            />
          ))}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default SoftwareDevelopment;

const Card = ({
  last,
  index,
  item,
  slug,
  isHeaderColor,
}: {
  last: boolean;
  index: number;
  item: SubService;
  slug: string;
  isHeaderColor?: boolean;
}) => {
  return (
    <CommonAnimation
      delay={(index + 1) / 4}
      className={last ? 'xmd:last:col-span-full  xmd:last:place-self-center' : ''}
    >
      <div
        className={cn(
          `card group relative z-10 flex h-[284px] w-full max-w-[476px] flex-col gap-4 overflow-hidden rounded-2xl bg-white p-6 `,
          !isHeaderColor ? 'bg-lightShad2' : 'bg-white',
          last && 'xmd:last:col-span-full  xmd:last:place-self-center'
        )}
      >
        {index % 3 == 0 && <Circle index={index} />} {index % 3 == 1 && <Square index={index} />}{' '}
        {index % 3 == 2 && <Triangle index={index} />}{' '}
        {/* {index == 3 && <Circle color='bg-card-bg-secondary' />}{' '}
      {index == 4 && (
        <Square
          color='
               bg-card-bg-primary'
        />
      )}{' '}
      {index == 5 && <Triangle color='bg-card-bg-secondary' />}
      {index == 6 && <Circle color='bg-card-bg-primary' />} */}
        <CommonHeader title={item?.title} className='text-[22px]' />
        <CommonParargraph text={item?.description} className='z-20 text-base' />
        <Link
          // href={`/services/${slug}/${item?.slug ? item?.slug : '?form=book_a_consultation'}`}
          href={`/${slug}/${item?.slug ? item?.slug : '?form=book_a_consultation'}`}
          className='flex flex-row items-center gap-2 text-lg font-black text-primary'
        >
          {item?.slug ? `Learn more` : 'Book free consultation'}
          <span className='hover-arrow-slide'>
            <LongArrow />
          </span>
        </Link>
      </div>
    </CommonAnimation>
  );
};

const Circle = ({ index }: { index: number }) => {
  return (
    <div
      className={cn(
        'absolute bottom-[-10%] right-[-22%] -z-10 size-[178px] rounded-full  bg-[#FFC899] transition-all duration-1000 group-hover:bottom-[-30%] group-hover:right-[-1%]',
        index % 2 == 0 ? 'bg-card-bg-secondary' : 'bg-card-bg-primary'
      )}
    />
  );
};

const Square = ({ index }: { index: number }) => {
  return (
    <div
      className={cn(
        'absolute bottom-[-3%] right-[-33%] size-[167px] rotate-[35deg] rounded-[32px] bg-[#FFC899] transition-all duration-1000 group-hover:bottom-[-30%]  group-hover:right-[5%] group-hover:rotate-[10deg]',
        index % 2 == 0 ? 'bg-card-bg-secondary' : 'bg-card-bg-primary'
      )}
    />
  );
};

const Triangle = ({ index }: { index: number }) => {
  return (
    <div
      className={cn(
        'triangle absolute bottom-[8%] right-[-24%] rotate-[-48deg] transition-all duration-1000 group-hover:bottom-[-22%] group-hover:right-[-2%] group-hover:rotate-[-99deg] ',
        index % 2 == 0 ? 'bg-card-bg-secondary' : 'bg-card-bg-primary'
      )}
    />
  );
};

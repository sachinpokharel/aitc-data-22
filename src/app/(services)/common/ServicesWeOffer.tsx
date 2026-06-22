import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { type SerivceWeOfferDTO } from '@/types/service/seo/SEODTO';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const ServicesWeOffer = async ({ url, className }: { className?: string; url: string }) => {
  const data = await fetchData<SerivceWeOfferDTO>(url);

  return (
    <div className={cn(className)}>
      <div
        className={cn(`main-common-padding  flex flex-col justify-center gap-12 xl:flex-row 2xl:w-4/5 2xxl:w-[70%]`)}
      >
        <div className='flex flex-col gap-8 '>
          <CommonTitle title={data?.title} />
          <CommonParargraph text={data?.description} />
        </div>
        <div className='flex flex-col gap-8 xl:min-w-[530px]'>
          {data?.keyPoints?.map((item, index) => (
            <p
              style={{
                backgroundColor: index % 2 === 0 ? '#ff8f30' : '#4d3b8b',
              }}
              className='w-full rounded-2xl p-4 text-lg font-black leading-[150%] tracking-[0.36px] text-white'
              key={index}
            >
              {item?.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesWeOffer;

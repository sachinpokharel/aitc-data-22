import { fetchData } from '@/utils/getData';
import { type DomainHoistingDTO, type HostingPlan } from '@/types/service/domain-hoisting/domain-hoistingDTO';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

import EnterpriseSolutions from './EnterpriseSolutions';

const HoistingPlan = async () => {
  const data = await fetchData<DomainHoistingDTO>('/services/sub-service/domain-and-hosting/web-hosting');

  return (
    <CommonAnimation className='main-common-padding flex flex-col items-center gap-10 bg-lightShad2 lg:gap-[3.25rem] '>
      <div className='flex max-w-[1000px] flex-col gap-8'>
        <CommonTitle title={data?.title} className='text-center' />
        <CommonParargraph text={data?.description} className='text-center' />
      </div>
      <div className='plan-list flex w-full flex-row flex-wrap items-start justify-center gap-8  '>
        {data?.hostingPlans?.map((item) => <Plan key={item?.id} item={item} />)}
      </div>
      <EnterpriseSolutions enterprise={data?.enterpriseSolution} />
    </CommonAnimation>
  );
};

export default HoistingPlan;

const Plan = ({ item }: { item: HostingPlan }) => {
  return (
    <CommonAnimation
      delay={Number(item?.id + 1) / 3}
      className='flex min-h-[580px] w-full max-w-[500px] flex-col gap-6 rounded-2xl border-[3px] border-[#E9E9FF] bg-white p-6'
    >
      <CommonHeader title='Basic hosting plan' className='text-secondary' />
      <p className='price text-2xl font-black text-primary '>$ {item?.price} / Month </p>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2 rounded-lg bg-lightShad2 p-4'>
          <CommonHeader title='Best for' />
          <CommonParargraph text={item?.bestFor} />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2 rounded-lg bg-lightShad2 p-4'>
          <CommonHeader title='Features' />
          {item?.features?.map((feature) => <CommonParargraph text={feature} key={feature} />)}
        </div>
      </div>
      <CommonButton text='Contact us' href={'/contact-us'} />
    </CommonAnimation>
  );
};

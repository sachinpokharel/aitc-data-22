import { cn } from '@/utils/cn';
import { CustomFlip } from '@/components/common/animation/CustomFlip';

import Card from './Card';
import CardDescription from './CardDescription';

export type featureProps = {
  id: string | number;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  keyHighlight?: string;
};

const CardWrapper = ({ features }: { features: featureProps[] }) => {
  return (
    <div className='grid w-fit grid-cols-1  place-items-center items-start gap-8 xmd:grid-cols-2 xl:grid-cols-6'>
      {features?.map((feature, index) => (
        <CustomFlip
          className={cn(
            ' max-w-[360px]  xl:col-span-2',
            features?.length % 2 !== 0 && 'max-xl:last:col-span-full',
            features?.length % 3 === 1 && 'xl:last:col-span-full',
            features?.length % 3 === 2 && index + 1 === features?.length - 1 && `xl:col-start-2`,
            features?.length % 3 === 2 && `xl:last:col-span-2`
          )}
          key={feature?.id}
        >
          <div className={'group flex w-full  flex-col  items-center gap-[18px] '}>
            <div
              className={
                'flex w-full  flex-col items-center gap-[18px] rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-spacing-x-4 group-hover:border-dashed group-hover:border-primary'
              }
            >
              {feature?.image && <Card title={feature?.title} icon={feature?.image} />}
              {feature?.icon && <Card title={feature?.title} icon={feature?.icon} />}
            </div>

            <span>
              <svg width='12' height='68' viewBox='0 0 12 68' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M7 1.75391C7 1.20162 6.55228 0.753906 6 0.753906C5.44772 0.753906 5 1.20162 5 1.75391L7 1.75391ZM6 67.5274L11.7735 61.7539L6 55.9804L0.226495 61.7539L6 67.5274ZM5 6.75391C5 7.30619 5.44771 7.75391 6 7.75391C6.55228 7.75391 7 7.30619 7 6.75391L5 6.75391ZM7 16.7539C7 16.2016 6.55228 15.7539 6 15.7539C5.44771 15.7539 5 16.2016 5 16.7539L7 16.7539ZM5 26.7539C5 27.3062 5.44771 27.7539 6 27.7539C6.55228 27.7539 7 27.3062 7 26.7539L5 26.7539ZM7 36.7539C7 36.2016 6.55228 35.7539 6 35.7539C5.44771 35.7539 5 36.2016 5 36.7539L7 36.7539ZM5 46.7539C5 47.3062 5.44771 47.7539 6 47.7539C6.55228 47.7539 7 47.3062 7 46.7539L5 46.7539ZM7 56.7539C7 56.2016 6.55228 55.7539 6 55.7539C5.44771 55.7539 5 56.2016 5 56.7539L7 56.7539ZM5 1.75391L5 6.75391L7 6.75391L7 1.75391L5 1.75391ZM5 16.7539L5 26.7539L7 26.7539L7 16.7539L5 16.7539ZM5 36.7539L5 46.7539L7 46.7539L7 36.7539L5 36.7539ZM5 56.7539L5 61.7539L7 61.7539L7 56.7539L5 56.7539Z'
                  fill='#FF7500'
                />
              </svg>
            </span>
            <CardDescription description={feature?.description} keyHighlight={feature?.keyHighlight} />
          </div>
        </CustomFlip>
      ))}
    </div>
  );
};

export default CardWrapper;

import { cn } from '@/utils/cn';
import { Slide } from 'react-awesome-reveal';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonHeader } from '@/components/common/CommonTitle';

type ProcessProps = {
  id: string;
  index: number;
  title: string;
  description: string;
  image: string;
};

const ProcessTimeline = ({ data }: { data: ProcessProps[] }) => {
  const cards = [
    { number: 1, className: 'md:row-span-3' },
    { number: 2, className: 'md:row-span-3 md:col-start-2 md:row-start-3' },
    { number: 3, className: 'md:row-span-3 md:col-start-3 md:row-start-5' },
    { number: 4, className: 'md:row-span-3 md:col-start-2 md:row-start-7' },
    { number: 5, className: 'md:row-span-3 md:row-start-9 ' },
  ];

  const combinedData = data.map((item, index) => ({
    ...item,
    className: cards[index]?.className || '',
  }));

  return (
    <div className='mt-10 grid grid-cols-1 gap-x-14 max-md:gap-y-14 md:grid-cols-3 md:grid-rows-11'>
      {combinedData.map(({ id, title, description, className }, idx) => (
        <Card key={id} number={idx + 1} title={title} description={description} className={className} />
      ))}
    </div>
  );
};

const Card = ({
  className,
  number,
  title,
  description,
}: {
  className?: string;
  number: number;
  title: string;
  description: string;
}) => {
  return (
    <Slide
      direction='up'
      damping={0.5}
      duration={1500}
      triggerOnce
      className={cn('relative w-full max-w-72 xmd:max-w-[231px] ', className)}
    >
      <div>
        <div className='absolute -right-4 -top-12 -z-10'>
          <p
            style={{
              color: number % 2 !== 0 ? '#FF7500' : '#594797',
            }}
            className='text-8xl font-black'
          >
            {number}
          </p>
        </div>
        <div className='flex flex-col gap-6 rounded-2xl p-6 backdrop-blur-sm [background:rgba(237,237,255,0.60)]'>
          <CommonHeader title={title} />
          <CommonParargraph text={description} />
        </div>
      </div>
    </Slide>
  );
};

export default ProcessTimeline;

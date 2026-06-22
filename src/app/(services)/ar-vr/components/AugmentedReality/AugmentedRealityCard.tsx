import { cn } from '@/utils/cn';
import Image from 'next/image';
import TranslateXAnimation, { TranslateLeftToRightAnimation } from '@/components/common/animation/TranslateXAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';

const AugmentedRealityCard = ({
  image,
  title,
  description,
  index,
}: {
  image?: string;
  title: string;
  description: string;
  index: number;
}) => {
  const AnimationComponent = index % 2 === 0 ? TranslateLeftToRightAnimation : TranslateXAnimation;

  return (
    <AnimationComponent
      className={cn('flex items-start justify-start gap-8', index % 2 === 0 ? 'flex-row' : 'flex-row-reverse')}
      translateX={index % 2 === 0 ? '-60px' : '60px'}
      duration={0.5}
    >
      {image && (
        <div className='relative aspect-square w-[90px] shrink-0 xmd:w-[127px]'>
          <Image
            src={image}
            alt={title}
            fill
            className='rounded-2xl object-contain'
            sizes='(max-width: 768px) 100vw, 127px'
          />
        </div>
      )}

      <div className='flex w-full flex-col gap-2 sm:w-[300px]'>
        <p
          className={cn(
            'rounded bg-[#484BA0] p-1 text-lg font-black text-white',
            index % 2 === 0 ? 'text-start' : 'text-end'
          )}
        >
          {title}
        </p>
        <CommonParargraph text={description} className={cn(index % 2 === 0 ? 'text-start' : 'text-end')} />
      </div>
    </AnimationComponent>
  );
};

export default AugmentedRealityCard;

import { cn } from '@/utils/cn';
import Image from 'next/image';

const ImagesList = ({ images }: { images: { id: number; url: string }[] }) => {
  const colSpanCalc = (index: number): string => {
    switch (index) {
      case 0:
        return 'col-span-full sm:col-span-4';
      case 1:
        return 'col-span-full sm:col-span-3';
      case 2:
        return 'col-span-full xl:col-span-5';
      case 3:
        return 'col-span-full xl:col-start-3 sm:col-span-4';
      case 4:
        return 'col-span-full sm:col-span-3';
      default:
        return 'hidden';
    }
  };

  return (
    <div className='grid w-full grid-cols-1 place-items-center gap-4  sm:grid-cols-7  xl:grid-cols-12  '>
      {images?.map((item, index) => (
        <div
          key={item?.id}
          className={cn(
            '  relative h-auto w-full items-center justify-center overflow-hidden rounded-2xl sm:h-[16.8125rem] ',
            colSpanCalc(index)
          )}
        >
          <Image
            src={item?.url}
            alt={'imageslist  lfdfe'}
            width={416}
            height={357}
            draggable='false'
            sizes='(min-width: 640px) 50vw, (min-width: 1280px) 33vw, 100vw'
            className='hover-scale-animation size-full rounded-2xl  object-cover'
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesList;

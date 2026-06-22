import { Slide } from 'react-awesome-reveal';
import { type KeyPoint } from '@/types/service';
import CommonParargraph from '@/components/common/CommonParargraph';

const BenefitCard = ({ data, index }: { data: KeyPoint; index: number }) => {
  return (
    <Slide direction='right' triggerOnce cascade={true} delay={(index + 1) * 4} fraction={0.1} damping={0.2}>
      <div className='flex flex-col items-start gap-6 lg:flex-row lg:items-center'>
        <div className='rounded-lg  bg-primary p-[11px]'>
          <div className='rounded-lg bg-white p-[7.5px] text-mainBlack'>0{index + 1}</div>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-lg font-black'>{data?.keywords}</p>
          <CommonParargraph text={data?.description} className='text-white' />
        </div>
      </div>
    </Slide>
  );
};

export default BenefitCard;

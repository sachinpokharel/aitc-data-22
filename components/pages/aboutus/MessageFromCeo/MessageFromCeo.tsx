import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { type MessageFromCeoResponse } from '@/types/aboutus/banner';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonTitle from '@/components/common/CommonTitle';

import CeoMessage from './CeoMessage';

const MessageFromCeo = async () => {
  const { sectionTitle, message, messageTitle, bgImage, name } = await fetchData<MessageFromCeoResponse>(
    '/about-us/message-from-ceo-section'
  );
  return (
    <CommonAnimation
      style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '100%' }}
      className="flex min-h-[80dvh] bg-lightShad2  bg-[url('/svg/testimonial-small.svg')] bg-cover bg-no-repeat  xmd:bg-[url('/svg/testimonial-medium.svg')]  xl:bg-[url('/svg/testimonial.svg')]"
    >
      <div className='common-padding mx-auto flex max-w-[1350px] flex-col items-center justify-center gap-8  px-6 py-[3.75rem]  xmd:gap-[3.25rem] xmd:py-20  xl:py-[6.25rem] 3xl:max-w-[1500px]'>
        <div className='flex flex-col items-center gap-2'>
          <CommonChip text={sectionTitle} />
          <CommonTitle title={messageTitle} className='max-w-[1118px] text-center' delay={delays.long} />
        </div>
        <CeoMessage message={message} image={bgImage} name={name} />
      </div>
    </CommonAnimation>
  );
};

export default MessageFromCeo;

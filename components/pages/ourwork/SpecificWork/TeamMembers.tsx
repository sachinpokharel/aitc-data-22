import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { Fade } from 'react-awesome-reveal';
import { type TeamMembersDTO } from '@/types/ourwork/specificpage/TeamMemberDTO';
import CommonTitle from '@/components/common/CommonTitle';

const TeamMembers = async ({ id }: { id: string }) => {
  const data = await fetchData<TeamMembersDTO>(`/our-work/product/section/five/${id}`);
  return (
    <div className={cn(`common-padding common-section flex flex-col gap-12`, id && 'bg-white')}>
      <CommonTitle title='Team Members' />
      <div className={cn(`flex flex-wrap place-content-center items-center gap-8 xl:w-1/2`)}>
        {data?.teams?.map((item, index) => (
          <Fade key={item?.id} direction='up' delay={index * 100} triggerOnce>
            <div className='flex h-[132px] w-full flex-col items-center justify-center gap-4 rounded-2xl p-6 [background:linear-gradient(180deg,#EDEDFF_44%,#FFF_100%)] md:w-[210px] md:max-w-[210px]'>
              <p className='text-lg font-black text-mainBlack'>{String(item?.numberOfMember)?.padStart(2, '0')}</p>
              <p className='text-lg font-medium capitalize text-mainBlack'>{item?.designation}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;

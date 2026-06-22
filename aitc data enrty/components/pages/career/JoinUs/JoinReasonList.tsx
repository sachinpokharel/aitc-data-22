import { CommonAnimation } from '@/components/common/animation/CommonAnimation';

const JoinReasonList = ({ keyPoints }: { keyPoints: string[] }) => {
  return (
    <ul className='reason-list grid w-full  grid-cols-1 place-items-center gap-8 xmd:w-fit xmd:grid-cols-2 xmd:gap-10 xl:w-full '>
      {keyPoints?.map((item, index) => (
        <CommonAnimation
          delay={(index + 1) / 4}
          key={index + 1}
          className='reason-item flex w-full flex-row items-center rounded-lg  bg-lightShade1 xl:whitespace-nowrap'
        >
          <p
            className='rounded-lg bg-primary px-3 py-4'
            style={{
              boxShadow: ' 3px 0px 4px 0px rgba(255, 117, 0, 0.22)',
            }}
          >
            {' '}
            <span className='rounded bg-white px-[0.4689rem] py-[0.3125rem]'>{String(index + 1).padStart(2, '0')}</span>
          </p>

          <p className='p-4 xl:whitespace-nowrap'>{item}</p>
        </CommonAnimation>
      ))}
    </ul>
  );
};

export default JoinReasonList;

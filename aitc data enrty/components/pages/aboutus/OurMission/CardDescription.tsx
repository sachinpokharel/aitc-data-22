import CommonParargraph from '@/components/common/CommonParargraph';

const CardDescription = ({ description, keyHighlight }: { description: string; keyHighlight?: string }) => {
  return (
    <div className='card flex w-full flex-col items-center gap-4 rounded-2xl border-2 border-transparent bg-white p-2 py-4 transition-all duration-300 group-hover:border-dashed group-hover:border-primary '>
      {keyHighlight && (
        <h3 className='rounded-lg bg-secondary px-2 py-1.5 font-medium text-white'>“ {keyHighlight} ”</h3>
      )}

      <CommonParargraph text={description} className='text-center lg:text-base' />
    </div>
  );
};

export default CardDescription;

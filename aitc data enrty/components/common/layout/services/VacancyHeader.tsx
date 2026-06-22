import Link from 'next/link';

const VacancyHeader = () => {
  return (
    <div className='hidden w-full gap-1 bg-primary px-6 py-2 text-white xmd:flex  xmd:px-16 xl:px-[6.25rem] 3xl:px-[9.375rem]'>
      <p>
        We are actively hiring for different positions please visit our career page to{' '}
        <Link href='/career' className='underline'>
          join us
        </Link>
      </p>
    </div>
  );
};

export default VacancyHeader;

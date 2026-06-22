import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import Link from 'next/link';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonTitle from '@/components/common/CommonTitle';
import LongArrow from '@/components/common/icon/LongArrow';

type SimilarVacanciesProps = {
  id: number;
  jobTitle: string;
  slug: string;
  location: string;
  positionLevel: string;
};

const SimilarVacancies = async ({ slug }: { slug: string }) => {
  const data = await fetchData<SimilarVacanciesProps[]>(`/career/similar-vacancies/${slug}`);

  return (
    <>
      {data?.length === 0 ? null : (
        <CommonAnimation className='group flex flex-col items-center justify-center gap-6 px-6 py-[60px] lg:gap-12 lg:p-24'>
          <CommonTitle title='Explore Similar Vacancies' delay={delays.medium} className='text-center' />
          <div className='flex w-full flex-wrap justify-center gap-8 xl:max-w-[60%]'>
            {data?.map((item) => (
              <Link
                href={`/career/${item?.slug}`}
                key={item?.id}
                className='flex min-w-[300px] flex-col gap-4 rounded-lg bg-lightShad2 p-4 max-sm:w-full'
              >
                <div className='flex flex-row items-center justify-between'>
                  <p className='text-lg font-black capitalize text-mainBlack'>
                    {item?.positionLevel} {item?.jobTitle}
                  </p>
                  <span className='hover-arrow-slide'>
                    <LongArrow />
                  </span>
                </div>
                <p className='capitalize text-mainBlack'>{item?.location}</p>
              </Link>
            ))}
          </div>
        </CommonAnimation>
      )}
    </>
  );
};

export default SimilarVacancies;

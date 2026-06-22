import { fetchData } from '@/utils/getData';
import { type ServicesListdto } from '@/types/Home/servicesList';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';

import HeadingSection, { MediumScreenHeadingSection } from './HeadingSection';
import ServicesList from './ServicesList';

const Services = async () => {
  const data = await fetchData<ServicesListdto>('/services/sub-service');

  const gameDevelopmentService = {
    title: 'Game Development',
    description:
      'Turn your vision into a custom game with smooth performance, captivating graphics, and gameplay that grows your audience and brand impact.',
    slug: 'game-development',
    clientSlug: 'contact-us?form=book_a_consultation',
    image: '/deletable/game.svg',
    subServices: [],
  };

  const services = data?.services ? [...data.services] : [];
  services.push(gameDevelopmentService);

  return (
    <CommonAnimation
      className='0  flex flex-col items-center justify-center gap-10 px-6 py-[3.75rem] xmd:gap-[3.25rem]
    xmd:px-16 xmd:py-[6.25rem] lg:gap-[6.25rem] lg:px-[6.25rem] xl:px-[12.125rem] 2xl:flex-row 2xl:items-start 2xl:px-[6.25rem] 3xl:px-[9.375rem] '
    >
      <HeadingSection title={data?.title} imageurl={data?.imageUrl} />
      <MediumScreenHeadingSection title={data?.title} imageurl={data?.imageUrl} />
      <ServicesList services={services} />
    </CommonAnimation>
  );
};

export default Services;

import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { type Service, type ServicesListdto } from '@/types/Home/servicesList';
import { type ServiceHeader } from '@/types/service';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import ServiceCard from './ServiceCard';

interface ServiceListProps {
  showGameDevelopmentCard?: boolean;
}

const ServiceList = async ({ showGameDevelopmentCard = true }: ServiceListProps) => {
  const header = await fetchData<ServiceHeader>('/services/our-service');
  const data = await fetchData<ServicesListdto>('/services/sub-service');

  const gameDevelopmentService: Service = {
    title: 'Game Development',
    description:
      'Turn your vision into a custom game with smooth performance, captivating graphics, and gameplay that grows your audience and brand impact.',
    slug: 'game-development',
    clientSlug: 'contact-us?form=book_a_consultation',
    image: '/deletable/game.svg',
    subServices: [],
  };

  const services = data?.services ? [...data.services] : [];
  if (showGameDevelopmentCard) {
    services.push(gameDevelopmentService);
  }

  return (
    <CommonAnimation className='common-padding common-section max-w-[1550px]'>
      <div className='flex flex-col items-center gap-8'>
        <div className='flex flex-col items-center gap-2 '>
          <CommonChip text={header?.sectionTitle} />
          <CommonTitle title={header?.mainTitle} className='text-center' delay={delays.medium} />
        </div>
        <CommonParargraph text={header?.description} className='max-w-[800px] text-center' delay={delays.long} />
      </div>
      <div className='grid grid-cols-1 gap-8 xmd:grid-cols-2 xl:grid-cols-3 '>
        {services.map((item, index) => (
          <ServiceCard key={item?.slug} item={item} index={index} />
        ))}
      </div>
    </CommonAnimation>
  );
};

export default ServiceList;

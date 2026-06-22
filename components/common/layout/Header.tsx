import { fetchData } from '@/utils/getData';
import { type OurVacancySection } from '@/components/pages/career/JobOpenings/JobOpenings';

import InfoHeader from './InfoHeader';
import MainHeader from './MainHeader';
import VacancyHeader from './services/VacancyHeader';
import StickyHeader from './StickyHeader';

export interface ServiceCategory {
  id: string;
  category: string;
  services: ServiceList[];
}

export interface ServiceList {
  serviceId: string;
  title: string;
  keyword: string[];
  bgImage: string;
  slug: string;
  clientSlug: string;
}

const Header = async () => {
  const vacancySection = await fetchData<OurVacancySection>('/career/our-vacancy-section');
  const vacancies = vacancySection?.vacancies ?? [];
  const data = await fetchData<ServiceCategory[]>('/services/list-of-service/by-category');

  return (
    <StickyHeader>
      <div className='w-full transition-all duration-300 ease-in-out'>
        {vacancies?.length >= 1 && <VacancyHeader />}
        <InfoHeader />
        <MainHeader data={data} showHiring={vacancies?.length >= 1} />
      </div>
    </StickyHeader>
  );
};

export default Header;

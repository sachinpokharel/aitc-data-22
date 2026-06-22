import ServiceCommonBanner from '@/src/app/(services)/common/ServiceCommonBanner';
import { fetchData } from '@/utils/getData';
import { type BuyDomainHero } from '@/types/buydomain';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import BannerWrapper from '@/components/common/CommonBanner/BannerWrapper';

const BuyHero = async () => {
  const buyDomainHeroData = await fetchData<BuyDomainHero>('/buy-domain/hero-section');

  return (
    <CommonAnimation>
      <BannerWrapper image={buyDomainHeroData?.bgImage}>
        <ServiceCommonBanner
          chip='Domains for Sale'
          title={buyDomainHeroData?.title}
          primarybuttonLink='?scroll=search-domains'
          primarybuttonText='Search Domains'
          description={buyDomainHeroData?.description}
        />
      </BannerWrapper>
    </CommonAnimation>
  );
};

export default BuyHero;

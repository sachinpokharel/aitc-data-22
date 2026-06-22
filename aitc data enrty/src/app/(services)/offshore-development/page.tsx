import Partners from '@/src/app/(services)/offshore-development/components/Partners';

import DeliveryModels from './components/DeliveryModels';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Security from './components/Security';
import Services from './components/Services';
import Team from './components/Team';
import Technologies from './components/Technologies';
import WhyChoose from './components/WhyChoose';

const Page = () => {
  return (
    <div className='offshore-development'>
      <Hero />
      <Partners />
      <WhyChoose />
      <Services />
      <DeliveryModels />
      <Process />
      <Portfolio />
      <Team />
      <Technologies />
      <Security />
      <Pricing />
      <FinalCTA />
      <FAQ />
    </div>
  );
};

export default Page;

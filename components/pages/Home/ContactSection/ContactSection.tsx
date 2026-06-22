import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';

import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';

const ContactSection = () => {
  return (
    <div className='contact-section main-common-padding flex flex-col items-center justify-center gap-10 bg-lightShad2  xl:gap-[3.25rem]'>
      <ErrorBoundaryWrapper>
        <ContactMap />
      </ErrorBoundaryWrapper>
      <ContactInfo />
    </div>
  );
};

export default ContactSection;

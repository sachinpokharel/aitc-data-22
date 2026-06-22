import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

interface DomainValueCard {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const DomainGridInfo = async () => {
  const domainBenefitsTitle = await fetchData<{ title: string }>('/buy-domain/benefit/hero-section');

  const domainBenefitsCardData = await fetchData<DomainValueCard[]>('/buy-domain/benefit/values');

  return (
    <CommonAnimation className='domain-grid-info-container bg-lightShad2'>
      <div className='domain-content main-common-padding flex max-w-[1500px] flex-col items-center gap-10 xsm:gap-[3.25rem]'>
        <CommonTitle title={domainBenefitsTitle.title} className='text-center' delay={delays.medium} />
        <div className='grid grid-cols-1 items-center justify-center gap-8 xmd:grid-cols-2 xl:grid-cols-3'>
          {domainBenefitsCardData?.map((item, index) => <Card key={item.id} {...item} index={index} />)}
        </div>
      </div>
    </CommonAnimation>
  );
};

const Card = ({ name, description, imageUrl, index }: DomainValueCard & { index: number }) => {
  return (
    <CommonAnimation
      delay={(index + 1) / 8}
      className='domain-card card group relative z-10 flex h-fit max-w-[363px] flex-col gap-4 overflow-hidden rounded-2xl bg-white p-6 xmd:min-h-[308px]'
    >
      <div
        className='relative size-12
     '
      >
        <Image src={imageUrl} alt={name} fill className=' object-contain' />
      </div>
      <CommonHeader title={name} />
      <CommonParargraph text={description} className='text-sm xmd:text-base' />
    </CommonAnimation>
  );
};

export default DomainGridInfo;

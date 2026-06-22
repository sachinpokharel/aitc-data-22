import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { Zoom } from 'react-awesome-reveal';
import { type KeyFeatures } from '@/types/ourwork/specificpage/keyFeaturesDTO';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

/**
 * Component that renders a section for describing the features of a project.
 *
 * Reflects Ludo game modes in figma design
 *
 * @returns A JSX element representing the Features section of a project detail page.
 */
const Features = async ({ id }: { id: string }) => {
  const data = await fetchData<KeyFeatures>(`/our-work/product/section/three/${id}`);
  return (
    <div className={cn(`common-padding common-section flex flex-col gap-12 bg-lightShad2 `)}>
      <CommonTitle title={data?.title} />
      <div className='flex flex-wrap place-content-center items-center gap-y-10 2xxl:w-2/3'>
        {data?.keyPoint?.map((item) => (
          <Zoom
            key={item?.id}
            direction='right'
            duration={900}
            cascade={false}
            className={`hover-scale-shadow-animation mx-auto flex min-h-[250px] w-full flex-col  gap-6 rounded-lg bg-white p-6 max-2xl:min-h-[270px] xmd:w-[370px] lg:w-[430px] xl:w-[48%]`}
          >
            <div>
              <CommonHeader title={item?.title} />
              <CommonParargraph text={item?.description} />
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Features;

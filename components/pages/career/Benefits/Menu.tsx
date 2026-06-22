'use client';

import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

import { type Benefit, type SubBenefit } from './Benefits';
import MenuDetails from './MenuDetails';

const Menu = ({ benefits }: { benefits: Benefit[] }) => {
  const [selectedMenu, setSelectedMenu] = useState<number>(benefits[0]?.id);

  const menuContainerRef = useRef<HTMLDivElement>(null);

  const selectedMenuDetails = () => {
    const data = benefits?.filter((menu) => menu?.id === selectedMenu)?.map((data) => data?.subBenefits);

    if (data) {
      return data[0];
    }
  };

  const scrollToNextTab = (currentIndex: number) => {
    if (!menuContainerRef.current) return;

    const container = menuContainerRef.current;
    const buttons = container.getElementsByTagName('button');

    if (currentIndex + 1 < buttons.length) {
      const currentButton = buttons[currentIndex];

      const scrollPosition = currentButton.offsetLeft - 16;

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='flex w-full  flex-col gap-12 max-xmd:gap-2 xl:flex-row'>
      <div
        ref={menuContainerRef}
        className=' flex h-fit w-full  flex-row
     gap-6 overflow-x-auto pb-4 xl:w-fit xl:flex-col xl:overflow-x-visible xl:pb-0'
      >
        {benefits?.map((menu, index) => (
          <motion.button
            key={menu?.id}
            onClick={() => {
              setSelectedMenu(menu?.id);
              selectedMenuDetails();
              scrollToNextTab(index);
            }}
            className={cn(
              'relative cursor-pointer whitespace-nowrap rounded-lg bg-white px-4 py-3.5 text-mainBlack  xl:text-start'
            )}
          >
            {selectedMenu === menu?.id && (
              <motion.p
                layoutId='clickedBackground'
                style={{
                  color: 'white',
                }}
                transition={{ type: 'spring', duration: 0.5 }}
                className='absolute inset-0 z-10 flex size-full items-center justify-center rounded-lg bg-primary px-4 py-3.5 text-start  text-white xl:justify-start  '
              >
                <span> {menu?.name}</span>
              </motion.p>
            )}
            <span className=' whitespace-nowrap text-start text-mainBlack'>{menu?.name}</span>
          </motion.button>
        ))}
      </div>

      <MenuDetails data={selectedMenuDetails() as SubBenefit[]} />
    </div>
  );
};

export default Menu;

'use client';

import { cn } from '@/utils/cn';
import { AnimatePresence, motion, MotionConfig, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { type Stack, type StackItem } from '@/types/aboutus/techsuite';

const Menu = ({ menu }: { menu: Stack[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  const [selctedMenu, setSelctedMenu] = useState<number | null>(menu[0]?.id);
  const [selectedStack, setSelectedStack] = useState<StackItem[]>(menu[0]?.stackItems);

  const selectedMenu = (id: number) => {
    const data = menu?.filter((menu) => menu?.id === id)?.map((data) => data?.stackItems);

    if (data) {
      setSelectedStack(data[0]);
    }

    setSelctedMenu(id);
  };

  return (
    <div ref={ref} className='technologies-wrapper flex w-full flex-col overflow-hidden rounded-2xl xmd:flex-row'>
      {/* Menu */}
      <div className='border-1 w-full overflow-x-auto border-[#DFDFDF] bg-white  py-4 pl-6 [-ms-overflow-style:none] [scrollbar-width:none] xmd:w-fit xmd:flex-col [&::-webkit-scrollbar]:hidden'>
        <div className='flex w-full flex-row gap-2 xmd:flex-col'>
          {menu?.map((menu) => (
            <motion.button
              key={menu?.id}
              onClick={() => selectedMenu(menu?.id)}
              className={cn(
                'relative w-full whitespace-nowrap px-4 py-2.5 text-start text-lg capitalize text-mainBlack ',
                (selctedMenu ?? 1) === menu?.id
                  ? 'font-black transition duration-300 ease-in-out'
                  : 'font-normal transition duration-300 ease-in-out'
              )}
            >
              {menu?.name}
              {(selctedMenu ?? 1) === menu?.id && (
                <motion.span
                  layoutId='underline'
                  transition={{ type: 'spring', duration: 0.5 }}
                  className='absolute inset-0 h-full border-b border-primary xmd:border-b-0  xmd:border-r-2'
                ></motion.span>
              )}
            </motion.button>
          ))}
        </div>
      </div>
      {/*menu Stack */}
      <div className='relative grid  flex-1 grid-cols-4 content-center justify-items-center gap-12 bg-[url("/images/bg.png")] bg-cover bg-center bg-no-repeat p-6 xmd:p-8'>
        <AnimatePresence>
          <MotionConfig transition={{ duration: 0.2 }}>
            {selectedStack?.map((item) => (
              <motion.div key={item?.id}>
                <AnimatePresence>
                  <motion.button
                    initial={
                      !isInView || selctedMenu ? { opacity: 0, x: item?.id % 3 == 0 ? -1000 : 1000, y: 1000 } : {}
                    }
                    animate={isInView || selctedMenu ? { opacity: 1, x: 0, y: 0 } : {}}
                    className={cn('relative size-9')}
                    key={selctedMenu}
                    transition={{
                      type: 'spring',
                      damping: 10,
                      stiffness: 20,
                      mass: 1.73,
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.4, delay: 0.2 },
                      x: item?.id % 3 == 0 ? -1000 : 1000,
                      y: 1000,
                    }}
                  >
                    <Image
                      src={item?.icon}
                      alt={item?.id.toString()}
                      fill
                      className='rounded-lg transition-all duration-300 ease-in-out hover:scale-125'
                      sizes='10vw'
                    />
                  </motion.button>
                </AnimatePresence>
              </motion.div>
            ))}
          </MotionConfig>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Menu;

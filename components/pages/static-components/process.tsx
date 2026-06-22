'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';

export interface WorkingProcessStep {
  label: string;
  shortLabel: string;
  desc: string;
  desc2?: string;
  icon: ReactNode;
}

interface WorkingProcessProps {
  heading?: string;
  steps: WorkingProcessStep[];
  image: string;
  bgColor?: string;
}

export default function WorkingProcess({
  heading = 'Our Working Process',
  steps,
  image,
  bgColor = '#3d2d72',
}: WorkingProcessProps) {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section id='process' className='py-14 sm:py-20' style={{ backgroundColor: bgColor }}>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <h2 className='mb-10 text-center text-3xl font-extrabold text-white sm:mb-14 sm:text-4xl'>{heading}</h2>

        <div className='mb-2 flex flex-wrap justify-center gap-2 sm:gap-3'>
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                active === i ? 'bg-white shadow-lg' : 'border border-white/20 bg-white/10 text-white hover:bg-white/20'
              }`}
              style={active === i ? { color: bgColor } : undefined}
            >
              <span className={active === i ? 'text-[#ff7500]' : 'text-white/70'}>{s.icon}</span>
              <span className='hidden sm:inline'>{s.shortLabel}</span>
            </button>
          ))}
        </div>

        <div className='mb-10 border-t border-white/15' />

        <div className='grid items-center gap-8 lg:grid-cols-2 lg:gap-14'>
          <div className='relative min-h-[280px] overflow-hidden rounded-2xl border border-white/20'>
            <Image src={image} alt={step.label} fill className='size-full object-cover' />
          </div>

          <div>
            <h3 className='mb-4 text-2xl font-bold text-white'>{step.label}</h3>
            <p className='leading-relaxed text-gray-300'>{step.desc}</p>
            {step.desc2 && <p className='mt-3 text-sm leading-relaxed text-gray-400'>{step.desc2}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

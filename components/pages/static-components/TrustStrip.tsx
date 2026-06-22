import React from 'react';

/**
 * TrustStrip — Displays verified trust signals in a horizontal strip.
 * Shows items like years in business, projects delivered, team size, certifications.
 * Used on homepage hero section, conversion pages, and beside forms.
 */

interface TrustItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface TrustStripProps {
  items?: TrustItem[];
  className?: string;
  variant?: 'light' | 'dark';
}

const defaultItems: TrustItem[] = [
  { value: '10+', label: 'Years in Business' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '200+', label: 'Engineers & Designers' },
  { value: '12+', label: 'Countries Served' },
];

const TrustStrip = ({ items = defaultItems, className = '', variant = 'light' }: TrustStripProps) => {
  const bgClass = variant === 'dark' ? 'bg-secondary text-white' : 'bg-white text-mainBlack';
  const valueClass = variant === 'dark' ? 'text-primary' : 'text-secondary';
  const labelClass = variant === 'dark' ? 'text-white/70' : 'text-grey';
  const borderClass = variant === 'dark' ? 'border-white/10' : 'border-lightShade1';

  return (
    <div className={`${bgClass} rounded-2xl ${className}`}>
      <div className={`grid grid-cols-2 gap-4 p-6 md:grid-cols-4 md:gap-0 md:divide-x ${borderClass}`}>
        {items.map((item) => (
          <div key={item.label} className='flex flex-col items-center gap-1 px-4 text-center'>
            {item.icon && <span className='mb-1'>{item.icon}</span>}
            <span className={`text-2xl font-bold md:text-3xl ${valueClass}`}>{item.value}</span>
            <span className={`text-xs font-medium uppercase tracking-wider ${labelClass}`}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustStrip;

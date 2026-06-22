/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import { IoShareSocialOutline } from 'react-icons/io5';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import type { JobDescriptionProps } from '@/types/career/career';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';

import ApplyForm from './ApplyForm';

const Editor = dynamic(() => import('@/components/common/editor/Editor'), { ssr: false });

const JobDescription = ({ data }: { data: JobDescriptionProps }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  const pathname = usePathname()?.slice(1);
  const shareUrl = process.env.NEXT_PUBLIC_CLIENT_URL + pathname;

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <CommonAnimation className='flex flex-col gap-8 p-6 xl:flex-row xl:p-24'>
      <div className='flex flex-col gap-4 xl:w-3/5 2xl:w-2/3'>
        <div className='flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between'>
          <p className='text-[32px] font-black text-mainBlack'>Job Specification</p>
          <div className='relative' ref={dropdownRef}>
            <button
              onClick={handleToggleDropdown}
              className='flex flex-row items-center gap-2 rounded-lg border-2 border-primary px-4 py-3 text-mainBlack'
            >
              <IoShareSocialOutline className='text-xl' />
              <p>Share this job</p>
            </button>

            {isDropdownOpen && (
              <div className='absolute top-full z-10 mt-2 flex flex-row gap-4 rounded-lg border border-gray-300 bg-white p-4 shadow-lg'>
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
                <WhatsappShareButton url={shareUrl}>
                  <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>
                <LinkedinShareButton url={shareUrl}>
                  <LinkedinIcon size={40} round={true} />
                </LinkedinShareButton>
                <TwitterShareButton url={shareUrl}>
                  <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
              </div>
            )}
          </div>
        </div>
        {/* <div contentEditable='false' dangerouslySetInnerHTML={{ __html: 'Hello' }}></div> */}
        <Editor content={data?.specification && JSON?.parse(data?.specification)} />
      </div>
      <div className='flex h-fit flex-col items-center gap-4 rounded-lg bg-lightShad2 p-4 xl:w-2/5 2xl:w-1/3'>
        <p className='text-[32px] font-black text-mainBlack'>Apply Now</p>
        <ApplyForm vacancyId={data?.id} />
      </div>
    </CommonAnimation>
  );
};

export default JobDescription;

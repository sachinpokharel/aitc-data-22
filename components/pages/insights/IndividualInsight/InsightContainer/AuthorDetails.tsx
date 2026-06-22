'use client';

import moment from 'moment';
import { IoMdShare } from 'react-icons/io';
import { LuClock10 } from 'react-icons/lu';
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
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { type CreatedBy } from '@/types/insights/insights';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';

const AuthorDetails = ({ details, updatedAt }: { details: CreatedBy; updatedAt: string }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const shareUrl = process.env.NEXT_PUBLIC_CLIENT_URL + pathname?.slice(1);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <CommonAnimation className='flex w-full flex-col gap-6'>
      <p className='text-2xl font-black text-mainBlack'>Author Details</p>
      <div className='flex flex-col gap-6 rounded-2xl bg-lightShad2 p-6'>
        <div className='flex flex-wrap items-center gap-8 whitespace-nowrap text-lg text-primary'>
          <div className='flex flex-row items-center gap-2'>
            <Image
              src={details?.image ? details?.image : '/icons/insight_icon.png'}
              alt='author'
              width={100}
              height={100}
              className='size-6 rounded-full object-cover'
            />
            <p className='capitalize'>{details?.name}</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <LuClock10 />
            <p>{moment(updatedAt).format('DD MMM YYYY')}</p>
          </div>
          <div className='relative' ref={dropdownRef}>
            <button onClick={handleToggleDropdown} className='relative flex flex-row items-center gap-2'>
              <IoMdShare />
              <p>Share</p>
            </button>
            {isDropdownOpen && (
              <div className='absolute right-0 top-full z-10 mt-2 flex flex-col gap-4 rounded-lg border border-gray-300 bg-white p-4 shadow-lg md:right-0 md:flex-row'>
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
        <CommonParargraph text={details?.description} />
      </div>
    </CommonAnimation>
  );
};

export default AuthorDetails;

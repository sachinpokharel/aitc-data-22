import CommonButton from '@/components/common/CommonButton';

const HeadingSection = ({ title, imageurl }: { title: string; imageurl: string }) => {
  return (
    <div className='flex flex-col items-center gap-10 xmd:hidden lg:gap-[3.25rem] 2xl:flex 2xl:min-w-[404px]  2xl:items-start'>
      <h2 className='text-center text-[2rem] font-black text-mainBlack lg:text-5xl 2xl:text-start'>
        {title?.charAt(0)?.toUpperCase() + title?.slice(1)}
      </h2>
      <span className='size-4/5 lg:size-full 2xxl:size-4/5 '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width='100%'
          height='100%'
          viewBox='0 0 467 358'
          fill='none'
        >
          <path
            d='M59.7407 125.834L37.011 233.202C26.0729 284.87 65.4919 333.497 118.315 333.497H340.448C367.752 333.497 393.314 320.087 408.83 297.625L451.775 235.453C474.7 202.266 470.475 157.412 441.759 129.086L336.066 24.8331C311.954 1.04994 275.818 -5.72333 244.728 7.71268L98.4605 59.6258C73.7253 70.3153 65.3207 99.4756 59.7407 125.834Z'
            fill='#FF7500'
          />

          <path
            d='M45.8358 109.942L22.853 134.57C-14.1763 174.25 -3.8403 238.191 43.8056 264.189L196.927 347.737C218.517 359.517 244.216 361.131 267.11 352.144L287.956 343.961C331.104 327.023 352.051 278.066 334.505 235.168L301.231 153.819C290.237 126.938 266.002 107.747 237.313 103.203L119.602 84.5597C92.3224 80.239 64.6781 89.7512 45.8358 109.942Z'
            fill='#3D2D72'
          />
          <path
            d='M43.4836 133.632L21.2636 238.865C10.3563 290.521 49.7714 339.117 102.576 339.117H319.829C347.168 339.117 372.759 325.673 388.268 303.162L432.745 238.606C454.325 207.284 451.879 165.311 426.806 136.707L334.025 30.8604C310.041 3.49885 271.042 -5.07983 237.786 9.69065L91.0575 74.8607C66.6868 85.685 48.9919 107.545 43.4836 133.632Z'
            fill='url(#paint0_radial_5407_52037)'
          />
          <path
            d='M43.4836 133.632L21.2636 238.865C10.3563 290.521 49.7714 339.117 102.576 339.117H319.829C347.168 339.117 372.759 325.673 388.268 303.162L432.745 238.606C454.325 207.284 451.879 165.311 426.806 136.707L334.025 30.8604C310.041 3.49885 271.042 -5.07983 237.786 9.69065L91.0575 74.8607C66.6868 85.685 48.9919 107.545 43.4836 133.632Z'
            fill='url(#pattern0_5407_52037)'
          />
          <defs>
            <pattern id='pattern0_5407_52037' patternContentUnits='objectBoundingBox' width='1' height='1'>
              <use
                xlinkHref='#image0_5407_52037'
                transform='matrix(0.000330688 0 0 0.000420665 -0.0040044 -0.225805)'
              />
            </pattern>
            <radialGradient
              id='paint0_radial_5407_52037'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(233.426 170.824) rotate(90) scale(168.293 213.986)'
            >
              <stop stopColor='white' />
              <stop offset='0.93' stopColor='#E8E8FF' />
            </radialGradient>
            <image id='image0_5407_52037' width='3024' height='4032' xlinkHref={imageurl} />
          </defs>
        </svg>
      </span>
      <CommonButton href='/why-us' text='Explore Services' />
    </div>
  );
};

export default HeadingSection;

export const MediumScreenHeadingSection = ({ title, imageurl }: { title: string; imageurl: string }) => {
  return (
    <div className='hidden flex-row items-center gap-10 xmd:flex 2xl:hidden'>
      <div className='flex flex-col gap-[3.25rem]'>
        <h2 className=' text-start text-[2rem] font-black text-mainBlack xmd:text-[2.5rem] lg:text-5xl'>
          {title.charAt(0)?.toUpperCase() + title?.slice(1)}
        </h2>
        <CommonButton href='/why-us' className='order-2' text='Explore Services' />
      </div>
      <div className='size-full'>
        <span className='order-last lg:order-2'>
          <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 382 293' fill='none'>
            <path
              d='M48.5623 102.544L29.9298 190.664C20.9633 233.07 53.2768 272.979 96.5779 272.979H278.67C301.052 272.979 322.007 261.974 334.726 243.538L369.93 192.512C388.722 165.274 385.259 128.462 361.719 105.214L275.078 19.6503C255.312 0.130754 225.69 -5.42826 200.204 5.59906L80.3025 48.2057C60.026 56.9788 53.1364 80.9115 48.5623 102.544Z'
              fill='#FF7500'
            />
            <path
              d='M37.1637 89.5011L18.3237 109.714C-12.0308 142.28 -3.55793 194.759 35.4994 216.096L161.02 284.666C178.718 294.334 199.785 295.659 218.552 288.283L235.64 281.567C271.01 267.665 288.181 227.485 273.798 192.278L246.522 125.512C237.509 103.45 217.643 87.6997 194.125 83.9703L97.6331 68.669C75.2707 65.1229 52.6096 72.9298 37.1637 89.5011Z'
              fill='#484BA0'
            />
            <path
              d='M35.2351 108.946L17.0204 195.313C8.07922 237.709 40.3895 277.593 83.6759 277.593H261.767C284.179 277.593 305.156 266.559 317.87 248.084L354.33 195.101C372.019 169.394 370.014 134.945 349.461 111.469L273.404 24.5982C253.743 2.14179 221.774 -4.89897 194.513 7.22358L74.2334 60.7105C54.2558 69.5943 39.7505 87.5351 35.2351 108.946Z'
              fill='url(#paint0_radial_1339_38274)'
            />
            <path
              d='M35.2351 108.946L17.0204 195.313C8.07922 237.709 40.3895 277.593 83.6759 277.593H261.767C284.179 277.593 305.156 266.559 317.87 248.084L354.33 195.101C372.019 169.394 370.014 134.945 349.461 111.469L273.404 24.5982C253.743 2.14179 221.774 -4.89897 194.513 7.22358L74.2334 60.7105C54.2558 69.5943 39.7505 87.5351 35.2351 108.946Z'
              fill='url(#pattern0_1339_38274)'
            />
            <defs>
              <pattern id='pattern0_1339_38274' patternContentUnits='objectBoundingBox' width='1' height='1'>
                <use
                  xlinkHref='#image0_1339_38274'
                  transform='matrix(0.000330688 0 0 0.000420665 -0.0040044 -0.225805)'
                />
              </pattern>
              <radialGradient
                id='paint0_radial_1339_38274'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(190.939 139.47) rotate(90) scale(138.123 175.413)'
              >
                <stop stopColor='white' />
                <stop offset='0.93' stopColor='#E8E8FF' />
              </radialGradient>
              <image
                xmlns='http://www.w3.org/2000/svg'
                id='image0_1339_38274'
                width='3024'
                height='4032'
                xlinkHref={imageurl}
              />
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
};

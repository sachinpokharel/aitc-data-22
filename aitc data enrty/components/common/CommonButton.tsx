'use client';

import { cva } from 'class-variance-authority';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

import { cn } from '../../utils/cn';

const buttonStyles = cva(
  'w-fit whitespace-nowrap rounded text-lg leading-[1.6875rem] backdrop-blur-[10px] transition-all duration-300 hover:shadow-[10px_9px_14px_0px_rgba(255,117,0,0.2)]',
  {
    variants: {
      variant: {
        primary: 'bg-primary px-4 py-[0.78125rem] text-white',
        secondary: 'border-2 border-primary bg-transparent px-4 py-[0.656rem] text-darkShade1',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

interface CommonButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  text?: string;
  className?: string;
  href: string;
  children?: React.ReactNode;
  delay?: number;
}

const CommonButton = ({
  variant = 'primary',
  href,
  text = 'Contact us',
  className,
  children,
  delay,
  onClick,
  ...props
}: CommonButtonProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionProps =
    delay !== undefined
      ? {
          initial: 'initial',
          animate: isInView ? 'animate' : 'initial',
          variants: {
            initial: { opacity: 0, y: 20 },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                delay,
                duration: 0.5,
              },
            },
          },
        }
      : {};

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      const url = new URL(href, window.location.origin);
      const currentUrl = new URL(window.location.href);

      if (url.pathname === currentUrl.pathname && url.search === currentUrl.search) {
        const tab = url.searchParams.get('tab');
        if (tab) {
          e.preventDefault();
          const element = document.getElementById(tab);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    } catch {
      // Ignore URL parsing errors
    }

    onClick?.(e);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      <motion.div ref={ref} {...motionProps} className={cn(buttonStyles({ variant }), className)}>
        {children ? <span>{children}</span> : text}
      </motion.div>
    </Link>
  );
};

export default CommonButton;
// 'use client';

// import { cva } from 'class-variance-authority';
// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import Link from 'next/link';

// import { cn } from '../../utils/cn';

// const buttonStyles = cva(
//   'w-fit whitespace-nowrap rounded text-lg leading-[1.6875rem] backdrop-blur-[10px] transition-all duration-300  hover:shadow-[10px_9px_14px_0px_rgba(255,117,0,0.2)]',
//   {
//     variants: {
//       variant: {
//         primary: 'bg-primary px-4 py-[0.78125rem] text-white',
//         secondary: 'border-2 border-primary bg-transparent px-4 py-[0.656rem] text-darkShade1',
//       },
//     },
//     defaultVariants: {
//       variant: 'primary',
//     },
//   }
// );

// interface CommonButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
//   variant?: 'primary' | 'secondary';
//   text?: string;
//   className?: string;
//   href: string;
//   children?: React.ReactNode;
//   delay?: number;
// }

// const CommonButton = ({
//   variant = 'primary',
//   href,
//   text = 'Contact us',
//   className,
//   children,
//   delay,
//   onClick,
//   ...props
// }: CommonButtonProps) => {
//   const Component = delay !== undefined ? motion.div : 'div';
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     try {
//       const url = new URL(href, window.location.origin);
//       const currentUrl = new URL(window.location.href);

//       if (url.pathname === currentUrl.pathname && url.search === currentUrl.search) {
//         const tab = url.searchParams.get('tab');
//         if (tab) {
//           e.preventDefault();
//           const element = document.getElementById(tab);
//           if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//           }
//         }
//       }
//     } catch {
//       // Ignore URL parsing errors
//     }

//     onClick?.(e);
//   };

//   return (
//     <Component
//       ref={ref}
//       {...(delay !== undefined
//         ? {
//             initial: 'initial',
//             animate: isInView ? 'animate' : 'initial',
//             variants: {
//               initial: { opacity: 0, y: 20 },
//               animate: {
//                 opacity: 1,
//                 y: 0,
//                 transition: {
//                   delay,
//                   duration: 0.5,
//                 },
//               },
//             },
//           }
//         : {})}
//       className={cn(buttonStyles({ variant }), className)}
//     >
//       <Link href={href} onClick={handleClick} {...props}>
//         {children && <span>{children}</span>}
//         {text}
//       </Link>
//     </Component>
//   );
// };

// export default CommonButton;

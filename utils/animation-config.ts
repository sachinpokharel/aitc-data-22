export const delays = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  long: 0.3,
  longer: 0.4,
  extralong: 0.5,
} as const;

export const bannerDelays = {
  title: 0.8,
  description: 0.9,
  button: 1,
} as const;

export const defaultTransition = {
  duration: 0.8,
  ease: [0.33, 1, 0.68, 1],
};

export const defaultViewport = { once: true };

export const slideUpAnimation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  whileInView: {
    opacity: [0, 1],
    y: 0,
  },
  viewport: defaultViewport,

  style: {
    willChange: 'transform, opacity',
  },
};

export const isImgUrl = (url: string) => {
  return /\.(jpg|jpeg|png|webp|avif|gif)$/.test(url);
};

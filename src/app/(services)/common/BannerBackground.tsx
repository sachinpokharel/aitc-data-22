const BannerBackground = ({
  children,
  image,
  className,
}: {
  children: React.ReactNode;
  image: string;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50'
      ></div>
      <div className='relative'>{children}</div>
    </div>
  );
};

export default BannerBackground;

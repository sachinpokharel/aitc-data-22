import NextTopLoader from 'nextjs-toploader';

export default function TopLoader() {
  return (
    <>
      <NextTopLoader
        color='#3D2D72'
        initialPosition={0.08}
        zIndex={999999}
        crawlSpeed={200}
        height={2}
        crawl={true}
        showSpinner={false}
        easing='ease'
        speed={200}
        shadow='0 0 10px #2299DD,0 0 5px #2299DD'
        showForHashAnchor={true}
      />
    </>
  );
}

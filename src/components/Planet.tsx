import useWindowSize from '~/hooks/useWindowSize';
import { globalProps } from '~/models';

const Planet = ({ imgRef, imgOnLoad, imgSrc, planetSize, earthStage }: globalProps) => {
  const windowSize = useWindowSize();
  return (
    <img
      ref={imgRef}
      onLoad={imgOnLoad}
      src={imgSrc}
      alt='Planeta'
      className='absolute w-[320px] lg:w-full transition duration-1000 bottom-0'
      style={{
        left: `calc(50% - ${planetSize?.width / 2}px)`,
        bottom: windowSize?.width < 1024 ? 0 : `calc(-${planetSize?.height}px / 1.75)`,
        transform: `rotate(-${earthStage * 45}deg)`,
      }}
    />
  );
};

export default Planet;

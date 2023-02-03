import useWindowSize from '~/hooks/useWindowSize';
import { globalProps } from '~/models';

const Rocket = ({ imgRef, imgOnLoad, imgSrc, rocketSize, planetSize }: globalProps) => {
  const windowSize = useWindowSize();

  return (
    <img
      ref={imgRef}
      onLoad={imgOnLoad}
      src={imgSrc}
      alt='Foguete'
      className={`absolute transform rotate-45 ${windowSize.width < 1024 && 'hidden'}`}
      style={{
        width: `calc(${planetSize?.width}px / 16)`,
        left: `calc(50% - ${rocketSize?.width}px / 2)`,
        bottom: `calc(${planetSize?.height}px / 3.75)`,
      }}
    />
  );
};

export default Rocket;

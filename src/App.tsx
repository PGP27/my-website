import { useEffect, useRef, useState } from 'react';
import planet from './assets/planet.png';
import rocket from './assets/rocket.png';

const App = () => {
  const [planetSize, setPlanetSize] = useState<any>();
  const [rocketSize, setRocketSize] = useState<any>();

  const planetRef = useRef<any>(null);
  const rocketRef = useRef<any>(null);

  const updatePlanetSize = () =>
    setPlanetSize({
      height: planetRef.current.clientHeight,
      width: planetRef.current.clientWidth,
    });

  const updateRocketSize = () =>
    setRocketSize({
      height: rocketRef.current.clientHeight,
      width: rocketRef.current.clientWidth,
    });

  const onPlanetLoad = ({ target: img }: any) => {
    setPlanetSize({
      height: img.offsetHeight,
      width: img.offsetWidth,
    });
  };

  const onRocketLoad = ({ target: img }: any) => {
    setRocketSize({
      height: img.offsetHeight,
      width: img.offsetWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', updatePlanetSize);
    window.addEventListener('resize', updateRocketSize);
    updatePlanetSize();
    updateRocketSize();
    return () => {
      window.removeEventListener('resize', updatePlanetSize);
      window.removeEventListener('resize', updateRocketSize);
    };
  }, []);

  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <img
        ref={rocketRef}
        onLoad={onRocketLoad}
        src={rocket}
        alt=''
        className='absolute transform rotate-45'
        style={{
          width: `calc(${planetSize?.width}px / 16)`,
          left: `calc(50% - ${rocketSize?.width}px / 2)`,
          bottom: `calc(${planetSize?.height}px / 6)`,
        }}
      />
      <img
        id='planet'
        ref={planetRef}
        onLoad={onPlanetLoad}
        src={planet}
        alt=''
        className='absolute w-full'
        style={{ bottom: `calc(-${planetSize?.height}px / 1.5)` }}
      />
    </div>
  );
};

export default App;

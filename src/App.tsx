import { useEffect, useRef, useState } from 'react';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';
import planetImg from './assets/planet.png';
import MainContent from './components/MainContent';
import Planet from './components/Planet';
import useWindowSize from './hooks/useWindowSize';

const App = () => {
  const windowSize = useWindowSize();

  const [earthStage, setEarthStage] = useState(0);
  const [planetSize, setPlanetSize] = useState<any>();

  const planetRef = useRef<any>(null);

  const updatePlanetSize = () =>
    setPlanetSize({
      height: planetRef.current.clientHeight,
      width: planetRef.current.clientWidth,
    });

  const onPlanetLoad = ({ target: img }: any) => {
    setPlanetSize({
      height: img.offsetHeight,
      width: img.offsetWidth,
    });
  };

  const backEarthStage = () => {
    if (earthStage > 0) {
      setEarthStage((old) => old - 1);
    }
  };

  const forwardEarthStage = () => {
    if (earthStage < 8) {
      setEarthStage((old) => old + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updatePlanetSize);
    updatePlanetSize();
    return () => {
      window.removeEventListener('resize', updatePlanetSize);
    };
  }, []);

  return (
    <div className='relative h-screen w-screen bg-[#28272F] text-white font-bungee overflow-hidden'>
      <div
        style={{
          backgroundImage:
            'linear-gradient(rgba(40, 39, 47, 0.9), rgba(150, 150, 150, 0.9)), url(src/assets/space2.jpg)',
        }}
        className="h-full w-full bg-[url('src/assets/space.jpg')] bg-fixed bg-center bg-no-repeat bg-cover bg-opacity-20"
      >
        <div className='h-[calc(100%-320px)] w-full flex flex-col items-center text-center'>
          <p className='text-5xl mt-20 py-8 border-y'>Bem vindo, viajante!</p>
          <p className='text-xl mt-12'>Sou o Pedro, prazer</p>
        </div>
        <Planet
          imgRef={planetRef}
          imgOnLoad={onPlanetLoad}
          imgSrc={planetImg}
          planetSize={planetSize}
          earthStage={earthStage}
        />
        <MainContent planetSize={planetSize} earthStage={earthStage} />
        <button
          onClick={backEarthStage}
          className='absolute bottom-0 p-1 bg-[#28272F55] hover:bg-[#28272F99] transition text-xl'
          style={{
            height: windowSize?.width < 1024 ? '320px' : `calc(${planetSize?.height / 4}px)`,
          }}
        >
          <IoChevronBackSharp size={28} />
        </button>
        <button
          onClick={forwardEarthStage}
          className='absolute bottom-0 right-0 p-1 bg-[#28272F55] hover:bg-[#28272F99] transition text-xl'
          style={{
            height: windowSize?.width < 1024 ? '320px' : `calc(${planetSize?.height / 4}px)`,
          }}
        >
          <IoChevronForwardSharp size={28} />
        </button>
      </div>
    </div>
  );
};

export default App;

import { useEffect, useRef, useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import planetImg from './assets/planet.png';
import rocketImg from './assets/rocket.png';
import MainContent from './components/MainContent';
import Planet from './components/Planet';
import Rocket from './components/Rocket';

const App = () => {
  const [earthStage, setEarthStage] = useState(0);
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
    window.addEventListener('resize', updateRocketSize);
    updatePlanetSize();
    updateRocketSize();
    return () => {
      window.removeEventListener('resize', updatePlanetSize);
      window.removeEventListener('resize', updateRocketSize);
    };
  }, []);

  return (
    <div className='relative h-screen w-screen bg-[#28272F] text-white font-poppins overflow-hidden'>
      <div
        style={{
          backgroundImage:
            'linear-gradient(rgba(40, 39, 47, 0.9), rgba(150, 150, 150, 0.9)), url(src/assets/space2.jpg)',
        }}
        className="h-full w-full bg-[url('src/assets/space.jpg')] bg-fixed bg-center bg-no-repeat bg-cover bg-opacity-20"
      >
        <div className='h-1/2 w-full flex flex-col items-center justify-center'>
          <h1 className='p-8 text-5xl border-y-2 '>Bem vindo, viajante!</h1>
          <p>Sou o Pedro, prazer</p>
          <Rocket
            imgRef={rocketRef}
            imgOnLoad={onRocketLoad}
            imgSrc={rocketImg}
            rocketSize={rocketSize}
            planetSize={planetSize}
          />
          <Planet
            imgRef={planetRef}
            imgOnLoad={onPlanetLoad}
            imgSrc={planetImg}
            planetSize={planetSize}
            earthStage={earthStage}
          />
          <MainContent planetSize={planetSize} earthStage={earthStage} />
          {/* <button
            onClick={backEarthStage}
            className='absolute h-12 w-12 rounded-full group hover:bg-[#FFFFFFAA] transition'
            style={{
              left: `calc(50% - ${planetSize?.width / 2.8}px)`,
              bottom: `${planetSize?.height / 10}px`,
            }}
          >
            <IoChevronBack className='w-full h-full group-hover:text-[#28272F] transition' />
          </button>
          <button
            onClick={forwardEarthStage}
            className='absolute h-12 w-12 rounded-full group hover:bg-[#FFFFFFAA] transition'
            style={{
              right: `calc(50% - ${planetSize?.width / 2.8}px)`,
              bottom: `${planetSize?.height / 10}px`,
            }}
          >
            <IoChevronForward className='w-full h-full group-hover:text-[#28272F] transition' />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default App;

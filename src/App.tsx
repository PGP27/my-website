import { useEffect, useRef, useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import planet from './assets/planet.png';
import rocket from './assets/rocket.png';

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
            'linear-gradient(rgba(40, 39, 47, 0.9), rgba(40, 39, 47, 0.9)), url(src/assets/space2.jpg)',
        }}
        className="h-full w-full flex flex-col items-center justify-center bg-[url('src/assets/space.jpg')] bg-fixed bg-center bg-no-repeat bg-cover bg-opacity-20"
      >
        <h1 className='text-5xl'>Bem vindo, viajante!</h1>
        <p>Sou o Pedro, prazer</p>
        <img
          ref={rocketRef}
          onLoad={onRocketLoad}
          src={rocket}
          alt=''
          className='absolute transform rotate-45'
          style={{
            width: `calc(${planetSize?.width}px / 16)`,
            left: `calc(50% - ${rocketSize?.width}px / 2)`,
            bottom: `calc(${planetSize?.height}px / 3.75)`,
          }}
        />
        <img
          id='planet'
          ref={planetRef}
          onLoad={onPlanetLoad}
          src={planet}
          alt=''
          className='absolute w-full transition duration-1000'
          style={{
            bottom: `calc(-${planetSize?.height}px / 1.75)`,
            transform: `rotate(-${earthStage * 45}deg)`,
          }}
        />
        <div
          className='absolute border border-[#28272F] rounded'
          style={{
            height: `${planetSize?.height / 5}px`,
            width: `${planetSize?.width / 2.25}px`,
            left: `calc(50% - ${planetSize?.width / 4.5}px)`,
            bottom: `${planetSize?.height / 40}px`,
            backgroundColor: 'rgba(50, 50, 50, 0.9)',
          }}
        ></div>
        <button
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
        </button>
      </div>
    </div>
  );
};

export default App;

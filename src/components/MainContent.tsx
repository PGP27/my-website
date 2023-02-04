import useWindowSize from '~/hooks/useWindowSize';
import { globalProps } from '~/models';

const MainContent = ({ planetSize, earthStage }: globalProps) => {
  const windowSize = useWindowSize();

  return (
    <div
      className='absolute flex items-center justify-center text-center p-8 rounded shadow'
      style={{
        height:
          windowSize?.width < 1024 ? `${planetSize?.height / 2}px` : `${planetSize?.height / 5}px`,
        width:
          windowSize?.width < 1024 ? `${planetSize?.width / 2}px` : `${planetSize?.width / 2}px`,
        left: `calc(50% - ${planetSize?.width / 4}px)`,
        bottom:
          windowSize?.width < 1024 ? `${planetSize?.height / 4}px` : `${planetSize?.height / 40}px`,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      }}
    >
      {earthStage === 0 && (
        <p className='text-lg text-[#28272F]'>Clique para começar a exploração!</p>
      )}
    </div>
  );
};

export default MainContent;

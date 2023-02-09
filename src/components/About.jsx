import { useTranslation } from "react-i18next";
import MePortifolio from "../assets/MePortifolioDesign.png"

export const About = () => {
  const { t } = useTranslation();
  return (
    <div name='about' className='w-full md:h-screen bg-dark text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 mt-4'>
          <div className='pb-4 md:pb-0 pl-4 flex align-bottom'>
            <p className='text-4xl font-mono font-bold inline border-b-4 border-cyan-200'>
              {t("aboutTitle")}
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className="flex flex-col items-center justify-center">
              <p className='text-4xl text-gray font-bold'>{t("aboutIntro")}</p>
              <p>{t("aboutMe")}</p>  
            </div>
            <div>
              <img className='hover:scale-125 duration-500' src={MePortifolio} alt="My photo" />
            </div>
          </div>
      </div>
    </div>
  );
};

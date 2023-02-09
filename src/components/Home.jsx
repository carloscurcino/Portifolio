import { useTranslation } from 'react-i18next';
import Typed from 'react-typed';


export const Home = () => {
  const { t } = useTranslation();
  return (
    <div name='home' className='w-full h-screen bg-dark'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='font-mono text-white'>{t("myNameIs")}</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>Carlos Curcino.</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray'>
          <Typed
              strings={[
                "I'm a web developer",
                "I love programming",
                "I'll build your website"
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
        </h2>
        <p className='text-white py-4 max-w-[700px] font-mono'>{t("description")}</p>
        <div>
          <a href={`https://drive.google.com/file/d/${t("cvLink")}/view?usp=sharing`} target="_blank"><button className='text-white bg-cyan-400 rounded-lg border-2 border-cyan-200 px-6 py-3 my-2 flex items-center hover:bg-cyan-800 hover:border-cyan-800'>{t("resume")}</button></a>
        </div>
        
      </div>
    </div>
  )
}

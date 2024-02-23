import { useTranslation } from 'react-i18next';
import GitHub from '../assets/github.png';

const HTML = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
const CSS = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
const JavaScript = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
const ReactImg = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
//const GitHub = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" ;
const Node = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
const Postgresql = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg";
const Tailwind = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
const MYSQL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg";
import Next from '../assets/nextjs.png'
import Django from '../assets/django.png'
const Adonis = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg"
const Docker = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"



export const Skills = () => {
    const { t } = useTranslation();
    return (
        <div name='skills' className='w-full md:h-screen bg-dark text-white max-sm:mt-10'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-mono font-bold inline border-b-4 border-cyan-200 '>{t("skills")}</p>
                    <p className='py-4'>// {t("theTechnologies")}</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Next} alt="HTML icon" />
                        <p className='my-4'>NEXT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Django} alt="HTML icon" />
                        <p className='my-4'>DJANGO</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Postgresql} alt="HTML icon" />
                        <p className='my-4'>POSTGRESQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MYSQL} alt="HTML icon" />
                        <p className='my-4'>MYSQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Docker} alt="HTML icon" />
                        <p className='my-4'>DOCKER</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

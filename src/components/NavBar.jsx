import { useState } from 'react';
import { Code, GithubLogo, InstagramLogo, LinkedinLogo, List, X } from 'phosphor-react';
import BR from "../assets/br.svg"
import EN from "../assets/gb.svg"
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { Dropdown } from './Dropdown';



export const NavBar = () => {
  const { t, i18n } = useTranslation();

  const [nav, setNav] = useState(false);
  const handleClik = () => setNav(!nav);
  return (
    <div className='fixed z-10 w-full h-[80px] flex justify-between items-center px-4 bg-dark text-white'>
      <div>
        {/* <Code size={50} /> */}
        <Link to="home" className='hover:opacity-75 cursor-pointer' smooth={true} duration={500}>
          <Code size={50} />
        </Link>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex items-center'>
        {/* <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li> */}
        <li>
          <Link to="about" smooth={true} offset={-20} duration={500}>
            {t("aboutTitle")}
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={-50} duration={500}>
            {t("skills")}
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} offset={-100} duration={500}>
            {t("experience")}
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-70} duration={500}>
            {t("projects")}
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-50} duration={500}>
            {t("contact")}
          </Link>
        </li>
        <li>
          <Dropdown />
        </li>
      </ul>

      {/* Hamburger */}
      <div className='md:hidden z-10 cursor-pointer' onClick={handleClik}>
        {!nav ? <List size={32} /> : <X size={32} />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-dark flex flex-col justify-center items-center'}>
        {/* <li className='py-6 text-2xl'>
          <Link to="home" smooth={true} duration={500} onClick={handleClik}>
            Home
          </Link>
        </li> */}
        <li className='py-6 text-2xl'>
          <Link to="about" smooth={true} offset={-75} duration={500} onClick={handleClik}>
            {t("aboutTitle")}
          </Link>
        </li>
        <li className='py-6 text-2xl'>
          <Link to="skills" smooth={true} offset={-70} duration={500} onClick={handleClik}>
            {t("skills")}
          </Link>
        </li>
        <li className='py-6 text-2xl'>
          <Link to="experience" smooth={true} offset={-100} duration={500}>
            {t("experience")}
          </Link>
        </li>
        <li className='py-6 text-2xl'>
          <Link to="projects" smooth={true} offset={-70} duration={500} onClick={handleClik}>
            {t("projects")}
          </Link>
        </li>
        <li className='py-6 text-2xl'>
          <Link to="contact" smooth={true} offset={-70} duration={500} onClick={handleClik}>
            {t("contact")}
          </Link>
        </li>
        <li>
          <Dropdown />
        </li>
      </ul>


      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[50px] flex justify-between items-center text-cyan-200 hover:text-cyan-300'><a href="https://github.com/carloscurcino" target="_blank"><GithubLogo size={40} /></a></li>
          <li className='w-[160px] h-[50px] flex justify-between items-center text-cyan-200 hover:text-cyan-300'><a href="https://www.linkedin.com/in/carloscurcino/" target="_blank"><LinkedinLogo size={40} /></a></li>
          <li className='w-[160px] h-[50px] flex justify-between items-center text-cyan-200 hover:text-cyan-300'><a href="https://www.instagram.com/carlos.curcino/" target="_blank"><InstagramLogo size={40} /></a></li>
        </ul>
      </div>
    </div>
  )
}

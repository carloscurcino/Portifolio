import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import React from 'react'
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <div name='contact' className='w-full h-screen bg-dark text-white flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/47d006e9-fb02-47a1-84b8-0618b14b1623" className='flex flex-col max-w-[600px] w-full text-black'>
        <div className='pb-4'>
          <p className='text-4xl font-mono font-bold inline border-b-4 border-cyan-200 text-white'>{t("contact")}</p>
          <p className='py-4 text-white'>//{t("submitForm")}</p>
          <p className='text-white md:hidden'>{t("scrollToSee")}</p>
        </div>

        <input required className='p-2 bg-white' type="text" placeholder={t("name")} name='name' />
        <input required className='my-4 p-2 bg-white' type="email" placeholder='Email' name='email' />
        <textarea required className='p-2 bg-white' name="message" rows={10} placeholder={t("message")}></textarea>
        <button className='text-white border-2 hover:bg-cyan-400 hover:border-cyan-400 px-4 py-3 my-8 mx-auto flex items-center'>{t("collaborate")}</button>
        <ul className='flex justify-center md:hidden'>
          <li className='flex justify-between items-center text-cyan-200 hover:text-cyan-300'><a href="https://github.com/carloscurcino" target="_blank"><GithubLogo size={30} /></a></li>
          <li className='flex justify-between items-center text-cyan-200 hover:text-cyan-300'><a href="https://www.linkedin.com/in/carloscurcino/" target="_blank"><LinkedinLogo size={30} /></a></li>
          <li className='flex justify-between items-center text-cyan-200 hover:text-cyan-300'><a href="https://www.instagram.com/carlos.curcino/" target="_blank"><InstagramLogo size={30} /></a></li>
        </ul>
      </form>
    </div>
  )
}

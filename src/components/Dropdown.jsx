import { CaretDown, CaretRight } from 'phosphor-react'
import React, { useEffect, useRef, useState } from 'react'
import br from "../assets/br.svg"
import en from "../assets/gb.svg"
import "../i18n"
import i18n from '../i18n'

export const Dropdown = () => {
    const [isExpanded, setisExpanded] = useState(false);
    const [flag, setflag] = useState(i18n.language === "pt-BR" ? br : en);

    const handleClick = (flagNow, lang) => {
        setflag(flagNow);
        i18n.changeLanguage(lang)
        setisExpanded(!isExpanded)
    }

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setisExpanded(false);
            }
        }

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })
    return (
        <div className='relative' ref={menuRef}>
            <button className='flex justify-center gap-1 items-center rounded text-white px-4 py-[0.28rem] hover:bg-cyan-400 bg-cyan-200' onClick={() => { setisExpanded(!isExpanded) }}>
                <img src={flag} alt="" />
                <div>
                    {!isExpanded ? <CaretDown size={16} weight="bold" className='text-dark' /> : <CaretRight size={16} weight="bold" className='text-dark' />}
                </div>
            </button>
            {isExpanded &&
                <div className='absolute bg-white rounded border-gray text-black mt-[0.10rem] ml-2 cursor-pointer w-11 h-19'>
                    <ul>
                        <li onClick={() => handleClick(en, "en")} className='px-0 flex justify-center items-center hover:bg-cyan-400 hover:text-white h-7'><img className='w-full h-6 hover:scale-125 duration-500 rounded' src={en} alt="United Kingdom flag, symbolizing the english laguage" /></li>
                        <li onClick={() => handleClick(br, "pt-BR")} className='px-0 flex justify-center items-center mt-[0.10rem] hover:bg-cyan-400 hover:text-white h-7'><img className='w-full h-6 hover:scale-125 duration-500 rounded' src={br} alt="Brazil flag, symbolizing the brazillian portuguese laguage" /></li>
                    </ul>
                </div>
            }
        </div>
    )
}

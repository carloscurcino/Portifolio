import React from 'react'
import { PlusCircle, Plus } from 'phosphor-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '../Modal.jsx';

export const ProjectsGrid = ({ project, isMobile }) => {
  const { t } = useTranslation();

  const [openModal, setOpenModal] = useState(false);
  const [thisIndex, setThisIndex] = useState(0);
  console.log(project)
  return (
    <div className={`grid sm:grid-cols-2 ${isMobile ? 'md:grid-cols-4' : 'md:grid-cols-3'} gap-4`}>

      {/* Gird Item */}
      {project.toReversed().map((item, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${item.image})` }}
          className={`shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center text-center mx-auto content-div overflow-hidden
           ${isMobile ? 'min-w-60 md:w-60 max-sm:w-full min-h-[582px] md:min-h-[482px] md:h-[482px]' : ''}`}
        >
          {/* Hover effect for images */}
          <div className="opacity-0 group-hover:opacity-100 flex flex-col group justify-center align-middle items-center pt-6">
            <span className="text-2xl font bold text-white tracking-wider ">
              {item.name}
            </span>
            <div className='flex justify-center items-center gap-1'>
              <p className=''>{t("clickDescription")}</p>
              <PlusCircle size={22} className='cursor-pointer hover:rotate-180 duration-300' onClick={() => { setThisIndex(index); setOpenModal(true) }} />

            </div>
            <div className="pt-5 pb-4 text-center ">
              {/* eslint-disable-next-line */}
              <a href={item.live} target="_blank">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                 bg-white text-gray font-bold text-lg"
                >
                  Demo
                </button>
              </a>
              {/* eslint-disable-next-line */}
              <a href={item.github} target="_blank">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                 bg-white text-gray font-bold text-lg"
                >
                  Code
                </button>
              </a>
            </div>
          </div>
          {openModal && (index === thisIndex) && <Modal setOpenModal={setOpenModal} item={item} index={index} />}
          {openModal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal')}
          <div className='flex items-start'>
            <div className='justify-center p-[5.1px] gap-1 bg-dark rounded-r-md flex ml-[-200px] group-hover:ml-0 duration-300'>
              {
                item.stack.map(stack => <img className='w-[25px]' src={stack} alt="" />)
              }
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

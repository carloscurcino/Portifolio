import { X } from "phosphor-react"
import { useTranslation } from "react-i18next"


export const Modal = ({setOpenModal, item}) => {
    const { t } = useTranslation()
  return (
      // Modal Background
      <div className="w-full h-screen bg-[rgba(49,49,49,0.3)] fixed flex justify-center items-center z-20 top-0 left-0 right-0 bottom-0 text-black">
      {/* Modal Container */}
      <div className="w-[700px] h-[650px] rounded-[12px] bg-white shadow-md flex flex-col ">
          <div className="flex justify-end">
              <X size={25} weight="bold" className="text-[crimson] cursor-pointer fixed -ml-1 mt-1" onClick={()=>{setOpenModal(false)}}/>
          </div>
          {/* Tittle */}
          <div
            style={{ backgroundImage: `url(${item.altImage})` }}
            className="container 
                    flex flex-col justify-center text-center rounded-t-lg mx-auto bg-no-repeat bg-cover bg-center h-[100%] overflow-hidden"
        ></div>
          <div className="inline-block text-center mt-2 text-[22px] font-mono font-bold">
              <h1>{item.name}</h1>
              
          </div>
          {/* Body */}
          <div className="flex flex-col flex-[50%] justify-center items-center text-justify text-md px-12">
              <p>{t(item.description)}</p>
          </div>
          {/* Footer */}
          <div className="flex flex-[50%] justify-center items-center mt-0">
            <a href={item.live} target="_blank">
                <button
                    className="text-center rounded-lg px-4 py-3 m-2
                            bg-cyan-800 text-white font-bold text-lg"
                >
                    Demo
                </button>
            </a>
                {/* eslint-disable-next-line */}
            <a href={item.github} target="_blank">
                <button
                    className="text-center rounded-lg px-4 py-3 m-2
                            bg-cyan-800 text-white font-bold text-lg"
                >
                    Code
                </button>
            </a>
          </div>
      </div>
  </div>
  )
}
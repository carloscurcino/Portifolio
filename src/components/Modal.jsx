import { X } from "phosphor-react"
import { useTranslation } from "react-i18next"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export const Modal = ({ setOpenModal, item, isMobile }) => {
    const { t } = useTranslation()
    return (
        // Modal Background
        <div className={`w-full h-screen max-sm:overflow-scroll bg-[rgba(49,49,49,0.3)] fixed flex justify-center items-center z-20 top-0 left-0 right-0 bottom-0 text-black`}>
            {/* Modal Container */}
            <div className={`max-w-[700px] h-[650px] max-sm:h-[90%] max-sm:overflow-scroll flex-1 rounded-[12px] bg-white shadow-md flex ${isMobile ? 'sm:flex-row-reverse flex-col' : 'flex-col'}`}>
                <div className="z-30 flex justify-end">
                    <X size={25} weight="bold" className="text-white bg-[crimson] hover:bg-[#b91133]/80 p-1 rounded-lg mr-2 cursor-pointer fixed -ml-1 mt-1" onClick={() => { setOpenModal(false) }} />
                </div>
                {/* Tittle */}

                {/* <img
                    src={item.altImage}
                    className=" 
                    flex text-center rounded-t-lg object-cover object-no-repeat bg-cover object-center h-[100%] overflow-hidden"
                /> */}
                {!isMobile ? (
                    <div
                        style={{ backgroundImage: `url(${item.altImage})` }}
                        className={`container 
                    flex flex-col justify-center text-center ${isMobile ? 'rounded-r-lg' : 'rounded-t-lg'} mx-auto bg-no-repeat bg-cover bg-center h-[100%] overflow-hidden`}
                    ></div>
                )
                    : (<Carousel className={`relative z-0 flex text-center sm:max-w-[50%] max-w-full sm:h-[100%] min-h-screen sm:max-h-[650px]`}>
                        <CarouselContent className="min-h-full">
                            {item.images.map((image, index) => (
                                <CarouselItem key={index} className="min-h-full">
                                    <img
                                        src={image}
                                        className=" 
                    flex text-center rounded-r-lg object-cover object-no-repeat bg-cover object-center h-full sm:max-h-[650px] w-full object-fit-cover overflow-hidden"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>)}
                <div className={`flex h-full flex-col ${isMobile && 'sm:max-w-[50%] max-w-full mt-8'}`}>
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
        </div>
    )
}
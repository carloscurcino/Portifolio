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
    const hasImages = Array.isArray(item?.images) && item.images.length > 0
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
                    hasImages ? (
                        <Carousel className={`w-full flex flex-col justify-center text-center ${isMobile ? 'rounded-r-lg' : 'rounded-t-lg'} bg-no-repeat bg-cover bg-center h-full overflow-hidden`}>
                            <CarouselContent className="min-h-full h-full w-full">
                                {item.images.map((image, index) => (
                                    <CarouselItem key={index} className="min-h-full w-full rounded-t-lg bg-black">
                                        <img
                                            src={image}
                                            className="w-full h-full object-cover rounded-t-lg"
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    ) : (
                        <div
                            style={{ backgroundImage: `url(${item.altImage})` }}
                            className={`w-full flex flex-col justify-center text-center ${isMobile ? 'rounded-r-lg' : 'rounded-t-lg'} bg-no-repeat bg-cover bg-center h-full`}
                        ></div>
                    )
                ) : (
                    hasImages ? (
                        <Carousel className={`relative z-0 rounded-r-lg flex text-center w-full flex-grow sm:max-w-max sm:h-[100%] min-h-full sm:max-h-[650px]`}>
                            <CarouselContent className="min-h-full h-full">
                                        {item.images.map((image, index) => (
                                            <CarouselItem key={index} className="min-h-full w-full rounded-r-lg bg-black">
                                                <img
                                                    src={image}
                                                    className="w-full h-full object-contain rounded-r-lg max-sm:min-h-full sm:max-h-[650px]"
                                                />
                                            </CarouselItem>
                                        ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    ) : (
                        <div
                            style={{ backgroundImage: `url(${item.altImage})` }}
                            className={`w-full flex flex-col justify-center text-center rounded-r-lg bg-no-repeat bg-cover bg-center h-full`}
                        ></div>
                    )
                )}
                <div className={`flex h-full flex-col ${isMobile && 'mt-8 w-full'}`}>
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
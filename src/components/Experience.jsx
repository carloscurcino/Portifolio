import React from 'react'
import { useTranslation } from 'react-i18next';
import { dataWork } from "@/data/data"

export const Experience = () => {
    const { t } = useTranslation();
    const workExperience = dataWork

    return (
        <div name='experience' className='w-full flex-1 text-white bg-dark'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-mono font-bold inline border-b-4 text-white border-cyan-200'>
                        {t("experience")}
                    </p>
                </div>

                <div className=''>
                    {workExperience.toReversed().map((work) => (
                        <div className='max-w-[1000px] my-8 mx-auto p-4 rounded-xl hover:bg-black/20 hover:border-2 hover:border-cyan-400/20'>
                            {/* Card */}
                            <div className='flex items-center gap-4'>
                                {/* <img className='w-16 h-16 rounded-full' src='https://via.placeholder.com/150' alt='Company Logo' /> */}
                                <img className='w-16 h-16 rounded-full object-contain' src={work.image} alt='Company Logo' />
                                <div>
                                    <h3 className='text-lg font-bold'>{work.companyName}</h3>
                                    <p className='text-gray'>{work.position}</p>
                                    <p className='text-sm'>{work.startDate} - {work.finalDate.length > 0 ? work.finalDate : t("currently")}</p>
                                </div>
                            </div>
                            <p className='text-lg'>
                                {t(work.description)}
                            </p>
                            <div className='flex flex-row gap-2'>
                                {
                                    work.stack.map(stack => <img className='w-[25px]' src={stack} alt="" />)
                                }
                            </div>
                        </div>
                    ))}
                </div>
                {/* tecnologies */}
            </div>
        </div>
    )
}

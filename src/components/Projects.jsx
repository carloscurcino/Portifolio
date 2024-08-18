import { PlusCircle, Plus } from 'phosphor-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { data } from '../data/data.js'
import { Modal } from './Modal.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const Projects = () => {
  const { t } = useTranslation();

  const [openModal, setOpenModal] = useState(false);
  const [thisIndex, setThisIndex] = useState(0);
  // projects file
  const project = data;
  //setProject(data);
  return (
    <div name='projects' className='w-full md:h-screen text-white bg-dark my-20 sm:my-40'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-mono font-bold inline border-b-4 text-white border-cyan-200'>
            {t("projects")}
          </p>
          <p className='py-6'>// {t("recentWork")}</p>
          <p className='hidden md:flex'>{t("passMouseToSee")}</p>
          <p className='md:hidden'>{t("clickToSee")}</p>
        </div>

        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="web" onClick={() => console.log("web")}>Web</TabsTrigger>
            <TabsTrigger value="mobile" onClick={() => console.log("mobile")}>Mobile</TabsTrigger>
          </TabsList>
          <TabsContent value="web">Chart by price change in the last 30 days</TabsContent>
          <TabsContent value="mobile">Chart by market capitalization change in the last 30 days</TabsContent>
        </Tabs>
        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/* Gird Item */}
          {project.toReversed().map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex flex-col justify-center text-center  mx-auto content-div overflow-hidden"
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

      </div>
    </div>
  );
};

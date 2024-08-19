import { PlusCircle, Plus } from 'phosphor-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { data, dataMobile } from '../data/data.js'
import { Modal } from './Modal.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectsGrid } from './ProjectsGrid.jsx';

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

        <Tabs defaultValue="web" className="w-full">
          <TabsList>
            <TabsTrigger value="web" onClick={() => console.log("web")}>Web</TabsTrigger>
            <TabsTrigger value="mobile" onClick={() => console.log("mobile")}>Mobile</TabsTrigger>
          </TabsList>
          <TabsContent value="web">Chart by price change in the last 30 days
            <ProjectsGrid project={data} />
          </TabsContent>
          <TabsContent value="mobile">Chart by market capitalization change in the last 30 days
            <ProjectsGrid project={dataMobile} />
          </TabsContent>
        </Tabs>
        {/* container for projects */}
      </div>
    </div>
  );
};

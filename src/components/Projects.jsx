import { PlusCircle, Plus } from 'phosphor-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { data, dataMobile } from '../data/data.js'
import { Modal } from './Modal.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectsGrid } from './Projects/ProjectsGrid.jsx';

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <div name='projects' className='w-full flex-1 text-white bg-dark'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-mono font-bold inline border-b-4 text-white border-cyan-200'>
            {t("projects")}
          </p>
          <p className='py-6'>// {t("recentWork")}</p>
          <p className='hidden md:flex'>{t("passMouseToSee")}</p>
          <p className='md:hidden'>{t("clickToSee")}</p>
        </div>

        {/* container for projects */}
        <Tabs defaultValue="web" className="w-full">
          <TabsList>
            <TabsTrigger value="web" onClick={() => console.log("web")}>Web</TabsTrigger>
            <TabsTrigger value="mobile" onClick={() => console.log("mobile")}>Mobile</TabsTrigger>
          </TabsList>
          <TabsContent value="web">Chart by price change in the last 30 days
            <ProjectsGrid project={data} />
          </TabsContent>
          <TabsContent value="mobile">Chart by market capitalization change in the last 30 days
            <ProjectsGrid project={dataMobile} isMobile={true} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

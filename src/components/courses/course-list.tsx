import {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import Button from '@/components/Button';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { MdOutlineOndemandVideo } from 'react-icons/md';

const data = [
  {
    id: 1,
    desp: 'tung',
    title: 'bai 1',
  },
  {
    id: 2,
    desp: 'tung',
    title: 'bai 2',

  },
  {
    id: 4,
    desp: 'tung 1',
    title: 'bai 1',
  },
  {
    id: 3,
    desp: 'tung 2',
    title: 'bai 1',
  },
];
interface CourseListProp{
  activeVideo:number,
  setActiveVideo:Dispatch<SetStateAction<number>>,
  isMoblie?:boolean
}
function CourseList({ activeVideo, setActiveVideo, isMoblie }:CourseListProp) {
  const [visibleSections, setVisibleSections] = useState(new Set<String>());
  let totalCount = 0;
  const videoSection = [
    ...new Set<string>(data.map((i) => i.desp)),
  ];
  const toogleSection = (section:string) => {
    const newVisibleSecitons = new Set(visibleSections);

    if (newVisibleSecitons?.has(section)) {
      newVisibleSecitons.delete(section);
    } else {
      newVisibleSecitons.add(section);
    }
    setVisibleSections(newVisibleSecitons);
  };

  return (
    <>
      <div className="border h-screen dark:border-none lg:block hidden">
        <div className="p-4 text-xl font-semibold text-black dark:text-white">Nội dung khóa học</div>
        {
           videoSection.map((section:string) => {
             const isVisible = visibleSections.has(section);

             // filter
             const sectionVideos:any[] = data.filter((item:any) => item.desp === section);
             const sectionVideoCount:number = sectionVideos.length;
             const sectionStartIndex:number = totalCount;
             totalCount += sectionVideoCount;
             return (
               <div key={section}>
                 <div className="py-2 px-3 bg-gray-100 dark:bg-transparent" onClick={() => { toogleSection(section); }}>
                   <div className="w-full flex">
                     <div className="w-full flex justify-between items-center">
                       <div className="text-xl text-black dark:text-white">{section}</div>
                       <div>
                         <Button onClick={() => {}}>
                           {isVisible ? <BsChevronUp size={20} className="text-black dark:text-white" /> : <BsChevronDown size={20} className="text-black dark:text-white" />}
                         </Button>
                       </div>
                     </div>
                   </div>
                   <div className="text-black dark:text-white">
                     {sectionVideoCount}
                     {' '}
                     Lesson
                   </div>
                 </div>

                 <div className="border-[.5px] border-gray-200" />
                 {isVisible && (
                 <>
                   <div className="w-full bg-gray-50 dark:bg-slate-950">
                     {sectionVideos.map((sectionVideo:any, index:number) => {
                       const videoIndex = sectionStartIndex + index;
                       return (
                         <div className={` px-10 py-5 ${videoIndex === activeVideo ? 'bg-blue-700 dark:bg-slate-500' : ''} w-full`} onClick={() => setActiveVideo(videoIndex)} key={sectionVideo.id}>
                           <div className="flex items-start">
                             <div>
                               <MdOutlineOndemandVideo
                                 size={25}
                                 className="mr-2"
                                 color="#1cdada"
                               />
                             </div>
                             <div className="text-xl inline-block break-words text-black dark:text-white">{sectionVideo.title}</div>
                           </div>
                         </div>
                       );
                     })}
                   </div>
                   <div className="border border-gray-200" />
                 </>

                 )}
               </div>
             );
           })
        }
      </div>
      {isMoblie
        && (
        <div className="h-screen dark:border-none lg:hidden">
          <div className="p-4 text-xl font-semibold text-black dark:text-white">Nội dung khóa học</div>
          {
            videoSection.map((section:string) => {
              const isVisible = visibleSections.has(section);

              // filter
              const sectionVideos:any[] = data.filter((item:any) => item.desp === section);
              const sectionVideoCount:number = sectionVideos.length;
              const sectionStartIndex:number = totalCount;
              totalCount += sectionVideoCount;
              return (
                <div key={section}>
                  <div className="py-2 px-3 bg-gray-100 dark:bg-transparent" onClick={() => { toogleSection(section); }}>
                    <div className="w-full flex ">
                      <div className="w-full flex justify-between items-center">
                        <div className="text-xl text-black dark:text-white">{section}</div>
                        <div>
                          <Button onClick={() => {}}>
                            {isVisible ? <BsChevronUp size={20} className="text-black dark:text-white" /> : <BsChevronDown size={20} className="text-black dark:text-white" />}
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="text-black dark:text-white">
                      {sectionVideoCount}
                      {' '}
                      Lesson
                    </div>
                  </div>

                  <div className="border-[.5px] border-gray-200" />
                  {isVisible && (
                    <>
                      <div className="w-full bg-gray-50 dark:bg-slate-950">
                        {sectionVideos.map((sectionVideo:any, index:number) => {
                          const videoIndex = sectionStartIndex + index;
                          return (
                            <div className={` px-10 py-5 ${videoIndex === activeVideo ? 'bg-blue-700 dark:bg-slate-500' : ''} w-full`} onClick={() => setActiveVideo(videoIndex)} key={sectionVideo.id}>
                              <div className="flex items-start">
                                <div>
                                  <MdOutlineOndemandVideo
                                    size={25}
                                    className="mr-2"
                                    color="#1cdada"
                                  />
                                </div>
                                <div className="text-xl inline-block break-words text-black dark:text-white">{sectionVideo.title}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="border border-gray-200" />
                    </>

                  )}
                </div>
              );
            })
          }
        </div>
        )}
    </>

  );
}
export default CourseList;

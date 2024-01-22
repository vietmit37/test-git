import Link from 'next/link';
import React, { useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ThemeSwitch } from '@/components/theme-switch';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import CourseList from '@/components/courses/course-list';
import { useRouter } from 'next/navigation';

function Header() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [activeVideo, setActiveVideo] = useState<number>(0);
  const router = useRouter();
  const handleClose = (e:any) => {
    if (e.target.id === 'screen') {
      setOpenSidebar(false);
    }
  };

  const percentage = 10;
  return (
    <>
      <div className="fixed w-full h-[60px] flex bg-green-200 justify-between items-center dark:bg-slate-900">
        <div className="flex items-center p-10">
          <BsChevronLeft className="cursor-pointer dark:text-white text-black" size={25} onClick={() => router.back()} />
          <Link href="/">
            <img className="w-[70px]" alt="" src="https://download.logo.wine/logo/Marico/Marico-Logo.wine.png" />
          </Link>
          <div className="text-2xl text-black font-semibold dark:text-white">Tên khóa học</div>
        </div>
        <div className="flex items-center gap-x-4">
          <CircularProgressbar styles={buildStyles({ textSize: '30px', pathTransitionDuration: 0.5 })} className="!w-[50px]" value={percentage} text={`${percentage} %`} />
          <span className="text-black dark:text-white">0/30 Lesson</span>
        </div>
        <div className="flex items-center">
          <div className="lg:hidden text-black dark:text-white mr-3 text-[17px]">Tên bài học</div>
          <div className="lg:hidden cursor-pointer rounded-full bg-gray-50 dark:bg-slate-950 w-[50px] h-[50px] flex justify-center items-center">
            {openSidebar
              ? <BsChevronLeft className="dark:text-white text-black" size={25} />
              : <HiOutlineMenuAlt1 size={25} className="dark:text-white text-black" onClick={() => setOpenSidebar(true)} />}
          </div>
          <ThemeSwitch />
        </div>
      </div>
      {openSidebar
        && <div className="fixed w-full h-screen top-0 left-0 right-0 z-[99999] bg-[#00000024]" onClick={handleClose} id="screen" />}
      <div className={`${!openSidebar ? 'ml-[-1730px] transition-all' : ''} lg:hidden top-0 left-0 w-[40%] fixed z-[9999999] h-screen bg-white dark:bg-slate-950 dark:bg-opacity-90 py-4 px-3 transition-all sm:w-full md:w-[50%]`}>
        <CourseList activeVideo={activeVideo} setActiveVideo={setActiveVideo} isMoblie />
      </div>

    </>
  );
} export default Header;

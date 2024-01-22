'use client';

import Link from 'next/link';
import Button from '@/components/Button';
import NavItem from '@/components/nav-item';
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from 'react-icons/hi';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { EPage } from '@/utils/enums/page.enum';

function Header() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const router = useRouter();

  const handleClose = (e:any) => {
    if (e.target.id === 'screen') {
      setOpenSidebar(false);
    }
  };
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line consistent-return
    window.addEventListener('scroll', () => {
      if (window.scrollY > 15) return setActive(true);
      setActive(false);
    });
  }
  return (
    <header className={`${active ? 'bg-gray-50 py-2 w-full fixed shadow-xl' : 'relative'}  transition ease-in-out delay-600 px-20 z-[9999] flex justify-between lg:gap-x-2 items-center top-0 left-0 w-[100%]`}>
      {/* <div className="flex justify-between lg:gap-x-2 items-center fixed top-0 left-0 "> */}
      <div className="flex lg:gap-x-4 items-center">
        <Link href="/">
          <div className='h-[100px] w-[180px] cursor-pointer bg-[url("https://www.internship.edu.vn/wp-content/uploads/Logo-Marico-200x206.png")] bg-cover lg:h-[100px]' />
        </Link>
        <NavItem activeItem={0} isMobile={false} />
      </div>
      <div className=" gap-x-4 items-center flex">
        <div className="block lg:hidden">
          <HiOutlineMenuAlt3 size={25} className="cursor-pointer dark:text-white text-black" onClick={() => setOpenSidebar(true)} />
        </div>
        <HiOutlineUserCircle size={25} className="cursor-pointer dark:text-white text-black hidden lg:block " />
        <div><Button onClick={() => router.push(EPage.LOGIN)} className="px-[40px] py-3 border-[3px] rounded-xl bg-white border-black">Login</Button></div>
      </div>
      {/* </div> */}
      {openSidebar && (
        <div className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]" onClick={handleClose} id="screen">
          <div className="w-[40%] fixed z-[9999999] h-screen bg-white dark:bg-slate-950 dark:bg-opacity-90 top-0 left-0 py-4 px-3">
            <HiOutlineUserCircle size={25} className="cursor-pointer dark:text-white text-black" />
            <NavItem activeItem={1} isMobile />
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;

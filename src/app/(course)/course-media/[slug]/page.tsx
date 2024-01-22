'use client';

import CourseVideo from '@/components/courses/course-video';
import { useEffect, useState } from 'react';
import CourseList from '@/components/courses/course-list';

function CourseMedia() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line consistent-return
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) return setActive(true);
      setActive(false);
    });
  }
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <div className="h-[60px]" />
      <div className=" w-full grid lg:grid-cols-10">
        <div className="col-span-7 overflow-y-scroll">
          <CourseVideo />
        </div>
        <aside className={`${active ? 'fixed w-[30%] right-0 top-0 mt-[60px] ' : 'relative'} col-span-3 `}>
          {!domLoaded ? <div>loading...</div>
            : (
              <CourseList
                activeVideo={activeVideo}
                setActiveVideo={setActiveVideo}
              />
            ) }
        </aside>
      </div>
    </>
  );
}
export default CourseMedia;

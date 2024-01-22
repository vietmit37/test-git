import { useState } from 'react';
import { ProductItemSkeleton } from '@/components/skeleton';
import { useRouter } from 'next/navigation';
import { EPage } from '@/utils/enums/page.enum';

interface IPropCardCourses{
  urlImg: string,
  description: string,
  title: string,
  urlCoach: string,
  nameCoach: string,
}
export const CardCoursesListFallback = () => {
  const products = [...new Array(12)];

  return (
    <div className="container grid grid-cols-3 gap-4">
      {products.map((_, index:number) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="shadow-xl cursor-pointer" key={index}>
          <ProductItemSkeleton />
        </div>
      ))}
    </div>
  );
};
function CardCourses({
  urlImg, description, title, urlCoach, nameCoach,
}:IPropCardCourses) {
  const router = useRouter();
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = (e:any) => {
    e.stopPropagation();
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="shadow-xl cursor-pointer" onClick={() => router.push(`${EPage.COURSE_DETAIL}/1`)}>
      <div className="sm:h-[120px] md:h-[200px]">
        <img src={urlImg} alt="book" className="h-full w-full" />
      </div>
      <div className="px-4 py-3">
        <div className="text-[25px]">{title}</div>
        <div className={`${isReadMore ? 'align-text-top break-words max-h-[70px] overflow-hidden ' : 'align-text-top break-words '}`}>
          {isReadMore ? description.slice(0, 100) : description }
        </div>
        <div className="z-[100]">
          {description.length > 100
            && (
              <span onClick={toggleReadMore} className="underline capitalize font-semibold text-xl">
                {isReadMore ? ' read more' : ' show less'}
              </span>
            )}
        </div>
        <div className="mt-4">Participants</div>
        <div className="border w-[100%] border-blue-900 mt-4" />
        <div className="sm:block md:flex gap-3 items-center mt-4">
          <div className="md:w-[60px] md:h-[60px] sm:w-[30px] sm:h-[30px]  rounded-full overflow-hidden object-cover">
            <img className="w-full h-full" src={urlCoach} alt="book" />
          </div>
          <span>
            Coach:
            {nameCoach}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardCourses;

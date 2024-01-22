'use client';

import { useRouter } from 'next/navigation';
import { EPage } from '@/utils/enums/page.enum';

function CardTeacher() {
  const router = useRouter();
  return (
    <div
      className="shadow-xl cursor-pointer rounded-tr-2xl rounded-tl-2xl overflow-hidden"
      onClick={() => {
        router.push(`${EPage.TEACHER}/:id`);
      }}
    >
      <img src="https://channel.mediacdn.vn/2020/11/24/photo-1-16062109593012091900600.jpg" alt="book" />
      <div className="my-5">
        <div className="text-center text-blue-600 font-semibold text-2xl">Aden</div>
        <div className="text-center text-gray-500">Head</div>
      </div>
    </div>
  );
}
export default CardTeacher;

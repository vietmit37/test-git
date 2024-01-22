'use client';

import CardCourseDetail from '@/components/cards/card-course-detail';
import { Divider } from '@/components/divider';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import { EPage } from '@/utils/enums/page.enum';
import useResetTheme from '@/hooks/useResetTheme';

const CourseDetail = () => {
  useResetTheme();
  const router = useRouter();
  return (
    <div>
      <div className="container grid lg:grid-cols-3 grid-cols-1 gap-7 py-10">
        <div className="lg:col-span-2 order-last lg:order-[unset]">
          <CardCourseDetail />
        </div>
        <div className="w-full">
          <div className="border w-full">
            <div className="px-4 py-3 flex justify-between">
              <div className="text-[18px]">Người hướng dẫn</div>
              <div className="text-[18px] font-semibold">Nguyễn Văn A</div>
            </div>
            <Divider size={3} />
            <div className="px-4 py-3">
              <Button onClick={() => router.push(`${EPage.COURSE_MEDIA}/1`)} className="bg-blue-400 flex justify-center py-5 text-xl font-semibold">Bài học</Button>
            </div>
            <Divider size={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

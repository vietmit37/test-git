'use client';

import ReactPlayer from 'react-player';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';

function CourseVideo() {
  const [domLoaded, setDomLoaded] = useState(true);
  useEffect(() => {
    setDomLoaded(false);
  }, []);
  return (
    <div className="w-[95%] lg:w-[86%] m-auto h-screen">
      {
        domLoaded ? <div>...loading</div> : <ReactPlayer url="https://www.youtube.com/watch?v=iu-LBY7NXD4" height={700} width="100%" controls />
      }
      <div className="w-full flex justify-between items-center my-3">
        <Button className="!w-[unset] px-16 min-h-[40px] bg-blue-700 opacity-[.8] text-white flex justify-center rounded-full" onClick={() => {}}>Bài trước</Button>
        <Button className=" !w-[unset] bg-blue-700 px-16 min-h-[40px] opacity-[.8] text-white flex justify-center rounded-full" onClick={() => {}}>Bài tiếp theo</Button>
      </div>
      <div className="text-black whitespace-pre-line text-[18px] mb-3 dark:text-white">
        <div className="text-2xl font-semibold">
          Giới thiệu
        </div>
        <div>
          Cập nhật tháng 11 năm 2022
        </div>
        <div>
          Mình làm seri này vì nhận thấy trong lúc đang quay khóa học ReactJS, khi phải đụng vào Terminal thì khá nhiều anh em bỡ ngỡ. Mình sẽ dành ra khoảng vài ngày để làm xong seri này rồi mình quay ReactJS tiếp nhé anh em ^^

          À, anh em nhớ phải sử dụng Windows 10 hoặc 11 để theo được seri này nhé

          Tham gia các cộng đồng để cùng học hỏi, chia sẻ và "thám thính" xem F8 sắp có gì mới nhé!

          Fanpage: https://www.facebook.com/f8vnofficial
          Group: https://www.facebook.com/groups/649972919142215
          Youtube: https://www.youtube.com/F8VNOfficial
          Sơn Đặng: https://www.facebook.com/sondnf8
        </div>
      </div>
      <div className="text-black whitespace-pre-line text-[18px] mb-3 dark:text-white">
        <div className="text-2xl font-semibold">
          Giới thiệu
        </div>
        <div>
          Cập nhật tháng 11 năm 2022
        </div>
        <div>
          Mình làm seri này vì nhận thấy trong lúc đang quay khóa học ReactJS, khi phải đụng vào Terminal thì khá nhiều anh em bỡ ngỡ. Mình sẽ dành ra khoảng vài ngày để làm xong seri này rồi mình quay ReactJS tiếp nhé anh em ^^

          À, anh em nhớ phải sử dụng Windows 10 hoặc 11 để theo được seri này nhé

          Tham gia các cộng đồng để cùng học hỏi, chia sẻ và "thám thính" xem F8 sắp có gì mới nhé!

          Fanpage: https://www.facebook.com/f8vnofficial
          Group: https://www.facebook.com/groups/649972919142215
          Youtube: https://www.youtube.com/F8VNOfficial
          Sơn Đặng: https://www.facebook.com/sondnf8
        </div>

      </div>
      <div className="text-black whitespace-pre-line text-[18px] mb-3 dark:text-white">
        <div className="text-2xl font-semibold">
          Giới thiệu
        </div>
        <div>
          Cập nhật tháng 11 năm 2022
        </div>
        <div>
          Mình làm seri này vì nhận thấy trong lúc đang quay khóa học ReactJS, khi phải đụng vào Terminal thì khá nhiều anh em bỡ ngỡ. Mình sẽ dành ra khoảng vài ngày để làm xong seri này rồi mình quay ReactJS tiếp nhé anh em ^^

          À, anh em nhớ phải sử dụng Windows 10 hoặc 11 để theo được seri này nhé

          Tham gia các cộng đồng để cùng học hỏi, chia sẻ và "thám thính" xem F8 sắp có gì mới nhé!

          Fanpage: https://www.facebook.com/f8vnofficial
          Group: https://www.facebook.com/groups/649972919142215
          Youtube: https://www.youtube.com/F8VNOfficial
          Sơn Đặng: https://www.facebook.com/sondnf8
        </div>

      </div>
    </div>
  );
}
export default CourseVideo;

import { Divider } from '@/components/divider';

const CardCourseDetail = () => (
  <div className="border">
    <img className="w-full h-full" src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" alt={' '} />
    <div className="mt-4">
      <div className="px-5 space-y-3 mb-4">
        <div className="capitalize text-3xl font-semibold">Tên khóa học</div>
        <div className="sm:block md:flex gap-3 items-center mt-4">
          <div className="md:w-[50px] md:h-[50px] sm:w-[30px] sm:h-[30px]  rounded-full overflow-hidden object-cover">
            <img className="w-full h-full" src="https://channel.mediacdn.vn/2020/11/24/photo-1-16062109593012091900600.jpg" alt="book" />
          </div>
          <span className="text-[16px]">
            Tên Coach
          </span>
        </div>
      </div>
      <Divider size={3} />
      <div className="px-5 space-y-3 mt-3">
        <div className="capitalize text-xl font-semibold">Cource Description</div>
        <div>
          The interest for Product Management is expanding at a crazy rate. An ever-increasing number of organizations are at last making sense of how significant this control and this job is to their prosperity.
          Be that as it may, how precisely do you get into the field? There aren't any degrees in Product Management and there are no confirmations. Most Product Managers get into the field through karma or associations. That closes here - we'll get you modern on ALL the aptitudes you have to learn Product Management AND have the most obvious opportunity at landing the position you need. There's no greater uncertainty to it. We'll give you what you have to know and what you need to do - all instructed from a Product Management insider.
          What you’ll learn
          Understudies aren't required to know anything already - we'll show you the essentials, how to apply them, how to form into a propelled item chief, lastly how to expand your odds to find a new line of work as a Product Manager.
          Comprehend the Product Life Cycle and how it applies to each item.
          Comprehend and impart client torment by type and recurrence.
          Survey the centre issue of an item.
          Separate between Direct, Indirect, Substitute, and Potential contenders.
          Instructions to structure and run a client meeting
          Requirements
          No pre-necessities, in spite of the fact that commonality with fundamental business ideas is useful.
        </div>
      </div>
    </div>

  </div>
);
export default CardCourseDetail;

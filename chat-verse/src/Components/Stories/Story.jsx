import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import useAuth from "../../Hooks/auth/useAuth";

const Story = () => {
  const { user } = useAuth();

  const story = (
    <div className="bg-gray-200 max-w-[160px] h-[180px] md:max-w-[180px] md:h-[260px] relative rounded-lg hover:cursor-pointer hover:bg-gray-300 transition-all flex items-center justify-center">
      <img
        className="w-7 h-7 md:w-10 md:h-10 rounded-full absolute top-3 left-3"
        src={user?.photoURL || "https://i.ibb.co/5x441PC/user.png"}
        alt="user image"
      />
      <h2 className="text-sm md:text-xl text-center">
        Create A <br /> Story
      </h2>
    </div>
  );

  const stories = [story, story, story, story, story, story, story, story];

  return (
    <>
      <div className="bg-white p-3 md:py-4 rounded-md mb-6">
        {/* story for mobile devices */}
        <div className="md:hidden">
          <Swiper slidesPerView={3} spaceBetween={10} className="mySwiper">
            <SwiperSlide>
              <div className="bg-gray-200 max-w-[160px] h-[180px] relative rounded-lg hover:cursor-pointer hover:bg-gray-300 transition-all flex items-center justify-center">
                <img
                  className="w-7 h-7 md:w-10 md:h-10 rounded-full absolute top-3 left-3"
                  src={user?.photoURL || "https://i.ibb.co/5x441PC/user.png"}
                  alt="user image"
                />
                <h2 className="text-sm md:text-xl text-center">
                  Create A <br /> Story
                </h2>
              </div>
            </SwiperSlide>
            {stories?.map((story, index) => (
              <SwiperSlide key={`storyid${index}`}>{story}</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Story;

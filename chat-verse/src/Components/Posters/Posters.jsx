import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import useAuth from "../../Hooks/auth/useAuth";

const posters = [
  {
    userImage: "https://i.ibb.co/5x441PC/user.png",
    userName: "Rakibul Hasan",
    posterText: "This is poster text",
  },
  {
    userImage: "https://i.ibb.co/5x441PC/user.png",
    userName: "Rakib Hasan",
    posterText: "I hate my mind",
  },
  {
    userImage: "https://i.ibb.co/5x441PC/user.png",
    userName: "Rakib Hasan",
    posterText: "I love u ",
  },
  {
    userImage: "https://i.ibb.co/5x441PC/user.png",
    userName: "Rakib Hasan",
    posterText: "I love u too",
  },
];

const Posters = () => {
  const { user } = useAuth();

  const createPoster = (
    <SwiperSlide>
      <div className="bg-gray-100 max-w-[200px] h-[180px] md:max-w-[180px] lg:max-w-[200px] xl:max-w-[220px] md:h-[260px] relative rounded-lg hover:cursor-pointer hover:bg-gray-300 transition-all flex items-center justify-center">
        <img
          className="w-7 h-7 rounded-full absolute top-3 left-3"
          src={user?.photoURL || "https://i.ibb.co/5x441PC/user.png"}
          alt="user image"
        />
        <h2 className="text-sm md:text-xl text-center">
          Create A <br /> Poster
        </h2>
      </div>
    </SwiperSlide>
  );

  return (
    <>
      <div className="bg-white p-3 md:py-4 rounded-md mb-6">
        {/* posters for mobile devices */}
        <div className="md:hidden">
          <Swiper slidesPerView={2} spaceBetween={6} className="mySwiper">
            {createPoster}
            {posters?.map((poster, index) => (
              <SwiperSlide key={`storyid${index}`}>
                <div className="bg-gray-100 max-w-[200px] h-[180px] relative rounded-lg">
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <img
                      className="w-7 h-7 rounded-full"
                      src={
                        poster.userImage || "https://i.ibb.co/5x441PC/user.png"
                      }
                      alt="user image"
                    />
                    <h3 className="text-sm text-gray-800">{poster.userName}</h3>
                  </div>
                  <div
                    className={`w-full h-full flex items-center text-center justify-center`}
                  >
                    <h2 className="w-[96%]">{poster.posterText}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* posters for tablet devices */}
        <div className="hidden md:block lg:hidden">
          <Swiper slidesPerView={4} spaceBetween={6} className="mySwiper">
            {createPoster}
            {posters?.map((poster, index) => (
              <SwiperSlide key={`storyid${index}`}>
                <div className="bg-gray-100 md:max-w-[180px] md:h-[260px] relative rounded-lg">
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <img
                      className="w-7 h-7 rounded-full"
                      src={
                        poster.userImage || "https://i.ibb.co/5x441PC/user.png"
                      }
                      alt="user image"
                    />
                    <h3 className="text-sm text-gray-800">{poster.userName}</h3>
                  </div>
                  <div
                    className={`w-full h-full flex items-center text-center justify-center`}
                  >
                    <h2 className="w-[96%]">{poster.posterText}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* posters for large devices */}
        <div className="hidden lg:block">
          <Swiper slidesPerView={4} spaceBetween={6} className="mySwiper">
            {createPoster}
            {posters?.map((poster, index) => (
              <SwiperSlide key={`storyid${index}`}>
                <div className="bg-gray-100 md:max-w-[200px] xl:max-w-[220px] md:h-[260px] relative rounded-lg">
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <img
                      className="w-7 h-7 rounded-full"
                      src={
                        poster.userImage || "https://i.ibb.co/5x441PC/user.png"
                      }
                      alt="user image"
                    />
                    <h3 className="text-sm text-gray-800">{poster.userName}</h3>
                  </div>
                  <div
                    className={`w-full h-full flex items-center text-center justify-center`}
                  >
                    <h2 className="w-[96%]">{poster.posterText}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Posters;

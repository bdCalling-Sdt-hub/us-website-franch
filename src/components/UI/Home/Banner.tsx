import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const contentStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <div className="mx-6 lg:mx-28 h-[650px] lg:h-[550px] px-8 my-10 bg-gray-800 rounded-lg">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          style={contentStyle}
        >
          {[...Array(4)].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="order-2 lg:order-1">
                  <h1 className="text-5xl font-medium mb-2 text-gray-400">
                    Television & Internet
                  </h1>
                  <h2 className="text-2xl font-bold text-gray-400">
                    The best content TV can give you
                  </h2>

                  <p className="text-md font-medium mt-5">From only</p>
                  <h1 className="font-bold text-light mb-4">
                    <span className="text-6xl  text-[#1775fa]">$69</span>
                    .95/month
                  </h1>
                  <button className="btn uppercase btn-wide btn-black mt-5 ">
                    Plus d&apos;Information
                  </button>
                </div>
                <div className="order-1 lg:order-2">
                  <Image
                    src="https://www.bravotelecom.com/wp-content/uploads/2023/01/tv-bravootelecom.png"
                    alt="image"
                    width={600}
                    height={500}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;

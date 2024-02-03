import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const contentStyle = {
    width: "100%",
    height: "100%",
  };

  const bannerContent = [
    {
      title: "Télévision",
      description: "Le meilleur contenu que la télévision puisse vous offrir",
      price: "69",
      image: "/images/bannerTv.png",
      link: "television",
    },
    {
      title: "Internet",
      description:
        "Service d'Internet de haute vitesse avec usage complètement illimité",
      price: "59",
      image: "/images/bannerLap.png",
      link: "internet",
    },
    {
      title: "Téléphone",
      description: "Appels illimité Partout au Canada",
      price: "6",
      image: "/images/bannerMobile1.png",
      link: "phone",
    },
  ];

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
          {bannerContent.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="order-2 lg:order-1">
                  <h1 className="text-5xl font-medium mb-2 text-gray-400">
                    {item.title}
                  </h1>
                  <h2 className="text-2xl font-bold text-gray-400">
                    {item.description}
                  </h2>

                  <p className="text-md font-medium mt-5">From only</p>
                  <h1 className="font-bold text-light mb-4">
                    <span className="text-6xl  text-[#1775fa]">
                      ${item.price}
                    </span>
                    .95/month
                  </h1>
                  <Link href={`/${item.link}`}>
                    <button className="btn uppercase btn-wide btn-black mt-5 ">
                      Plus d&apos;Information
                    </button>
                  </Link>
                </div>
                <div className="order-1 lg:order-2 pt-10">
                  <img src={item.image} alt="image" className="w-full" />
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

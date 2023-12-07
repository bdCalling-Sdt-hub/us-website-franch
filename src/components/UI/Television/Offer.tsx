import HeaderText from "@/components/util/HeaderText";
import Image from "next/image";
import Link from "next/link";
import offerList from "../.../../../../../public/db/tvOffer.json";
import OfferCard from "./OfferCard";

const Offer = () => {
  const { tvOfferList } = offerList;
  const sportsImg = [
    "/images/sport1.png",
    "/images/sport2.png",
    "/images/sport3.png",
    "/images/sport4.png",
    "/images/sport5.png",
    "/images/sport6.png",
    "/images/sport7.png",
    "/images/sport8.png",
  ];
  return (
    <div className="mb-14">
      <HeaderText>
        We also offer very fresh <br />{" "}
        <span className="text-[#1775fa]">themes</span>{" "}
      </HeaderText>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {tvOfferList.map((item, index) => (
          <OfferCard key={index} data={item} />
        ))}
      </div>
      <div className="card bg-gray-800 text-gray-400  mt-5">
        <div className="card-body grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-medium">
              For the ultimate sports fan
            </h1>
            <div className="flex items-center flex-wrap  gap-3 my-5">
              {sportsImg.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#e9e9e9] w-12 h-12 flex justify-center items-center p-1 rounded-md"
                >
                  <Image src={item} width={60} height={60} alt="tv image" />
                </div>
              ))}
            </div>
          </div>
          <div className="place-self-end">
            <h2 className="text-center">From only</h2>
            <h1 className="text-3xl font-medium my-3 text-center">
              35$/MONTH{" "}
            </h1>
            <Link href="/contact">
              <button className="btn btn-black btn-wide">COMMANDER</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;

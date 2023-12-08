import { Check, Tv } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IData {
  title: string;
  facilities: string[];
  images: string[];
  price: number | string;
}

const TvPackageCard: React.FC<{ data: IData }> = ({ data }) => {
  const { title, facilities, images, price } = data;
  return (
    <div className="card bg-gray-800 text-gray-400">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="card-body text-gray lg:border-r border-gray-500">
          <div className="flex items-center gap-4">
            <Tv size={140} absoluteStrokeWidth />
            <h2 className="card-title text-2xl ">{title}</h2>
          </div>
        </div>
        <div className="card-body  text-gray lg:border-r border-gray-500">
          {facilities.map((item, index) => (
            <div className="flex items-center gap-2" key={index}>
              <Check size={20} strokeWidth={1} absoluteStrokeWidth />
              <p>{item}</p>
            </div>
          ))}
          <div className="flex items-center gap-3 mt-4">
            {images.map((item, index) => (
              <div
                key={index}
                className="bg-[#e9e9e9] w-16 h-8 flex justify-center items-center p-2 rounded-md"
              >
                <Image src={item} width={50} height={50} alt="tv image" />
              </div>
            ))}
          </div>
        </div>
        <div className="card-body  text-gray">
          <h2 className="card-title text-xl mb-2">From only</h2>
          <h1 className="text-3xl font-medium">${price}/MONTH</h1>
          <Link href="/contact">
            <button className="btn btn-black btn-wide mt-4">COMMANDER</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TvPackageCard;

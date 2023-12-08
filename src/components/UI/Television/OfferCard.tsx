import Image from "next/image";
import Link from "next/link";

interface IData {
  title: string;
  images: string[];
  price: number | string;
}

const OfferCard: React.FC<{ data: IData }> = ({ data }) => {
  const { title, images, price } = data;
  return (
    <div className="card bg-gray-800 text-gray-400 text-center">
      <div className="card-body">
        <h1 className="text-3xl font-medium text-center">{title}</h1>
        <div className="flex items-center mx-auto gap-3 my-5 flex-wrap">
          {images.map((item, index) => (
            <div
              key={index}
              className="bg-[#e9e9e9] w-12 h-12 flex justify-center items-center p-1 rounded-md"
            >
              <Image src={item} width={50} height={50} alt="tv image" />
            </div>
          ))}
        </div>
        <h2 className="mx-auto">From only</h2>
        <h1 className="text-3xl font-medium my-3">${price}/MONTH</h1>
        <Link href="/contact">
          <button className="btn btn-black ">COMMANDER</button>
        </Link>
      </div>
    </div>
  );
};

export default OfferCard;

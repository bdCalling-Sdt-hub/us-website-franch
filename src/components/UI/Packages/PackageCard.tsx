import { Check } from "lucide-react";
import Link from "next/link";

interface IPackage {
  title: string;
  facilities: string[];
  price: string;
  category: string;
}

const PackageCard: React.FC<{ packageItem: IPackage }> = ({ packageItem }) => {
  const { title, facilities, price } = packageItem;
  return (
    <div className="card bg-[#2a323c] shadow-xl p-2 h-[500px] lg:h-[450px]">
      <div className="card-body p-1 relative">
        <h2 className=" text-lg text-center w-full bg-[#1775fa] p-3 rounded-t-lg text-white">
          {title}!
        </h2>

        {facilities.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 shadow rounded px-2 py-2"
          >
            <div className="w-4 h-4 bg-green-500 flex items-center justify-center rounded font-bold">
              <Check color="#fff" />
            </div>

            <p className="text-white">{item}</p>
          </div>
        ))}

        <div className="absolute left-0 bottom-1 w-full">
          <h1 className="text-2xl font-bold text-center mb-4 text-gray-400">
            {price}
          </h1>
          <Link href="/contact">
            <h2 className=" bg-[#191e24] text-white font-bold p-3 rounded-b-lg text-center">
              COMMANDER
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;

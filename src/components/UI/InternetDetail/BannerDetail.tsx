import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

interface IData {
  id: number;
  title: string;
  detailTitle: string;
  description: string;
  mbps: number;
  price: number;
  orPrice: number;
  facilities: string[];
  recommand: string;
  tag: string;
}

const BannerDetail: React.FC<{ data: IData | undefined }> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-10 bg-[#2a323c] rounded-md p-10">
      <div className="">
        <img
          src="/images/contact.png"
          alt="support"
          className="mx-auto rounded-md object-cover"
        />
      </div>
      <div className=" text-gray-400">
        <h1 className="text-4xl font-bold text-white">{data?.detailTitle}</h1>
        <p className="text-white my-5">{data?.description}</p>
        {data?.facilities.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <Check color="#1775fa" size={15} />
            <p className="text-white">{item}</p>
          </div>
        ))}
        <p className="mt-4">Start now</p>
        <p className="font-bold">From</p>
        <div className="flex gap-5 items-center my-8">
          <h1 className="font-bold text-light">
            <span className="text-6xl">{data?.price}</span>.95/month
          </h1>
          <h1 className="font-bold text-light flex items-center gap-2">
            <h1>OR</h1>
            <div>
              <span className="text-6xl">{data?.orPrice}</span>
              .95/month
            </div>
          </h1>
        </div>
        <p>
          <Link href="/contact">
            <button className="btn btn-black btn-wide text-white">
              COMMENDER
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BannerDetail;

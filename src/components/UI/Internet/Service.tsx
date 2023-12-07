import HeaderText from "@/components/util/HeaderText";
import { Check } from "lucide-react";
import Link from "next/link";
import serviceList from "../../../../public/db/internet.json";

const Service = () => {
  const { internetServices } = serviceList;

  return (
    <div className="mx-3 lg:mx-28">
      <HeaderText>
        UNLIMITED HIGH SPEED INTERNET <br /> PACKAGES
      </HeaderText>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center mb-14">
        <div>
          <p className="text-lg">
            Our high-speed unlimited Internet plans include cable connections
            with speed margins ensuring you a fast connection at a good price.
          </p>
        </div>
        <div className="lg:mx-auto">
          <div className="flex items-center gap-2">
            <Check color="#1775fa" size={15} />
            <p className="text-white">Unlimited use</p>
          </div>
          <div className="flex items-center gap-2">
            <Check color="#1775fa" size={15} />
            <p className="text-white">High speed</p>
          </div>
          <div className="flex items-center gap-2">
            <Check color="#1775fa" size={15} />
            <p className="text-white">Router included</p>
          </div>
        </div>
        <div className="lg:mx-auto">
          <div className="flex items-center gap-2">
            <Check color="#1775fa" size={15} />
            <p className="text-white">Modem included</p>
          </div>
          <div className="flex items-center gap-2">
            <Check color="#1775fa" size={15} />
            <p className="text-white">Fixed price</p>
          </div>
          <div className="flex items-center gap-2">
            <Check color="#1775fa" size={15} />
            <p className="text-white">Without contract</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-14">
        {internetServices.map((item, index) => (
          <div
            className="card bg-[#2a323c] text-neutral-content z-10"
            key={index}
          >
            <div className="card-body  text-gray-400">
              <div className="flex items-center gap-3">
                <h2 className="card-title text-2xl">{item.title}</h2>
                {item.tag && (
                  <div className="badge badge-primary text-white">
                    {item.tag}
                  </div>
                )}
              </div>

              <h2 className="text-[#1775fa] text-2xl font-medium mb-5">
                {item.price}mbits
              </h2>

              <h1 className="font-bold text-light mb-4">
                <span className="text-4xl  text-[#767d86]">${item.price}</span>
                .95/month
              </h1>
              <Link href={`/internet/${item.id}`}>
                <button className="btn btn-wide btn-black uppercase hover:bg-gray-500 duration my-3">
                  Plus d&apos;Information
                </button>
              </Link>
              <p className="my-2">{item.recommand}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

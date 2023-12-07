import { ArrowDownUp, PhoneCall, Tv } from "lucide-react";
import Link from "next/link";

const Service = () => {
  const items = [
    {
      title: "HD TV",
      description:
        "High definition television service with more than 150 channels.",
      icon: <Tv size={40} />,
      btnContent: "View channel list",
    },
    {
      title: "UNLIMITED INTERNET",
      description:
        "High speed Internet service with completely unlimited usage",
      icon: <ArrowDownUp size={40} />,
      btnContent: "Choose speed",
    },
    {
      title: "HOME PHONE",
      description:
        "Residential telephony covering the vast region of Canada, United States.",
      icon: <PhoneCall size={40} />,
      btnContent: "Choose Package",
    },
  ];

  return (
    <div className=" mx-6 lg:mx-48 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-14">
        <div>
          <h1 className="text-2xl lg:text-5xl font-bold">
            Services that are so
            <br /> refreshing
          </h1>
          <div className="border-b-4 w-52 my-5 border-[#1775fa]" />
        </div>
        <div className="space-y-5">
          <p className="text-xl">
            Are you hungry for reliable, fast and cost-effective TV, Internet
            and phone service? Place your order now!
          </p>
          <Link href="/contact">
            <button className="btn btn-wide btn-black uppercase mt-5 hover:bg-gray-500 duration">
              Commander
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            className="card bg-[#2a323c] text-neutral-content z-10"
            key={index}
          >
            <div className="card-body items-center text-center text-gray-400">
              <div className="w-16 h-16 rounded-lg flex justify-center items-center bg-[#1d232a]  mb-4">
                {item.icon}
              </div>
              <h2 className="card-title">{item.title}</h2>
              <p className="my-2">{item.description}</p>
              <button className="btn btn-wide btn-black uppercase hover:bg-gray-500 duration">
                {item.btnContent}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

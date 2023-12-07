import Link from "next/link";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  items-center my-10 bg-[#2a323c] rounded-md p-10 lg:h-[460px]">
      <div className="">
        <img
          src="/images/packages.png"
          alt="support"
          className="mx-auto rounded-md object-cover"
        />
      </div>
      <div className="space-y-5 text-center text-gray-400">
        <div className="border-2 border-[#1775fa] w-56 mx-auto" />
        <h1 className="text-4xl font-bold text-white">PACKAGES</h1>
        <h1 className="text-4xl font-bold text-white">REFRESHMENTS</h1>
        <p>
          <Link href="/contact">
            <button className="btn btn-black btn-wide text-white ">
              COMMENDER
            </button>
          </Link>
        </p>
        <div className="border-2 border-[#1775fa] w-56 mx-auto" />
      </div>
    </div>
  );
};

export default Banner;

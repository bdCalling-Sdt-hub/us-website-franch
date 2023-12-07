import Link from "next/link";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-10 bg-[#2a323c] gap-5 rounded-md p-10">
      <div className="">
        <img
          src="/images/tv.png"
          alt="support"
          className="mx-auto rounded-md object-cover"
        />
      </div>
      <div className="text-gray-400">
        <div className="border-2 border-[#1775fa] w-56 mb-4" />
        <h1 className="text-4xl font-bold text-light mb-2">TELEVISION</h1>
        <p>
          With Vodalink, have access to content from the most popular
          broadcasters in Canada, Vodalink offers packages made for families,
          sports fans, movie enthusiasts and much more.
        </p>
        <p className="mt-4">Start now</p>
        <p className="font-bold">From</p>
        <h1 className="font-bold text-light my-4">
          <span className="text-6xl">$69</span>.95/month
        </h1>
        <p>
          <Link href="/contact">
            <button className="btn btn-black btn-wide text-white ">
              COMMENDER
            </button>
          </Link>
        </p>

        <div className="border-2 border-[#1775fa] w-56 mt-4" />
      </div>
    </div>
  );
};

export default Banner;

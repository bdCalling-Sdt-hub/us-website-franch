import Link from "next/link";

const WhoWeAre = () => {
  return (
    <div className="mx-3 lg:mx-44 mt-32">
      <div className="lg:flex items-center gap-5">
        <div className="space-y-8 lg:w-[50%] text-gray-400">
          <h1 className="text-4xl font-bold">Who are we ?</h1>
          <p className="text-xl">
            Founded in 2004, Vodalink is a Montreal-based company that offers
            telecommunications services around the world.
          </p>
          <p className="text-xl">
            With the motivation to always simplify your life, Vodalink offers
            unlimited Internet, high definition television and residential
            telephony services. Our services reach cities such as Montreal,
            Quebec City, Toronto, Ottawa, Longueuil, Laval, Sherbrooke and many
            others across Canada and the world.
          </p>
          <Link href="/contact">
            <button className="btn uppercase btn-wide btn-black mt-5 hover:bg-gray-500 duration">
              CONTACT
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-[50%] hidden lg:block">
          <img src="/images/about.png" alt="about us" className=" mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

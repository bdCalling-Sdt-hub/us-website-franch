const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-10 bg-[#2a323c] rounded-md p-10">
      <div className="">
        <img
          src="/images/contact.png"
          alt="support"
          className="mx-auto rounded-md object-cover"
        />
      </div>
      <div className="space-y-5 text-center text-gray-400">
        <div className="border-2 border-[#1775fa] w-56 mx-auto" />
        <h1 className="text-4xl font-bold text-white">
          NEED TO ORDER? MORE INFORMATION HELP?
        </h1>
        <h1 className="text-4xl font-bold text-white">
          DON NOT HESITATE TO WRITE TO US
        </h1>

        <div className="border-2 border-[#1775fa] w-56 mx-auto" />
      </div>
    </div>
  );
};

export default Banner;

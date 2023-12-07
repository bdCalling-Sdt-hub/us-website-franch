import { Check } from "lucide-react";
import Image from "next/image";

const Specification = () => {
  const items1 = [
    { title: "Encodification H.265" },
    { title: "64GB of memory" },
    { title: "2GB RAM" },
    { title: "16GB the ROM" },
    { title: "S912 Octa-Core" },
    { title: "Cortex-A53" },
    { title: "Android 10.0" },
    { title: "Keyboard compatible" },
  ];
  const items2 = [
    { title: "Pair with television" },
    { title: "Computer mouse activation" },
    { title: "Shortcut pour application" },
    { title: "Back button" },
    { title: "Button to move forward and forward" },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 items-center tab-content bg-base-100 border-base-300 rounded-box p-6 space-y-5 lg:space-y-0">
      <div>
        <Image
          src="/images/tv-receiver1.png"
          width={300}
          height={400}
          alt="about us"
          className=" block lg:mx-auto"
        />
      </div>
      <div className="lg:mx-auto">
        {items1.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <Check color="#1775fa" size={15} />
            <p className="text-white">{item.title}</p>
          </div>
        ))}
      </div>
      <div>
        <Image
          src="/images/tv-receiver2.png"
          width={100}
          height={300}
          alt="about us"
          className=" block lg:mx-auto"
        />
      </div>
      <div className="mx-auto">
        {items2.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <Check color="#1775fa" size={15} />
            <p className="text-white">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specification;

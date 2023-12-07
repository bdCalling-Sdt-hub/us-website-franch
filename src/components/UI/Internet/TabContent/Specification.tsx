import { Check } from "lucide-react";

const Specification = () => {
  const items = [
    "Watch streaming videos",
    "Paly video games online",
    "Listen to or download a ton of songs",
    "Work and study without interruptions",
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center tab-content bg-base-100 border-base-300 rounded-box p-6 py-12">
      <div>
        <h1 className="text-2xl font-medium text-white mb-4">CABLE INTERNET</h1>
        <p>
          We offer Internet service through coaxial cable lines. An FTTN
          Internet connection consists of connecting your home (coaxial cable)
          to the ultra-fast fiber optic network.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-medium text-white mb-4">WI-FI AT HOME</h1>
        <p>
          We offer the necessary equipment so that you can connect your wireless
          devices throughout your home with Wi-Fi technology.
        </p>
      </div>
      <div className="mx-auto">
        <h1 className="text-2xl font-medium text-white mb-4">
          OUR INTERNET PACKAGES ALLOWS YOU TO DO THE NEXT
        </h1>
        {items.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <Check color="#1775fa" size={15} />
            <p className="">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specification;

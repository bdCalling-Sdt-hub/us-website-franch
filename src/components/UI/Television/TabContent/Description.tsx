import { Check } from "lucide-react";
import Image from "next/image";

const Description = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center mb-14 tab-content bg-base-100 border-base-300 rounded-box p-6">
      <div>
        <Image
          src="/images/about.png"
          width={300}
          height={400}
          alt="about us"
          className=" block mx-auto"
        />
      </div>
      <div className="mx-auto">
        <div className="flex items-center gap-2">
          <Check color="#1775fa" size={15} />
          <p className="text-white">Propulsée par la technologie Android</p>
        </div>
        <div className="flex items-center gap-2">
          <Check color="#1775fa" size={15} />
          <p className="text-white">Plus de 150 chaînes disponibles</p>
        </div>
        <div className="flex items-center gap-2">
          <Check color="#1775fa" size={15} />
          <p className="text-white">Stabilité et qualité HD</p>
        </div>
        <div className="flex items-center gap-2">
          <Check color="#1775fa" size={15} />
          <p className="text-white">Disponible dans la grande région de Montréal</p>
        </div>
      </div>
      <div className=" text-center">
        <h1 className="text-5xl font-medium mb-2 text-gray-400">
        Internet et télévision
        </h1>

        <p className="text-md font-medium my-4">à partir de seulement</p>
        <h1 className="text-6xl font-bold text-light mb-4">$69,95</h1>
        <button className="btn uppercase btn-wide btn-black mt-5 ">
          Commander
        </button>
      </div>
    </div>
  );
};

export default Description;

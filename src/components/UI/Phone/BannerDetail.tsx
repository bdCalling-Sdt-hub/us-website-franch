import { Check } from "lucide-react";
import Link from "next/link";

const BannerDetail = () => {
  const facilities = [
    "Appels illimité sans frais supplémentaires",
    "Options tels que afficheur, boîte vocale, conférence à 3 et beaucoup plus disponibles",
    "Apportez votre propre numéro de téléphone",
    "Application mobile disponible",
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-10 bg-[#2a323c] rounded-md p-10">
      <div className="">
        <img
          src="/images/phonepage.png"
          alt="support"
          className="mx-auto rounded-md"
        />
      </div>
      <div className=" text-gray-400">
        <h1 className="text-4xl font-bold text-white">
          Appels illimité Partout au Canada
        </h1>
        <p className="text-white my-5">
          Ce forfait inclut les appels illimité partout au Canada.{" "}
        </p>
        {facilities.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <Check color="#1775fa" size={15} />
            <p className="text-white">{item}</p>
          </div>
        ))}
        <p className="mt-4">Start now</p>
        <p className="font-bold">à partir de</p>
        <div className="flex gap-5 items-center mt-8">
          <h1 className="font-bold text-light">
            <span className="text-6xl">$6</span>.50/mois
          </h1>
          <h1 className="font-bold text-light flex items-center gap-2">
            <h1>ou</h1>
            <div>
              <span className="text-6xl">$9</span>
              .95/mois
            </div>
          </h1>
        </div>
        <p className="my-5">(en jumellant avec nos services Internet)</p>
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

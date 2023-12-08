/* eslint-disable react/no-unescaped-entities */
import HeaderText from "@/components/util/HeaderText";
import { Check } from "lucide-react";
import Link from "next/link";
import serviceList from "../../../../public/db/internet.json";

const Service = () => {
  const { internetServices } = serviceList;

  return (
    <div className="mx-3 lg:mx-28">
      <HeaderText>
      FORFAITS D'INTERNET ILLIMITÉ HAUTE <br />  VITESSE 
      </HeaderText>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center mb-14">
        <div>
          <p className="text-lg">
          Nos forfaits d’Internet illimité haute vitesse incluent des connexions de câble avec des marges de vitesse vous assurant une connexion rapide et à bon prix.
          </p>
        </div>
        <div className="lg:mx-auto">
          <div className="flex items-center gap-2">
            <Check color="#1775fa" size={15} />
            <p className="text-white">Usage illimité</p>
          </div>
          <div className="flex items-center gap-2">
            <Check color="#1775fa" size={15} />
            <p className="text-white">Haute vitesse</p>
          </div>
          <div className="flex items-center gap-2">
            <Check color="#1775fa" size={15} />
            <p className="text-white">Routeur inclus</p>
          </div>
        </div>
        <div className="lg:mx-auto">
          <div className="flex items-center gap-2">
            <Check color="#1775fa" size={15} />
            <p className="text-white">Modem inclus</p>
          </div>
          <div className="flex items-center gap-2">
            <Check color="#1775fa" size={15} />
            <p className="text-white">Prix fixe</p>
          </div>
          <div className="flex items-center gap-2">
            <Check color="#1775fa" size={15} />
            <p className="text-white">Sans contrat</p>
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

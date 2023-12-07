/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <div className="mx-3 lg:mx-44 mt-32">
      <div className="lg:flex items-center gap-5">
        <div className="space-y-8 lg:w-[50%] text-gray-400">
          <h1 className="text-4xl font-bold">Qui sommes nous ?</h1>
          <p className="text-xl">
          Fondée en 2004, Vodalink est une entreprise montréalaise qui offre
            services de télécommunications dans le monde entier.
          </p>
          <p className="text-xl">
          Avec la motivation de toujours vous simplifier la vie, Vodalink vous propose
            Internet illimité, télévision haute définition et résidentiel
            services de téléphonie. Nos services rejoignent des villes telles que Montréal,
            Québec, Toronto, Ottawa, Longueuil, Laval, Sherbrooke et plusieurs
            d'autres partout au Canada et dans le monde.
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

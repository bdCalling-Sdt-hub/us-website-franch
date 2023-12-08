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
        <h1 className="text-4xl font-bold text-light mb-2">TÉLÉVISION</h1>
        <p>
        Avec Vodalink, ayez accès à du contenu provenant des diffuseurs les plus populaires au Canada, Vodalink offre des forfaits fait pour les familles, les fans des sports, passionnés des films et beaucoup plus.
        </p>
        <p className="mt-4">Commencez dès maintenant</p>
        <p className="font-bold">Commencez dès maintenan</p>
        <h1 className="font-bold text-light my-4">
          <span className="text-6xl">$69</span>0,95/mois
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

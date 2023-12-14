import RootLayout from "@/components/Layouts/RootLayout";
import BannerDetail from "@/components/UI/Phone/BannerDetail";
import BreadCrumb from "@/components/util/BreadCrumb";
import { ReactElement } from "react";

const Phone = () => {
  const items = [
    {
      title: "Adaptateur téléphonique GrandStream HT502",
      description:
        "L'adaptateur téléphonique Grandstream sert à faire la connection entre votre téléphone de domicile à votre routeur. Cet adapteur contient 1 port pour le téléphone.",
      price: "$55",
    },
    {
      title: "Adapteur téléphonique GrandStream HT701",
      description:
        "L'adaptateur téléphonique Grandstream sert à faire la connection entre votre téléphone de domicile à votre routeur. Cet adapteur contient 2 port pour le téléphone.",
      price: "$65",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="mx-3 lg:mx-28">
        <BreadCrumb title="Telephone" />
        <BannerDetail />
        <div className="card bg-gray-800 text-gray-400  mt-5 my-14">
          {items.map((item, index) => (
            <div
              key={index}
              className="card-body grid grid-cols-1 lg:grid-cols-2 border border-[#818181] rounded m-2"
            >
              <div>
                <h1 className="text-3xl font-medium">{item.title}</h1>
                <p className="text-lg">{item.description}</p>
              </div>
              <div className="place-self-end">
                <h1 className="text-3xl font-medium my-3 text-center">
                  {item.price}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="card bg-gray-800 text-gray-400  mt-5 my-14 p-5">
          <div>
            <h1 className="text-3xl font-medium">Détails de l&#39;offre</h1>
            <p className="text-lg">
              *La performance du service téléphonique peut varier dépendamment
              du niveau d’activité du routeur, la configuration de vos
              dispositifs, le trafic d’Internet ou des événements hasardeux.
              L’usage est sujet à la politique d’utilisation équitable de
              Vodalink. Les taxes ne sont pas inclues dans les prix présentés.
              Termes et Conditions s’appliquent.
              <br />
              <br />
              ** Tout rabais ou promotion peut varier en fonction de
              l’emplacement géographique où les services sont commandés. Le
              rabais peut être retenu si le client déménage hors de la zone
              géographique où les rabais s’applique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;

Phone.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

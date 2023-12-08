/* eslint-disable react/no-unescaped-entities */
const OneTimeFees = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center tab-content bg-base-100 border-base-300 rounded-box p-6 py-16">
      <div>
        <h1 className="text-2xl font-medium text-white mb-4">FRAIS DE DÉPART</h1>
        <p>
        Un frais de départ variant de $45 à $100+taxes est requis pour toute nouvelle installation/ activation (y compris changements adresse).
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-medium text-white mb-4">
        CHANGEMENT DE FORFAIT OU VITESSE
        </h1>
        <p>
        Le côut pour modifier la vitesse d'Internet ou pour changer d’un forfait à l’autre est de 35$+taxes.
        </p>
      </div>
      <div className="mx-auto">
        <h1 className="text-2xl font-medium text-white mb-4">FRAIS D’ENVOI</h1>
        <p>
        Les frais d’envoi coûtent entre 0 et 15$+taxes selon votre emplacement, nos promotions et la quantité d'équipements envoyés.
        </p>
      </div>
    </div>
  );
};

export default OneTimeFees;

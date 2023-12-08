import { Check } from "lucide-react";

const Specification = () => {
  const items = [
    "Regarder des vidéos en diffusion (streaming)",
    "Jouer à des jeux videos en ligne",
    "Écouter ou télécharger une tonne de chansons",
    "Travailler et étudier sans interruptions.",
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center tab-content bg-base-100 border-base-300 rounded-box p-6 py-12">
      <div>
        <h1 className="text-2xl font-medium text-white mb-4">INTERNET PAR CÂBLE</h1>
        <p>
        Nous offrons le service d’Internet à travers des lignes de câble coaxial. Une connexion d’Internet FTTN consiste de relier votre domicile (câble coaxial) au réseau de fibre optique ultra rapide.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-medium text-white mb-4">WI-FI À LA MAISON
</h1>
        <p>
        Nous offrons les équipements nécessaires pour que vous puissiez connecter vos appareils sans-fils partout dans votre maison avec la technologie Wi-Fi.
        </p>
      </div>
      <div className="mx-auto">
        <h1 className="text-2xl font-medium text-white mb-4">
        NOS FORFAITS D’INTERNET VOUS PERMET DE FAIRE LE SUIVANT
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

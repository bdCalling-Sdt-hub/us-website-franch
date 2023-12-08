import FaqCard from "../../../util/FaqCard";

const FAQ = () => {
  const faqQuestions = [
    {
      question: "Est-ce que je peux m'abonner seulement à la télévision ?",
      answer:
        "Le service de télévision est seulement disponible sous notre réseau. Un abonnement d'Internet Vodalink est réquis afin d'avoir le service de télévision.",
    },
    {
      question: "Est-ce que les équipements de télévision sont gratuits avec l'abonnement?",
      answer:
        "Nous offrons la location gratuite de 1 récepteur pour les clients qualifiants. Si vous ne qualifiez pas, il y a l'option d'acheter les récepteurs et/ou louer les récepteurs.",
    },
    {
      question: "Puis-je utiliser plusieurs écrans de télévision ?",
      answer: "Vous pouvez vous abonner au service de télévision avec un flux maximum de 4 télévisions. Nous recommandons l'abonnement d'Internet de 30mbits pour 2 télévision et moins, et 60mbits pour plus de 2 télévisions. Chaque flux de télévision additionnel porte un frais additionnel.",
    },
    {
      question: "Est-ce que c'est légal?",
      answer:
        "Oui. Nous sommes un fournisseur expempté de license de distribution par le CRTC. Nous n'offrons pas de service de télévision pirate.",
    },
  ];
  return (
    <div>
      {faqQuestions.map((ques, index) => (
        <FaqCard key={index} ques={ques} />
      ))}
    </div>
  );
};

export default FAQ;

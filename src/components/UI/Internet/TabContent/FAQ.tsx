import FaqCard from "../../../util/FaqCard";

const FAQ = () => {
  const faqQuestions = [
    {
      question: "Avec quel fournisseur faites vous affaire?",
      answer:
        "Nous sommes un fournisseur de services d'Internet indépendant qui fait affaire avec le réseau coaxial de Vidéotron dans la grande région de Montréal.",
    },
    {
      question: "Est-ce que vous avez des techniciens qui visitent ?",
      answer:
        "Lors de l'activation du service Internet, si une auto-installation est possible car vous avez déjà un câble coaxial installé chez vous, aucun technicien de Vidéotron sera nécessaire pour vous activer le service. Si vous n'avez pas de câble coaxial installé chez vous, un technicien de Vidéotron sera nécessaire pour vous installer un câble coaxial et activer les services. Ceci est la seule instance dont une visite physique peut se produire à votre domicile.",
    },
    {
      question: "Est-ce que j'ai besoin d'achèter des équipements?",
      answer: "La majorité de nos promotions incluent la location gratuite d'un modem et d'un routeur. Si vous avez des exigences spécifiques, nous sommes en possesions différentes gammes d'équipements pour répondre à vos besoins. ",
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

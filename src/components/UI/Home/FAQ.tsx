import FaqCard from "@/components/util/FaqCard";
import HeaderText from "@/components/util/HeaderText";

const FAQ = () => {
  const faqQuestions = [
    {
      question: "Où puis-je acheter vos services ?",
      answer:
        "Vous pouvez acheter nos services directement sur notre site Web ou en contactant notre service client. Nous avons également des magasins physiques situés à Montréal et à Laval où vous pouvez parler à l'un de nos représentants en personne.",
    },
    {
      question: "Pouvez-vous fournir n’importe quel type d’appareil à utiliser avec votre service ?",
      answer:
        "Oui, Bravo Telecom fournit un modem et un équipement WiFi sans frais supplémentaires à nos clients pour garantir une expérience Internet fluide.",
    },
    {
      question: "Y a-t-il un contrat et quels sont les frais d'annulation ?",
      answer:
        "Nous croyons en la fourniture de services flexibles, abordables et transparents à nos clients. Nous proposons des services sans aucun contrat ni engagement, vous pouvez donc annuler ou modifier votre forfait à tout moment sans aucun frais d'annulation.",
    },
    {
      question:
        "Existe-t-il une garantie de remboursement si je ne suis pas satisfait du service ?",
      answer:
        "Oui, Bravo Telecom offre une garantie de remboursement de 15 jours pour tous nos services. Si vous n'êtes pas satisfait du service dans les 15 jours suivant l'installation, vous pouvez annuler votre service et recevoir un remboursement complet de tous les frais payés.",
    },
    {
      question: "Proposez-vous un essai gratuit ?",
      answer:
        "Oui, Bravo Telecom propose un essai gratuit pour notre service TV. Les clients peuvent profiter d'un mois de service TV gratuit pour essayer nos offres et voir si elles répondent à leurs besoins.",
    },
  ];
  return (
    <div className="mx-3 lg:mx-28 mb-16">
      <HeaderText>FAQ</HeaderText>
      {faqQuestions.map((ques, index) => (
        <FaqCard key={index} ques={ques} />
      ))}
    </div>
  );
};

export default FAQ;

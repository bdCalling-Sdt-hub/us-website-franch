import FaqCard from "../../../util/FaqCard";

const FAQ = () => {
  const faqQuestions = [
    {
      question: "Can I subscribe only to television?",
      answer:
        "The television service is only available under our network. A Vodalink Internet subscription is required in order to have the television service.",
    },
    {
      question: "Are the television equipment free with the subscription?",
      answer:
        "Yes. We are a provider exempt from distribution license by the CRTC. We do not offer pirate television service. ",
    },
    {
      question: "Can I use multiple television screens?",
      answer: "Yes.",
    },
    {
      question: "Is it legal?",
      answer:
        "You can subscribe to the television service with a maximum stream of 4 televisions. We recommend the Internet subscription of 30mbits for 2 televisions and less, and 60mbits for more than 2 televisions. Each additional television stream carries an additional fee.We offer free rental of 1 receiver for qualifying customers. If you do not qualify, there is the option to purchase the receivers and/or rent the receivers",
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

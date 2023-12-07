import FaqCard from "../../../util/FaqCard";

const FAQ = () => {
  const faqQuestions = [
    {
      question: "Which provider are you dealing with?",
      answer:
        "We are an independent Internet service provider who does business with the Videotron coaxial network in the greater Montreal area.The majority of our promotions include free rental of a modem and router. If you have specific requirements, we have different ranges of equipment to meet your needs",
    },
    {
      question: "Do I need to purchase equipment?",
      answer:
        "When activating the Internet service, if a self-installation is possible because you already have a coaxial cable installed in your home, no Videotron technician will be necessary to activate the service. If you do not have a coaxial cable installed in your home, a Videotron technician will be needed to install a coaxial cable and activate the services. This is the only instance where a physical visit may occur to your home.",
    },
    {
      question: "Do you have technicians visiting?",
      answer: "",
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

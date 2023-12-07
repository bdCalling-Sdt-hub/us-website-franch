import FaqCard from "@/components/util/FaqCard";
import HeaderText from "@/components/util/HeaderText";

const FAQ = () => {
  const faqQuestions = [
    {
      question: "Where can I buy your services?",
      answer:
        "You can purchase our services directly on our website or by contacting our customer service team. We also have physical stores located in Montreal and Laval where you can speak to one of our representatives in person.",
    },
    {
      question: "Can you provide any type of device for use with you service?",
      answer:
        "Yes, Bravo Telecom provides a modem and WiFi equipment at no extra cost to our customers to ensure a seamless internet experience.",
    },
    {
      question: "Is there a contract and what are the cancellation fees?",
      answer:
        "We believe in providing flexible, affordable, and transparent services to our customers. We offer services without any contract or commitment, so you can cancel or modify your plan at any time without any cancellation fees.",
    },
    {
      question:
        "Is there a money back guarantee if I'm not satisfied with the service?",
      answer:
        "Yes, Bravo Telecom offers a 15-day money-back guarantee for all of our services. If you are not satisfied with the service within 15 days of installation, you can cancel your service and receive a full refund of any fees or charges paid.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, Bravo Telecom offers a free trial for our TV service. Customers can enjoy one month of free TV service to try out our offerings and see if it meets their needs.",
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

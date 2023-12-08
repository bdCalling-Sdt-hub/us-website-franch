import React from "react";

interface IQues {
  question: string;
  answer: string;
}

const FaqCard: React.FC<{ ques: IQues }> = ({ ques }) => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-plus border border-base-300 bg-[#191e24] mb-3 text-gray-400"
    >
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-md font-medium">{ques.question}</div>
      <div className="collapse-content">
        <p>{ques.answer}</p>
      </div>
    </div>
  );
};

export default FaqCard;

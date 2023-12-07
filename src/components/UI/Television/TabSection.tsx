import { useState } from "react";
import Description from "./TabContent/Description";
import FAQ from "./TabContent/FAQ";
import Specification from "./TabContent/Specification";

const TabSection = () => {
  const [title, setTitle] = useState("description");
  return (
    <div className="mx-3 lg:mx-28">
      <div
        role="tablist"
        className="tabs tabs-boxed text-white tabs-sm lg:tabs-lg my-10 bg-[#191e24]"
      >
        <button
          role="tab"
          onClick={() => setTitle("description")}
          className={`tab  ${
            title === "description" ? "bg-[#1775fa] text-white" : ""
          }`}
        >
          Description
        </button>
        <button
          role="tab"
          onClick={() => setTitle("technical-specifications")}
          className={`tab ${
            title === "technical-specifications"
              ? "bg-[#1775fa] text-white"
              : ""
          }`}
        >
          Technical specifications
        </button>
        <button
          role="tab"
          onClick={() => setTitle("faq")}
          className={`tab ${title === "faq" ? "bg-[#1775fa] text-white" : ""}`}
        >
          FAQ
        </button>
      </div>

      <div className="my-12">
        {title === "description" && <Description />}
        {title === "technical-specifications" && <Specification />}
        {title === "faq" && <FAQ />}
      </div>
    </div>
  );
};

export default TabSection;

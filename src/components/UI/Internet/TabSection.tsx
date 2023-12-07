import { useState } from "react";
import FAQ from "./TabContent/FAQ";
import OneTimeFees from "./TabContent/OneTimeFee";
import Specification from "./TabContent/Specification";

const TabSection = () => {
  const [title, setTitle] = useState("specification");
  return (
    <div className="mx-3 lg:mx-28">
      <div
        role="tablist"
        className="tabs tabs-boxed text-white tabs-sm lg:tabs-lg my-10 bg-[#191e24]"
      >
        <button
          role="tab"
          onClick={() => setTitle("specification")}
          className={`tab ${
            title === "specification" ? "bg-[#1775fa] text-white" : ""
          }`}
        >
          Specification
        </button>
        <button
          role="tab"
          onClick={() => setTitle("one-time-fees")}
          className={`tab ${
            title === "one-time-fees" ? "bg-[#1775fa] text-white" : ""
          }`}
        >
          One time fees
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
        {title === "specification" && <Specification />}
        {title === "one-time-fees" && <OneTimeFees />}
        {title === "faq" && <FAQ />}
      </div>
    </div>
  );
};

export default TabSection;

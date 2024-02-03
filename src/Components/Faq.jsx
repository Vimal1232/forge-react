import React from "react";
import { Accordion } from "./index";

const Faq = () => (
  <section id="Faq">
    <div className="flex flex-col justify-center items-center px-20 max-sm:px-5 gap-20">
      <div className="max-w-[584px] mx-auto">
        <h1 className="text-[72px] font-Futura_ptex text-center text-secondary uppercase leading-[92%] tracking-[-1.5px] mb-4 max-xs:text-[38px]">
          Frequently Asked<span className="text-primary"> Questions</span>
        </h1>
        <p className=" font-Ttravelm text-[18px] text-greyfont leading-[140%] text-center">
          We address common queries, demystify intricacies, and provide insights
          to guide you through our services.
        </p>
      </div>
      <div className="max-w-[848px] max-md: w-full">
        <Accordion />
      </div>
    </div>
  </section>
);

export default Faq;

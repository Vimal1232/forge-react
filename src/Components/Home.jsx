import React from "react";
import { badge2, badge1, badge3, Arrow_right } from "../assets";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => (
  <section className=" bg-pattern" id="home">
    <div className="flex justify-center items-center flex-col gap-11 max-w-[848px] mx-auto">
      <a href="#Testi">
        <div className="flex justify-between items-center bg-lightback rounded-3xl border-primary border bg-opacity-35 border-opacity-35 gap-4 pt-[8px] pr-[24px] pb-[8px] pl-[8px] hover:scale-95 duration-200 ease-in max-xs:hidden">
          <div className="flex">
            <img
              src={badge2}
              className="w-[28px] h-[28px] rounded-full z-[1]"
            />
            <img
              src={badge3}
              className="w-[28px] h-[28px] rounded-full z-[2] ml-[-10px] "
            />
            <img
              src={badge1}
              className="w-[28px] h-[28px] rounded-full z-[3] ml-[-10px]"
            />
          </div>
          <div className=" text-secondary font-Ttravelm flex items-center gap-2 font-[16px]">
            <p>What Others Say About Us </p>
            <img src={Arrow_right} className="w-[16px] h-[16px]" />
          </div>
        </div>
      </a>
      <div className="" data-aos="fade-up" data-aos-duration="1100">
        <h1 className="text-secondary font-Futura_ptex  text-[104px] text-center leading-[90px] max-ss:text-[56px] max-vmd:text-[86px]  ">
          <span className=" text-primary">GROW</span> SALES WITH OUR STRATEGY
          FIRST APPROACH
        </h1>
      </div>
      <div data-aos="fade-up" data-aos-duration="1300">
        <p className=" text-greyfont font-Ttravelm text-[20px] text-center max-w-[632px]">
          Forge's sales and marketing solutions are strategically assigned each
          month to adapt quickly and hit your goals.
        </p>
      </div>
      <div>
        <a href="#contact">
          <button data-aos="fade-up" data-aos-duration="1500">
            <p className=" text-textblack font-TTravelb text-[16px] py-[20px] px-[28px] text-center bg-primary rounded-[12px] hover:bg-primaryhover duration-150 ease-in">
              Book a Free Consultation
            </p>
          </button>
        </a>
      </div>
    </div>
  </section>
);
export default Home;

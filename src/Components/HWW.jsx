import React from "react";
import { Chat, Arrow_right, CreditCard, Medal } from "../assets";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const HWW = () => (
  <section className="px-20 max-sm:px-5" id="HWW">
    <div
      className=" bg-darkgreen1 rounded-[28px]  flex flex-col relative overflow-hidden"
      data-aos="zoom-in"
      data-aos-duration="500"
    >
      <div className="py-[96px] px-[104px] max-sm:py-[64px] max-sm:px-[24px]">
        <div className="flex flex-col gap-8 max-w-[584px] mx-auto items-center justify-center z-10  relative ">
          <a href="#Testi">
            <div
              className="flex bg-darkgreen2 border-[1px] border-primarydark rounded-full py-[8px]
        px-[24px] gap-2 hover:scale-95 duration-200 ease-in"
            >
              <img src={Chat} alt="" />
              <h4 className="font-Ttravelm text-primaryhover text-[16px] max-sm:text-[14px]">
                Have Questions?
              </h4>
              <img src={Arrow_right} alt="" />
            </div>
          </a>
          <div className="">
            <h1 className="text-secondary text-[72px] font-Futura_ptex text-center leading-[92%] tracking-[-1.5px] mb-5 max-sm:text-[40px]">
              EMPOWERING <span className=" text-primary">SUCCESS</span> IN
              NUMBERS
            </h1>
            <p className=" text-secondary font-Ttravelm text-center text-[20px] leading-[140%] max-sm:text-[16px]">
              We redefine collaboration, innovation, and success. From our
              unwavering commitment to excellence to our dynamic approach that
              adapts to your unique needs, discover why working with us is not
              just a choice, it's a strategic investment in your unparalleled
              success.
            </p>
          </div>
          <a href="#contact">
          <button className=" bg-primary py-[20px] px-[28px] rounded-[12px] font-TTravelb hover:bg-primaryhover  duration-200 ease-in">
           Get In Touch
          </button>
          </a>
        </div>
        <img
          src={CreditCard}
          alt=""
          className=" absolute left-[-88px] right-auto bottom-[240px] top-auto w-[440px] h-[440px] z-0 origin-center rotate-[30deg] max-sm:hidden"
        />
        <img
          src={Medal}
          alt=""
          className=" absolute w-[560px] h-[560px] right-[-200px] left-auto top-auto bottom-[190px] origin-center rotate-[-30deg] max-sm:hidden "
        />
      </div>
      <div className=" bg-darkgreen2 rounded-t-[28px] z-10 relative">
        <div className="flex p-[80px] max-sm:px-[24px] max-ss:px-[16px] max-sm:py-[48px] justify-around  items-center   max-ss:flex-col max-ss:justify-center max-ss:items-center gap-5">
          <div>
            <h2 className=" font-Futura_ptex text-[112px] text-primary tracking-[-2.2px] mb-2 leading-[92%] max-sm:text-[60px] text-center">
              97%
            </h2>
            <p className=" font-Ttravelm text-[20px] text-center  text-secondary">
              Satisfaction rate
            </p>
          </div>
          <div>
            <h2 className=" font-Futura_ptex text-[112px] text-primary tracking-[-2.2px] mb-2 leading-[92%] max-sm:text-[60px] text-center">
              50+
            </h2>
            <p className=" font-Ttravelm text-[20px] text-center  text-secondary">
              Delivered projects
            </p>
          </div>
          <div>
            <h2 className=" font-Futura_ptex text-[112px] text-center text-primary tracking-[-2.2px] mb-2 leading-[92%] max-sm:text-[60px] ">
              10
            </h2>
            <p className=" font-Ttravelm text-[20px] text-center  text-secondary">
              Years of experience
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HWW;

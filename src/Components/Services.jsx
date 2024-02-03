import React from "react";
import { Rocket2, Gears, Trophy } from "../assets";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Services = () => (
  <section id="Services">
    <div className="flex px-20 max-sm:px-5 gap-10 flex-col">
      <div className=" max-w-[584px] mx-auto">
        <h3 className=" font-Futura_ptex text-center text-secondary text-[72px] max-sm:text-[40px] leading-[92%] tracking-[-1.25px] mb-5">
          INNOVATIVE <span className=" text-primary">SOLUTIONS</span> HUB
        </h3>
        <p className=" font-Ttravelm text-greyfont text-[20px] leading-[140%] text-center">
          From strategic consulting to seamless execution, we're your partners
          in unlocking unparalleled success. Elevate your business experience
          with our dynamic services.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div
          className=" bg-primarylight rounded-[28px] flex flex-col px-[32px] pt-[24px] pb-[48px] gap-4 max-md:col-span-3"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="flex items-center justify-center">
            <div className=" bg-primaryhover z-0 w-[200px] h-[200px] absolute rounded-full max-ss:w-[100px] max-ss:h-[100px]"></div>
            <img
              src={Rocket2}
              alt="rocket"
              className="w-[264px] h-[264px] relative z-[1] max-ss:w-[164px] max-ss:h-[164px]"
            />
          </div>
          <div>
            <h4
              className=" text-primarydark font-Futura_ptex text-[38px] leading-[92%] 
            tracking-[.8px] text-center mb-3 max-sm:text-[28px]"
            >
              STRATEGIC INSIGHT CONSULTING
            </h4>
            <p className=" font-Ttravelm text-textblack leading-[140%] text-center text-[18px]">
              Our seasoned experts analyze market trends, assess competition,
              and delve into your business dynamics to provide actionable
              insights.
            </p>
          </div>
        </div>
        <div
          className=" bg-primarylight rounded-[20px] flex flex-col px-[32px] pt-[24px] pb-[48px] gap-4 max-md:col-span-3"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="flex items-center justify-center ">
            <div className=" bg-primaryhover z-0 w-[200px] h-[200px] absolute rounded-full max-ss:w-[100px] max-ss:h-[100px]"></div>
            <img
              src={Trophy}
              alt="Trophy"
              className="w-[264px] h-[264px] relative z-[1] max-ss:w-[164px] max-ss:h-[164px]"
            />
          </div>
          <div>
            <h4
              className=" text-primarydark font-Futura_ptex text-[38px] leading-[92%] 
            tracking-[.8px] text-center mb-3 max-sm:text-[28px]"
            >
              DYNAMIC MARKETING SOLUTIONS
            </h4>
            <p className=" font-Ttravelm text-textblack leading-[140%] text-center text-[18px]">
              We elevate your brand with engaging digital campaigns, tailored
              content, and innovative strategies to boost engagement and
              maximize reach.
            </p>
          </div>
        </div>
        <div
          className=" bg-primarylight rounded-[28px] flex flex-col px-[32px] pt-[24px] pb-[48px] gap-4 max-md:col-span-3"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="flex items-center justify-center ">
            <div className=" bg-primaryhover z-0 w-[200px] h-[200px] absolute rounded-full max-ss:w-[100px] max-ss:h-[100px]"></div>
            <img
              src={Gears}
              alt="gears"
              className="w-[264px] h-[264px] relative z-[1] max-ss:w-[164px] max-ss:h-[164px]"
            />
          </div>
          <div>
            <h4
              className=" text-primarydark font-Futura_ptex text-[38px] leading-[92%] 
            tracking-[.8px] text-center mb-3 max-sm:text-[28px]"
            >
              AGILE TECHNOLOGY INTEGRATION
            </h4>
            <p className=" font-Ttravelm text-textblack leading-[140%] text-center text-[18px]">
              Stay ahead with cutting-edge tech. From cloud solutions to
              AI-driven automation, empowering your business in the digital
              landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;

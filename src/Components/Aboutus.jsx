import React from "react";
import { Rocket, Greenog } from "../assets";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Aboutus = () => (
  <section className=" bg-textblack mt-[112px] pt-[64px] max-vmd:mt-[16px]">
    <div className="flex justify-center flex-col" id="Aboutus">
      <div className="max-w-[600px] pl-20 max-sm:p-5 mb-10">
        <h2 className=" text-secondary text-[72px] font-Futura_ptex tracking-[-1.25px] leading-[92%] max-ss:text-[40px] mb-5">
          STRATEGIC <span className="text-primary">SALES GROWTH</span> CATALYST
        </h2>
        <p className=" text-greyfont font-Ttravelm text-[20px]">
          By seamlessly integrating data-driven insights, market intelligence,
          and a deep understanding of your business, we propel your sales to new
          heights.
        </p>
      </div>
      <div className="grid grid-cols-2 px-20 gap-5 max-sm:px-5 ">
        <div
          className="col-span-2 flex bg-primarylight rounded-[28px] max-lg:flex-col"
          data-aos="zoom-in"
          data-AOS-duration="1000"
        >
          <div className="px-[56px] pt-[56px] pb-[64px] max-sm:px-[24px] max-sm:pt-[40px] max-sm:pb-[48px]">
            <div className=" bg-primarydark w-[88px] h-[88px] rounded-full flex justify-center items-center mb-[48px] max-vmd:mb-[32px]">
              <img
                src={Rocket}
                className="w-[40px] h-[40px] align-middle inline-block"
                width="100%"
              />
            </div>
            <div className="max-w-[504px] ">
              <h3 className=" font-Futura_ptex text-[48px] text-primarydark leading-[92%]  tracking-[1px] md:w-[456px] mb-5 max-sm:text-[32px] sm:w-[280px] max-xs:text-[24px]">
                FUELING PROGRESS WITH A STRATEGIC FOUNDATION FOR GROWTH
              </h3>
              <p className=" text-textblack font-Ttravelm text-[20px] max-sm:text-[18px]">
                As a dynamic and forward-thinking powerhouse, we specialize in
                meticulously crafting innovative strategies that transcend
                conventional norms. Our commitment lies not only in meeting
                immediate sales objectives but in strategically positioning
                businesses for sustained success in the ever-evolving market
                landscape.
              </p>
            </div>
          </div>
          <div className="rounded-[28px] bg-img"></div>
        </div>
        <div
          className="col-span-1 max-md:col-span-2 bg-lightOrange rounded-[28px] flex flex-col"
          data-aos="zoom-in"
          data-AOS-duration="1000"
        >
          <div className="bg-img-2 rounded-[28px] "></div>
          <div className="px-[56px] pt-[56px] pb-[76px] max-ss:px-[24px] max-ss:pt-[40px] max-ss:pb-[48px]">
            <div className="max-w-[504px] sm:max-w-[424px]">
              <h3 className="font-Futura_ptex text-[48px] text-darkOrange leading-[92%]  tracking-[1px] md:w-[456px] mb-5 max-sm:text-[32px] sm:w-[280px] max-xs:text-[24px]">
                ILLUMINATING PATHWAYS FOR BUSINESS TRIUMPHS
              </h3>
              <p className=" text-textblack font-Ttravelm text-[20px] max-sm:text-[18px">
                We craft success through strategies integrating data-driven
                insights and deep understanding of each client's unique business
                landscape.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-span-1 max-md:col-span-2 bg-lightyellow rounded-[28px] flex flex-col"
          data-aos="zoom-in"
          data-AOS-duration="1000"
        >
          <div className="bg-img-3 rounded-[28px] "></div>
          <div className="px-[56px] pt-[56px] pb-[76px] max-ss:px-[24px] max-ss:pt-[40px] max-ss:pb-[48px]">
            <div className="max-w-[504px] sm:max-w-[424px]">
              <h3 className="font-Futura_ptex text-[48px] text-darkyellow leading-[92%]  tracking-[1px] md:w-[456px] mb-5 max-sm:text-[32px] sm:w-[280px] max-xs:text-[24px]">
                ILLUMINATING PATHWAYS FOR BUSINESS TRIUMPHS
              </h3>
              <p className=" text-textblack font-Ttravelm text-[20px] max-sm:text-[18px">
                We craft success through strategies integrating data-driven
                insights and deep understanding of each client's unique business
                landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Aboutus;

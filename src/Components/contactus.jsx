import React from "react";
import { Yeti, Phone, Mail } from "../assets";

const Contactus = () => (
  <section id="contact">
    <div className="flex px-20 max-sm:px-5 flex-col gap-10">
      <div className="max-w-[584px]">
        <h3 className=" text-secondary text-[72px] font-Futura_ptex leading-[92%] tracking-[-1.5px] mb-5 ">
          <span className=" text-primary">LET'S CONNECT</span> AND IGNITE
          SUCCESS
        </h3>
        <p className=" text-greyfont font-Ttravelm leading-[140%] text-[20px] ">
          Ready to take the next step? Contact us today to explore how our
          innovative strategies can propel your business forward. Our team is
          here to turn your vision into a reality.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-4">
          <div className="py-[48px] px-[32px] bg-primarylight rounded-[28px] col-span-2 flex flex-col justify-center items-center gap-8 hover:scale-95 duration-200 ease-in-out ">
            <div className=" bg-primarydark p-6 rounded-[20px]">
              <img src={Mail} alt="" className="w-[32px] h-[32px]" />
            </div>
            <div>
              <h4 className=" text-primarydark text-[40px] leading-[92%] mb-2 font-Futura_ptex text-center uppercase">
                Drop Us a Line
              </h4>
              <p className=" text-primarydark text-[18px] text-center font-Ttravelm ">
                Reach out and let's begin the dialogue
              </p>
            </div>
          </div>
          <div className="py-[48px] px-[32px] bg-primarylight rounded-[28px] col-span-2 flex flex-col justify-center items-center gap-8 hover:scale-95 duration-200 ease-in-out ">
            <div className=" bg-primarydark p-6 rounded-[20px]">
              <img src={Phone} alt="" className="w-[32px] h-[32px]" />
            </div>
            <div>
              <h4 className=" text-primarydark text-[40px] leading-[92%] mb-2 font-Futura_ptex text-center uppercase">
                Book A Call
              </h4>
              <p className=" text-primarydark text-[18px] text-center font-Ttravelm ">
                Schedule Consultation in our Calendly
              </p>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-10 gap-4 max-vmd:grid-cols-1 ">
          <div className=" flex flex-col gap-6 bg-darkgreenop10 py-[48px] px-[40px] rounded-[28px] col-span-4 max-vmd:col-span-10 ">
            <div className="max-w-[400px]">
              <h3 className=" font-Futura_ptex text-[40px] text-primarylight mb-4 leading-[92%] tracking-[.8px]">
                CONNECT WITH EASE
              </h3>
              <p className=" font-Ttravelm text-primarylight text-[18px] leading-[140%] ">
                Your inquiries, ideas, and collaboration opportunities are just
                a click away. Let's start the conversation.
              </p>
            </div>
            <form>
              <label className=" font-Ttravelm text-[18px] text-white block mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Jhon Anderson"
                className=" rounded-[12px] border-white border-[1px] p-6 w-full bg-transparent text-white font-Ttravelm border-opacity-30 placeholder:opacity-30 block focus:border-opacity-100 focus:border-white focus:outline-none hover:border-opacity-100 transition-all duration-200 ease-in-out mb-4"
              />
              <label className=" font-Ttravelm text-[18px] text-white block mb-2">
                Email Address
              </label>
              <input
                type="wmail"
                placeholder="jhonanderson@gmail.com"
                className=" rounded-[12px] border-white border-[1px] p-6 w-full bg-transparent text-white font-Ttravelm border-opacity-30 placeholder:opacity-30 block focus:border-opacity-100 focus:border-white focus:outline-none hover:border-opacity-100 transition-all duration-200 ease-in-out mb-4"
              />
              <label className=" font-Ttravelm text-[18px] text-white block mb-2">
                Question
              </label>
              <input
                type="text"
                placeholder="How can we help you?"
                className=" rounded-[12px] border-white border-[1px] p-6 w-full bg-transparent text-white font-Ttravelm border-opacity-30 placeholder:opacity-30 block focus:border-opacity-100 focus:border-white focus:outline-none hover:border-opacity-100 transition-all duration-200 ease-in-out"
              />

              <button className=" bg-primary w-full py-6 rounded-[12px]  text-[16px] uppercase mt-6 hover:bg-primaryhover transition-all duration-200 ease-in-out text-textblack font-TTravelb">
                Send a Questions
              </button>
            </form>
          </div>
          <div className="bg-img0 col-span-6 max-vmd:col-span-10"></div>
        </div>
      </div>
    </div>
  </section>
);
export default Contactus;

import React from "react";
import { useState } from "react";
import { logo, close, hamburger } from "../assets";
const Navbar = () => {
  const [navopen, setnavopen] = useState(false);

  return (
    <nav className="w-full">
      <div className="flex justify-between items-center sm:px-16 sm:pt-2  sm:pb-3 max-vmd:gap-5">
        <div className=" hover:scale-95 duration-150 ease-in">
          <a href="#home">
            <img src={logo} alt="logo" className="w-[43px] h-[47px]" />
          </a>
        </div>
        <div className="flex-auto max-vmd:hidden">
          <ul className="flex gap-[40px] justify-center items-center md:ml-16 ml-0 ">
            <li className="text-secondary text-[16px] font-Ttravelm hover-underline-animation">
              <a href="#Aboutus">
                <span>About Us</span>
              </a>
            </li>

            <li className="text-secondary text-[16px] font-Ttravelm hover-underline-animation">
              <a href="#Services"> Services</a>
            </li>
            <li className="text-secondary text-[16px] font-Ttravelm hover-underline-animation">
              <a href="#HWW">How We work</a>
            </li>
            <li className="text-secondary text-[16px] font-Ttravelm hover-underline-animation">
              <a href="#Testi">Testimonials</a>
            </li>
            <li className="text-secondary text-[16px] font-Ttravelm hover-underline-animation">
              <a href="#Faq">FAQ</a>
            </li>
          </ul>
        </div>
        <a href="#contact">
          <button
            className="text-white px-[20px] bg-textblack py-[12px] rounded-xl
           border-primary font-TTravelb font-bold border-[1px] text-[14px]  hover:bg-primary hover:text-textblack ease-in-out transition delay-50 duration-300 max-vmd:ml-auto  max-xs:hidden"
          >
            Get In Touch
          </button>
        </a>

        <div className="">
          <img
            src={navopen ? close : hamburger}
            alt="hamburger"
            className="w-[48px] h-[48px] max-vmd:flex hidden"
            onClick={() => setnavopen(!navopen)}
          />

          <div
            className={`${
              !navopen ? "hidden" : "flex"
            } fixed w-full h-[100vh] top-[0px] left-0 bg-textblack z-[5] flex flex-col   flex-grow-1 sm:px-[88px] sm:py-10  py-8 px-6  gap-36 vmd:hidden`}
          >
            <div className="flex justify-between">
              <div>
                <img src={logo} alt="logo" className="w-[43px] h-[47px]" />
              </div>
              <img
                src={navopen ? close : hamburger}
                alt="hamburger"
                className="w-[48px] h-[48px] max-vmd:flex hidden"
                onClick={() => setnavopen(!navopen)}
              />
            </div>

            <div className="flex justify-center items-center px-5">
              <ul className="flex flex-col items-center gap-5">
                <li className="text-[48px] text-primarylight font-Futura_ptex font-black uppercase max-ss:text-[36px]">
                  <a href="#Aboutus" onClick={() => setnavopen(false)}>
                    About us
                  </a>
                </li>
                <li className="text-[48px] text-primarylight font-Futura_ptex font-black uppercase max-ss:text-[36px]">
                  <a href="#Services" onClick={() => setnavopen(false)}>
                    {" "}
                    Services
                  </a>
                </li>
                <li className="text-[48px] text-primarylight font-Futura_ptex font-black uppercase max-xs:mx-auto max-ss:text-[36px]">
                  <a href="#HWW" onClick={() => setnavopen(false)}>
                    How we work
                  </a>
                </li>
                <li className="text-[48px] text-primarylight font-Futura_ptex font-blackuppercase max-ss:text-[36px]">
                  <a href="#Testi" onClick={() => setnavopen(false)}>
                    Testimonials
                  </a>
                </li>
                <li className="text-[48px] text-primarylight font-Futura_ptex font-black uppercase max-ss:text-[36px]">
                  <a href="#Faq" onClick={() => setnavopen(false)}>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

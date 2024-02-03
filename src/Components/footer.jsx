import React from "react";
import { logo } from "../assets";

const Footer = () => (
  <footer>
    <div className="px-20 max-sm:px-5">
      <div className=" bg-footerc rounded-[28px] p-12 flex justify-between items-center ">
        <div>
          <a href="#home">
            <img
              src={logo}
              alt=""
              className=" hover:scale-90 duration-200 ease-in-out"
            />
          </a>
        </div>
        <div className=" ">
          <ul className="flex gap-8 items-center justify-center">
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
      </div>
    </div>
  </footer>
);

export default Footer;

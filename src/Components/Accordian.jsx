import React, { useState } from "react";
import { Add } from "../assets";

export const Accordion = () => {
  const [Open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(Open === value ? 0 : value);

  return (
    <section className="" id="">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className=" bg-darkgreenop10 rounded-[28px]" Open={Open === 1}>
          <div
            className="flex  items-center cursor-pointer  bg-primarylight rounded-[28px]  "
            onClick={() => handleOpen(1)}
          >
            <div className=" text-textblack bg-primarylight rounded-[28px] font-Ttravelm text-[20px] py-[24px] px-[32px] flex-1 max-ss:text-[16px]">
              How can your strategies be customized for my needs?
            </div>
            <div className="bg-primaryhover rounded-[28px] flex justify-center items-center p-6  ">
              <img
                src={Add}
                className={`${
                  Open === 1
                    ? "origin-center rotate-45 transition-all ease-in-out duration-500"
                    : " overflow-hidden  transition-all ease-in-out duration-500"
                } w-[28px] h-[28px]`}
                alt=""
              />
            </div>
          </div>

          <div
            className={`overflow-hidden  transition-all ease-in-out duration-500 ${
              Open === 1 ? "max-h-96" : "max-h-0 "
            }`}
          >
            <div className="py-[24px] px-[32px]">
              <p className="  text-secondary font-Ttravelm">
                Our marketing strategies are meticulously tailored to suit the
                specific needs of your business. Through in-depth consultations
                and a thorough understanding of your objectives, we craft
                personalized approaches that align with your goals.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-darkgreenop10 rounded-[28px]" Open={Open === 2}>
          <div
            className="flex  items-center cursor-pointer  bg-primarylight rounded-[28px]  "
            onClick={() => handleOpen(2)}
          >
            <div className=" text-textblack bg-primarylight rounded-[28px] font-Ttravelm text-[20px] py-[24px] px-[32px] flex-1 max-ss:text-[16px]">
              How can your strategies be customized for my needs?
            </div>
            <div className="bg-primaryhover rounded-[28px] flex justify-center items-center p-6  ">
              <img
                src={Add}
                className={`${
                  Open === 2
                    ? "origin-center rotate-45 transition-all ease-in-out duration-500"
                    : " overflow-hidden  transition-all ease-in-out duration-500"
                } w-[28px] h-[28px]`}
                alt=""
              />
            </div>
          </div>

          <div
            className={`overflow-hidden  transition-all ease-in-out duration-500 ${
              Open === 2 ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="py-[24px] px-[32px]">
              <p className="  text-secondary font-Ttravelm">
                Our creative campaigns stand out through a fusion of innovation
                and strategic brilliance. We don't just follow trends; we set
                them. Each campaign is meticulously crafted to tell a compelling
                story, creating an indelible mark on your audience and setting
                your brand apart in the competitive landscape.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-darkgreenop10 rounded-[28px]" Open={Open === 3}>
          <div
            className="flex  items-center cursor-pointer  bg-primarylight rounded-[28px]  "
            onClick={() => handleOpen(3)}
          >
            <div className=" text-textblack bg-primarylight rounded-[28px] font-Ttravelm text-[20px] py-[24px] px-[32px] flex-1 max-ss:text-[16px]">
              How do you guarantee my message resonates on all channels?
            </div>
            <div className="bg-primaryhover rounded-[28px] flex justify-center items-center p-6  ">
              <img
                src={Add}
                className={`${
                  Open === 3
                    ? "origin-center rotate-45 transition-all ease-in-out duration-500"
                    : " overflow-hidden  transition-all ease-in-out duration-500"
                } w-[28px] h-[28px]`}
                alt=""
              />
            </div>
          </div>

          <div
            className={`overflow-hidden  transition-all ease-in-out duration-500 ${
              Open === 3 ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="py-[24px] px-[32px]">
              <p className="  text-secondary font-Ttravelm">
                We take a unified approach to multichannel marketing, ensuring
                seamless integration across platforms. By maintaining
                consistency in messaging and brand identity, we create a
                powerful and harmonized presence that resonates with your
                audience, regardless of the channel.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-darkgreenop10 rounded-[28px]" Open={Open === 4}>
          <div
            className="flex  items-center cursor-pointer  bg-primarylight rounded-[28px]  "
            onClick={() => handleOpen(4)}
          >
            <div className=" text-textblack bg-primarylight rounded-[28px] font-Ttravelm text-[20px] py-[24px] px-[32px] flex-1 max-ss:text-[16px]">
              Can you explain the role of data intelligence in your process?
            </div>
            <div className="bg-primaryhover rounded-[28px] flex justify-center items-center p-6  ">
              <img
                src={Add}
                className={`${
                  Open === 4
                    ? "origin-center rotate-45 transition-all ease-in-out duration-500"
                    : " overflow-hidden  transition-all ease-in-out duration-500"
                } w-[28px] h-[28px]`}
                alt=""
              />
            </div>
          </div>

          <div
            className={`overflow-hidden  transition-all ease-in-out duration-500 ${
              Open === 4 ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="py-[24px] px-[32px]">
              <p className="  text-secondary font-Ttravelm">
                Data is the cornerstone of our decision-making process. We
                analyze key metrics and trends to inform our strategies,
                ensuring that every decision is backed by actionable insights.
                This empowers your business to make informed choices and stay
                agile in a dynamic market.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-darkgreenop10 rounded-[28px]" Open={Open === 5}>
          <div
            className="flex  items-center cursor-pointer  bg-primarylight rounded-[28px]  "
            onClick={() => handleOpen(5)}
          >
            <div className=" text-textblack bg-primarylight rounded-[28px] font-Ttravelm text-[20px] py-[24px] px-[32px] flex-1 max-ss:text-[16px]">
              How do I get started with your services?
            </div>
            <div className="bg-primaryhover rounded-[28px] flex justify-center items-center p-6  ">
              <img
                src={Add}
                className={`${
                  Open === 5
                    ? "origin-center rotate-45 transition-all ease-in-out duration-500"
                    : " overflow-hidden  transition-all ease-in-out duration-500"
                } w-[28px] h-[28px]`}
                alt=""
              />
            </div>
          </div>

          <div
            className={`overflow-hidden  transition-all ease-in-out duration-500 ${
              Open === 5 ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="py-[24px] px-[32px]">
              <p className="  text-secondary font-Ttravelm">
                Getting started is easy! Simply reach out to our team, and we'll
                guide you through the onboarding process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

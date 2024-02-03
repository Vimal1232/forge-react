import React from "react";
import {
  Man3,
  Man4,
  Man5,
  Man6,
  Man7,
  Man9,
  Woman,
  Woman1,
  Woman2,
  badge1,
  badge2,
  badge3,
} from "../assets";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Testi = () => (
  <section id="Testi">
    <div className="flex flex-col px-20 max-sm:px-5">
      <div className=" max-w-[584px] mb-14">
        <h2 className=" text-secondary font-Futura_ptex text-[72px] leading-[92%] tracking-[-1.5px] mb-5">
          SUCCESS STORIES FROM <span className="text-primary">OUR CLIENTS</span>
        </h2>
        <p className=" text-greyfont font-Ttravelm text-[20px] leading-[140%] ">
          Explore the firsthand experiences of those who chose to partner with
          us and witness the transformative power of our innovative solutions.
        </p>
      </div>
      <div
        className="grid grid-cols-4 max-md:grid-cols-3 gap-4 max-vmd:grid-cols-2 max-ss:grid-cols-1"
        data-aos="zoom"
        data-aos-duration="500"
      >
        <div className="flex flex-col gap-4">
          <div className=" flex flex-col px-[24px] pt-[24px] pb-[32px] rounded-[28px] bg-darkgreenop10 gap-5 hover:scale-95 duration-200 ease-in-out">
            <div className="flex items-center gap-4 ">
              <img
                src={badge2}
                alt=""
                className="rounded-full w-[34px] h-[34px] border-[1px] border-primary"
              />
              <p className=" font-Ttravelm text-[16px] text-primary">
                John Anderson
              </p>
            </div>
            <div>
              <p className=" font-Ttravelm text-[16px] text-greyfont">
                Collaborating with Forge was transformative. Their strategic
                insights and solutions propelled our business to new heights.
                The outcomes say it all – a true partner in success.
              </p>
            </div>
          </div>
          <div className=" flex flex-col px-[24px] pt-[24px] pb-[32px] rounded-[28px] bg-darkgreenop10 gap-5 hover:scale-95 duration-200 ease-in-out">
            <div className="flex items-center gap-4 ">
              <img
                src={Woman}
                alt=""
                className="rounded-full w-[34px] h-[34px] border-[1px] border-primary"
              />
              <p className=" font-Ttravelm text-[16px] text-primary">
                Emily Siemens
              </p>
            </div>
            <div>
              <p className=" font-Ttravelm text-[16px] text-greyfont">
                Choosing Forge was the best decision for our marketing needs.
                Their dynamic strategies and creative approach enhanced our
                brand visibility.
              </p>
            </div>
          </div>
          <div className=" flex flex-col px-[24px] pt-[24px] pb-[32px] rounded-[28px] bg-darkgreenop10 gap-5 hover:scale-95 duration-200 ease-in-out">
            <div className="flex items-center gap-4 ">
              <img
                src={Man6}
                alt=""
                className="rounded-full w-[34px] h-[34px] border-[1px] border-primary"
              />
              <p className=" font-Ttravelm text-[16px] text-primary">
                Michael Lesly
              </p>
            </div>
            <div>
              <p className=" font-Ttravelm text-[16px] text-greyfont">
                Impressed by Forge's commitment to excellence. Their solutions
                were tailored to our unique needs, optimizing our processes and
                contributing significantly to our bottom line.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className=" flex flex-col px-[24px] pt-[24px] pb-[32px] rounded-[28px] bg-darkgreenop10 gap-5 hover:scale-95 duration-200 ease-in-out">
            <div className="flex items-center gap-4 ">
              <img
                src={Man7}
                alt=""
                className="rounded-full w-[34px] h-[34px] border-[1px] border-primary"
              />
              <p className=" font-Ttravelm text-[16px] text-primary">
                Alex Noon
              </p>
            </div>
            <div>
              <p className=" font-Ttravelm text-[16px] text-greyfont">
                Their expertise and innovative campaigns not only increased
                sales but also fostered brand loyalty.
              </p>
            </div>
          </div>
          <div className=" flex flex-col px-[24px] pt-[24px] pb-[32px] rounded-[28px] bg-darkgreenop10 gap-5 hover:scale-95 duration-200 ease-in-out">
            <div className="flex items-center gap-4 ">
              <img
                src={badge3}
                alt=""
                className="rounded-full w-[34px] h-[34px] border-[1px] border-primary"
              />
              <p className=" font-Ttravelm text-[16px] text-primary">
                Rachel Simpson
              </p>
            </div>
            <div>
              <p className=" font-Ttravelm text-[16px] text-greyfont">
                Forge brought creativity to our event promotions. Their approach
                and social media campaigns ensured maximum attendance and
                elevated the overall success of our events.
              </p>
            </div>
          </div>
          <div className=" flex flex-col px-[24px] pt-[24px] pb-[32px] rounded-[28px] bg-darkgreenop10 gap-5 hover:scale-95 duration-200 ease-in-out">
            <div className="flex items-center gap-4 ">
              <img
                src={Man9}
                alt=""
                className="rounded-full w-[34px] h-[34px] border-[1px] border-primary"
              />
              <p className=" font-Ttravelm text-[16px] text-primary">
                A Chris Howard
              </p>
            </div>
            <div>
              <p className=" font-Ttravelm text-[16px] text-greyfont">
                Navigating the tech industry requires marketing. Forge
                understood our needs perfectly, delivering campaigns that
                generated buzz and increased user engagement.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-vmd:hidden">
          <div className=" flex flex-col px-[24px] pt-[24px] pb-[32px] rounded-[28px] bg-darkgreenop10 gap-5 hover:scale-95 duration-200 ease-in-out">
            <div className="flex items-center gap-4 ">
              <img
                src={Woman1}
                alt=""
                className="rounded-full w-[34px] h-[34px] border-[1px] border-primary"
              />
              <p className=" font-Ttravelm text-[16px] text-primary">
                Emma Petterson
              </p>
            </div>
            <div>
              <p className=" font-Ttravelm text-[16px] text-greyfont">
                Forge transformed our property marketing. Their strategies not
                only attracted potential buyers but also showcased our projects
                in a way that truly set them apart in the market.
              </p>
            </div>
          </div>
          <div className=" flex flex-col px-[24px] pt-[24px] pb-[32px] rounded-[28px] bg-darkgreenop10 gap-5 hover:scale-95 duration-200 ease-in-out">
            <div className="flex items-center gap-4 ">
              <img
                src={Man5}
                alt=""
                className="rounded-full w-[34px] h-[34px] border-[1px] border-primary"
              />
              <p className=" font-Ttravelm text-[16px] text-primary">
                Alex Caron
              </p>
            </div>
            <div>
              <p className=" font-Ttravelm text-[16px] text-greyfont">
                Our fitness studio witnessed a surge in membership thanks to
                Forge. Their creative fitness campaigns and digital presence
                strategies were key contributors to our success.
              </p>
            </div>
          </div>
          <div className=" flex flex-col px-[24px] pt-[24px] pb-[32px] rounded-[28px] bg-darkgreenop10 gap-5 hover:scale-95 duration-200 ease-in-out">
            <div className="flex items-center gap-4 ">
              <img
                src={Man4}
                alt=""
                className="rounded-full w-[34px] h-[34px] border-[1px] border-primary"
              />
              <p className=" font-Ttravelm text-[16px] text-primary">
                Nick Robinson
              </p>
            </div>
            <div>
              <p className=" font-Ttravelm text-[16px] text-greyfont">
                Forge brought a perspective to our restaurant marketing. From
                social media campaigns to local partnerships, they elevated our
                brand awareness.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-md:hidden">
          <div className=" flex flex-col px-[24px] pt-[24px] pb-[32px] rounded-[28px] bg-darkgreenop10 gap-5 hover:scale-95 duration-200 ease-in-out">
            <div className="flex items-center gap-4 ">
              <img
                src={badge1}
                alt=""
                className="rounded-full w-[34px] h-[34px] border-[1px] border-primary"
              />
              <p className=" font-Ttravelm text-[16px] text-primary">
                David Lite
              </p>
            </div>
            <div>
              <p className=" font-Ttravelm text-[16px] text-greyfont">
                In the competitive financial sector, Forge provided us with a
                distinct edge. Their digital marketing strategies not only
                attracted new clients but also positioned us as thought leaders
                in the industry.
              </p>
            </div>
          </div>
          <div className=" flex flex-col px-[24px] pt-[24px] pb-[32px] rounded-[28px] bg-darkgreenop10 gap-5 hover:scale-95 duration-200 ease-in-out ">
            <div className="flex items-center gap-4 ">
              <img
                src={Woman2}
                alt=""
                className="rounded-full w-[34px] h-[34px] border-[1px] border-primary"
              />
              <p className=" font-Ttravelm text-[16px] text-primary">
                Sophie Kyle
              </p>
            </div>
            <div>
              <p className=" font-Ttravelm text-[16px] text-greyfont">
                Forge’s creative campaigns enhanced our brand image, making us a
                go-to destination for style.
              </p>
            </div>
          </div>
          <div className=" flex flex-col px-[24px] pt-[24px] pb-[32px] rounded-[28px] bg-darkgreenop10 gap-5 hover:scale-95 duration-200 ease-in-out">
            <div className="flex items-center gap-4 ">
              <img
                src={Man3}
                alt=""
                className="rounded-full w-[34px] h-[34px] border-[1px] border-primary"
              />
              <p className=" font-Ttravelm text-[16px] text-primary">
                Tom Green
              </p>
            </div>
            <div>
              <p className=" font-Ttravelm text-[16px] text-greyfont">
                Forge’s targeted B2B campaigns and thought leadership content
                significantly contributed to our market positioning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Testi;

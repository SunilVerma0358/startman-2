import React from "react";
import logo from "../assets/images/svg/logo.svg";
import { Facebook, InstaIcon, LinkDinIcon, Twitter } from "./common/Icon";
import { FooterlinkArray } from "./common/Helper";
const Footer = () => {
  return (
    <div>
      <div className="max-w-[505px] md:max-w-[1164px] container pt-20 md:pt-24 lg:pt-[168px] pb-[41px]">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="w-full lg:w-1/3 px-3">
            <a href="#!">
              <img
                className="w-full max-w-[100px] md:max-w-[113px]"
                width={113}
                height={77}
                src={logo}
                alt="logo"
              />
            </a>
            <p className="font-open font-normal text-sm lg:text-base text-dark-gray leading-normal mt-[17px]">
              Stratman AI is dedicated to empowering investors with advanced
              AI-driven tools and insights. Our platform provide financial data.
            </p>
            <p className=" font-Anek font-semibold text-base text-black leading-normal mt-4 md:mt-6">
              Follow Us
            </p>
            <div className="flex items-center gap-3 mt-3">
              <a
                href="https://www.linkedin.com/"
                target="blank"
                className="w-[26px] h-[26px] border border-light-blue rounded-[32.68px] flex justify-center items-center duration-300 group hover:border-dark-gray"
              >
                <LinkDinIcon />
              </a>
              <a
                href="https://www.instagram.com/"
                target="blank"
                className="w-[26px] h-[26px] border border-light-blue rounded-[32.68px] flex justify-center items-center duration-300 group hover:border-dark-gray"
              >
                <InstaIcon />
              </a>
              <a
                href="http://facebook.com/"
                target="blank"
                className="w-[26px] h-[26px] border border-light-blue rounded-[32.68px] flex justify-center items-center duration-300 group hover:border-dark-gray"
              >
                <Facebook />
              </a>
              <a
                href="https://twitter.com/"
                target="blank"
                className="w-[26px] h-[26px] border border-light-blue rounded-[32.68px] flex justify-center items-center duration-300 group hover:border-dark-gray"
              >
                <Twitter />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-8/12 px-3 md:pt-6 lg:pt-0">
            <div className="flex max-lg:flex-wrap sm:justify-between max-w-[678px] lg:ms-auto">
              {FooterlinkArray.map((obj, index) => (
                <div
                  key={index}
                  className={`${
                    index === 3 && "max-sm:w-full"
                  } max-sm:w-1/2 max-md:pt-6`}
                >
                  <p className="font-Anek font-semibold text-base text-black leading-normal ">
                    {obj.heading}
                  </p>
                  <ul>
                    <li className="mt-4">
                      <a
                        href={obj.href}
                        target="blank"
                        className={`font-open font-normal text-base text-dark-gray leading-normal relative z-[1] after:w-0 after:bg-light-blue after:h-[2px] after:-bottom-[2px] after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full duration-300 hover:text-light-blue ${
                          index === 3 && "flex items-center gap-2"
                        } `}
                      >
                        {obj.icon1}
                        {obj.link1}
                      </a>
                    </li>
                    <li className={`${index === 3 ? "mt-[18px]" : ""} mt-3`}>
                      <a
                        href={obj.href1}
                        target="blank"
                        className={`font-open font-normal text-base text-dark-gray leading-normal relative z-[1] after:w-0 after:bg-light-blue after:h-[2px] after:-bottom-[2px] after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full duration-300 hover:text-light-blue ${
                          index === 3 && "flex items-center gap-2"
                        } `}
                      >
                        {obj.icon2}
                        {obj.link2}
                      </a>
                    </li>
                    <li className={`${index === 3 ? "mt-[18px]" : ""} mt-3`}>
                      <a
                        href={obj.href2}
                        target="blank"
                        className={`font-open font-normal text-base text-dark-gray leading-normal relative z-[1] after:w-0 after:bg-light-blue after:h-[2px] after:-bottom-[2px] after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full duration-300 hover:text-light-blue ${
                          index === 3 && "flex items-center gap-[9px]"
                        } `}
                      >
                        {obj.icon3}
                        {obj.link3}
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        href={obj.href3}
                        target="blank"
                        className="font-open font-normal text-base text-dark-gray leading-normal relative z-[1] after:w-0 after:bg-light-blue after:h-[2px] after:-bottom-[2px] after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full duration-300 hover:text-light-blue"
                      >
                        {obj.link4}
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

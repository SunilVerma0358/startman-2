import React from "react";
import logo from "../assets/images/svg/logo.svg";
const Footer = () => {
  return (
    <div className="max-w-[1164px] container pt-[168px]">
      <div className="flex flex-row flex-wrap -mx-3">
        <div className="w-1/3 px-3">
          <a href="#!">
            <img src={logo} alt="logo" />
          </a>
          <p className="font-open font-normal text-base text-dark-gray leading-normal mt-[17px]">
            Stratman AI is dedicated to empowering investors with advanced
            AI-driven tools and insights. Our platform provide financial data.
          </p>
          <p className=" font-Anek font-semibold text-base text-black leading-normal mt-6">
            Follow Us
          </p>
          <div className="flex items-center gap-4 mt-3">
            <a
              href="#!"
              className="w-[26px] h-[26px] flex justify-center items-center"
            >
              logo
            </a>
          </div>
        </div>
        <div className="w-8/12">
          <p className="font-Anek font-semibold text-base text-black leading-normal ">
            Company
          </p>
          <ul>
            <li>
              <a
                href="#!"
                className="font-open font-normal text-base text-dark-gray leading-normal"
              >
                Home
              </a>
            </li>
            <li className="mt-3">
              <a
                href="#!"
                className="font-open font-normal text-base text-dark-gray leading-normal"
              >
                Features
              </a>
            </li>
            <li className="mt-3">
              <a
                href="#!"
                className="font-open font-normal text-base text-dark-gray leading-normal"
              >
                Pricing
              </a>
            </li>
            <li className="mt-3">
              <a
                href="#!"
                className="font-open font-normal text-base text-dark-gray leading-normal"
              >
                Blogs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

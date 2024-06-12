import React from "react";
import { FeaturesIcon } from "./common/Icon";
import interesttrends from "../assets/images/webp/interest-over-time.webp";
import googletrends from "../assets/images/webp/google-trends-data.webp";
import { Heading } from "./common/Heading";
import { CommonBtn } from "./common/CommonBtn";
const Features = () => {
  return (
    <div id="features" className="container max-w-[505px] md:max-w-[1164px]">
      <div className="rounded-[41px] bg-light-sky inline-flex items-center gap-2.5 p-[10px_31px_10px_31px]">
        <span>
          <FeaturesIcon />
        </span>
        <span className="font-open font-normal leading-normal text-sm lg:text-base text-light-blue uppercase">
          features
        </span>
      </div>
      <h1 className="font-Anek font-semibold text-4xl sm:text-5xl lg:text-5xxl text-black !leading-[120%] mt-5">
        Stratman AI <span className="font-[200]">helps Achieve</span>{" "}
        <span className="text-light-blue">Your Goals</span>
      </h1>
      <p className="font-open font-normal text-sm lg:text-base text-dark-gray leading-normal mt-2 md:mt-3">
        Our AI-powered platform offers comprehensive features, including
        real-time financial data, customized{" "}
        <span className="md:block">
          charts, market trend analysis, and access to SEC filings.
        </span>
      </p>
      <div className="flex flex-row flex-wrap -mx-3 pt-12 md:pt-16 lg:pt-[100px] items-center">
        <div className="md:w-1/2 w-full px-3">
          <div className="rounded-[14px] bg-gray p-[27px_31px_67px_31px] max-w-[514px] max-md:mx-auto relative">
            <div className="max-w-[373px]">
              <img
                className="w-full rounded-lg shadow-[0px_0px_26.2px_0px_#00000021]"
                width={373}
                height={238}
                src={interesttrends}
                alt="interesttrends"
              />
              <div className="bg-light-sky rounded-lg p-[10.23px_10.23px_6px_10.23px] absolute right-[31px] bottom-[27px]">
                <div className="max-w-[110px] lg:max-w-[155px]">
                  <img
                    className="w-full rounded-[3px]"
                    width={155}
                    height={88}
                    src={googletrends}
                    alt="google"
                  />
                </div>
                <p className="font-open font-semibold text-1xxl text-black leading-normal text-center mt-2">
                  Google Trends Data
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full px-3 pt-6 md:pt-0">
          <div className="max-w-[485px] max-md:mx-auto md:ms-auto">
            <p className="font-open font-normal text-sm lg:text-base text-light-blue leading-normal uppercase">
              trends data
            </p>
            <Heading
              className="mt-4"
              text="Trends Data: Key Insights and Trends"
            />
            <p className="font-open font-normal text-sm lg:text-base text-dark-gray leading-normal mt-2 lg:mt-3">
              Trends mode handles this problem by using Al to take in any query
              that you might think of, in example- nvidia; and generate 5 search
              queries related to that term, and plots the last 12 months in
              trends. This is where trends mode can eliminate a lot of the
              noise, and help spark ideas.
            </p>
            <CommonBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

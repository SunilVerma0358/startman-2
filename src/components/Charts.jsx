import React from "react";
import { Heading } from "./common/Heading";
import { CommonBtn } from "./common/CommonBtn";
import trendsgraphfirst from "../assets/images/webp/trends-graph-first.webp";
import trendsgraphsecond from "../assets/images/webp/trends-graph-second.webp";
import trendsgraphthird from "../assets/images/webp/trends-graph-third.webp";
import trendsgraphfour from "../assets/images/webp/trends-graph-four.webp";
const Charts = () => {
  return (
    <div className="pt-16 md:pt-24 lg:pt-32 xl:pt-[200px]">
      <div className="container max-w-[1162px]">
        <div className="flex md:flex-row flex-wrap -mx-3 items-center flex-col-reverse">
          <div className="w-full md:w-1/2 px-3 max-md:pt-20">
            <div className="max-w-[485px] max-md:mx-auto">
              <p className="font-open font-normal text-sm lg:text-base text-light-blue leading-normal uppercase">
                chart analysis
              </p>{" "}
              <Heading
                className="mt-4"
                text="Analyzing Charts for Key Insights"
              />
              <p className="font-open font-normal text-sm lg:text-base text-dark-gray leading-normal mt-3 lg:mt-4">
                Use the Technicals copilot to upload screenshots of your charts.
                Let Stratman know about which patterns you're looking for, use
                it as an extra set of eyes to quickly scan your charts, or
                simply ask questions to gain insight. Upload a single chart or
                split screen charts to do analysis of multiple charts at once
                along with a question or query.
              </p>
              <CommonBtn />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 max-md:pt-16">
            <div className="rounded-[14px] bg-gray px-6 max-w-[512px] max-h-[362px] max-md:mx-auto md:ms-auto">
              <div className="flex gap-4 items-center">
                <div className="-translate-y-11 flex gap-[14px] flex-col">
                  <div className="max-w-[224px]">
                    <img
                      className="w-full rounded-xl"
                      width={224.49}
                      height={177.81}
                      src={trendsgraphfirst}
                      alt="trendsgraphfirst"
                    />
                  </div>
                  <div className="max-w-[224px]">
                    <img
                      className="w-full rounded-xl"
                      width={224.49}
                      height={177.81}
                      src={trendsgraphsecond}
                      alt="trendsgraphfirst"
                    />
                  </div>
                </div>
                <div className="translate-y-11 flex gap-[14px] flex-col">
                  <div className="max-w-[224px]">
                    <img
                      className="w-full rounded-xl object-cover"
                      width={224.49}
                      height={177.81}
                      src={trendsgraphthird}
                      alt="trendsgraphfirst"
                    />
                  </div>
                  <div className="max-w-[224px]">
                    <img
                      className="w-full rounded-xl"
                      width={224.49}
                      height={177.81}
                      src={trendsgraphfour}
                      alt="trendsgraphfirst"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;

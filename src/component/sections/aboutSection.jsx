import { Fragment } from "react";
import AboutDescription from "../fragments/aboutDescription";
import AboutPlayer from "../fragments/aboutPlayer";

const AboutSection = () => {
  return (
    <Fragment>
      <div className="bg-[#050012]" id="about">
        <div className="container max-w-[344px] sm:max-w-[640px] md:max-w-[820px] lg:max-w-[1020px] mx-auto py-[80px]">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-7 lg:col-span-8 grid items-center">
              <AboutPlayer />
            </div>
            <div className="col-span-12 md:col-span-5 lg:col-span-4">
              <AboutDescription />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutSection;

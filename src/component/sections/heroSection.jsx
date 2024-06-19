import { Fragment } from "react";
import Hero from "../elements/hero/hero";

const HeroSection = () => {
  return (
    <Fragment>
      <div className="relative px-6 pt-[0px] lg:px-8 bg-bg-hero-mobile md:bg-bg-hero bg-cover h-screen">
        <div className="mx-auto max-w-2xl pt-[40vh] sm:pt-48 lg:pt-50">
          <Hero />
        </div>
      </div>
      <div
        className="absolute -bottom-[80px] z-[2] sm:bottom-0 h-[140px] sm:h-[60px] w-full bg-gradient-to-t from-[#050012]"
        aria-hidden="true"
      >
        <div className="relative"></div>
      </div>
    </Fragment>
  );
};

export default HeroSection;

import { Fragment } from "react";
import HeroSection from "../component/sections/heroSection";
import Navbar from "../component/sections/navbar";
import AboutSection from "../component/sections/aboutSection";
import AdsCarouselSection from "../component/sections/adsCarouselSection";

const HomePage = () => {
    return (
        <Fragment>
            <HeroSection />
            <Navbar />
            <AboutSection />
            <AdsCarouselSection />
        </Fragment>
    )
};

export default HomePage;
import { Fragment } from "react";
import HeroSection from "../component/sections/heroSection";
import Navbar from "../component/sections/navbar";

const HomePage = () => {
    return (
        <Fragment>
            <HeroSection />
            <Navbar />
        </Fragment>
    )
};

export default HomePage;
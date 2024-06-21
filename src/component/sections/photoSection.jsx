import { Fragment } from "react";

const PhotoSection = () => {
    return (
        <Fragment>
            <div className="bg-bg-photo-gallery">
                <div className="container max-w-[344px] sm:max-w-[640px] md:max-w-[820px] lg:max-w-[1020px] mx-auto pt-[25px] pb-[46px] sm:pt-[46px] sm:pb-[46px] text-center">
                    <h2 className="text-[#050012] text-[30px] font-['montserrat-semibold']">Photo gallery</h2>

                    <div id="page" className="pt-[25px] sm:pt-[46px] sm:mx-[20px] md:mx-[0px]">
                        <div className="row">
                            <div className="column small-11 small-centered">
                                <div className="slider slider-single">
                                    <div>
                                        <a href="discover.php?pills-with-brand-color-item-2">
                                            <img className="rounded-[20px] w-full h-[185px] sm:h-[308px] md:h-[605px] object-cover" src="../assets/images/photo-gallery/img-pg-1.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="">
                                        <a href="discover.php?pills-with-brand-color-item-2">
                                        <img className="rounded-[20px] w-full h-[185px] sm:h-[308px] md:h-[605px] object-cover" src="../assets/images/photo-gallery/dummy.png" alt="" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="discover.php?pills-with-brand-color-item-2">
                                        <img className="rounded-[20px] w-full h-[185px] sm:h-[308px] md:h-[605px] object-cover" src="../assets/images/photo-gallery/img-pg-3.png" alt="" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="discover.php?pills-with-brand-color-item-2">
                                        <img className="rounded-[20px] w-full h-[185px] sm:h-[308px] md:h-[605px] object-cover" src="../assets/images/photo-gallery/img-pg-4.png" alt="" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="discover.php?pills-with-brand-color-item-2">
                                        <img className="rounded-[20px] w-full h-[185px] sm:h-[308px] md:h-[605px] object-cover" src="../assets/images/photo-gallery/img-pg-5.png" alt="" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="discover.php?pills-with-brand-color-item-2">
                                        <img className="rounded-[20px] w-full h-[185px] sm:h-[308px] md:h-[605px] object-cover" src="../assets/images/photo-gallery/img-pg-6.png" alt="" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="discover.php?pills-with-brand-color-item-2">
                                        <img className="rounded-[20px] w-full h-[185px] sm:h-[308px] md:h-[605px] object-cover" src="../assets/images/photo-gallery/img-pg-7.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="slider slider-nav">
                                    <div><img className="slider-bottom-thumbnail" src="../assets/images/photo-gallery/img-pg-1.png" alt="" /></div>
                                    <div><img className="slider-bottom-thumbnail" src="../assets/images/photo-gallery/dummy.png" alt=""></div>
                                    <div><img className="slider-bottom-thumbnail" src="../assets/images/photo-gallery/img-pg-3.png" alt=""></div>
                                    <div><img className="slider-bottom-thumbnail" src="../assets/images/photo-gallery/img-pg-4.png" alt=""></div>
                                    <div><img className="slider-bottom-thumbnail" src="../assets/images/photo-gallery/img-pg-5.png" alt=""></div>
                                    <div><img className="slider-bottom-thumbnail" src="../assets/images/photo-gallery/img-pg-6.png" alt=""></div>
                                    <div><img className="slider-bottom-thumbnail" src="../assets/images/photo-gallery/img-pg-7.png" alt=""></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </Fragment>
    )
};

export default PhotoSection;

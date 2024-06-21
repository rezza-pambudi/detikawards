import { Fragment } from "react"
import ShareButton from "../elements/shareButton/shareButton";

const AboutDescription = () => {
    return (
        <Fragment>
            <div className="text-left text-white bg-[#37353D] h-full w-full px-8 py-10 rounded-[12px] select-none">
                <h4 className="text-[20px] pb-2 font-semibold leading-[24.38px]">
                  detikcom Awards 2023: Adapt and Transform to an Era of Change
                </h4>
                <p className="text-[14px] md:text-[12px] leading-[21px]">
                  Penghargaan bergengsi yang diberikan kepada individu, merek,
                  dan lembaga di Indonesia yang telah memberikan kontribusi luar
                  biasa dalam berbagai bidang. Melalui detikcom Awards, kami
                  menghargai pencapaian yang menginspirasi, inovasi yang
                  mencuat, dan perubahan positif yang telah dilakukan.{" "}
                </p>
                <ShareButton />
              </div>
        </Fragment>
    )
};

export default AboutDescription;
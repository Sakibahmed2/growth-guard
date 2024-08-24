import React from "react";
import Typewriter from "typewriter-effect";
import TextEffect from "./TextEffect";
import bannerImg from "@/assets/bannerImg.jpg";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Container from "@/components/ui/Container";

const Banner = () => {
  return (
    <div className="mt-16 md:mt-0 mx-2 md:mx-0 my-10 py-[30px] md:bg-[#262b32] md:clip-polygon-banner md:text-white">
      <Container>
        <div className=" md:flex items-center justify-between md:gap-5">
          <div>
            <div className="text-3xl md:text-5xl font-semibold ">
              <p>Growth guard focuses on</p>
              <div className="text-green-500">
                <TextEffect />
              </div>
            </div>
            <p className=" md:text-xl to-gray-700 mt-4 mb-6">
              We carefully consider our solutions to support each and every
              stage of your growth.
            </p>
            <Button color="primary" className="text-white rounded-md mb-4">
              Get started
            </Button>
          </div>

          <div>
            <Image
              src={bannerImg}
              width={700}
              height={700}
              alt="banner image"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;

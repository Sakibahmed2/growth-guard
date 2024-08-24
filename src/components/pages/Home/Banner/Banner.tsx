import React from "react";
import Typewriter from "typewriter-effect";
import TextEffect from "./TextEffect";
import bannerImg from "@/assets/bannerImg.jpg";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const Banner = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-5">
        <div>
          <div className="text-5xl font-semibold ">
            <p>Growth guard focuses on</p>
            <div className="text-green-500">
              <TextEffect />
            </div>
          </div>
          <p className="text-xl to-gray-700 mt-4 mb-6">
            We carefully consider our solutions to support each and every stage
            of your growth.
          </p>
          <Button color="primary" className="text-white rounded-md">
            Get started
          </Button>
        </div>

        <div>
          <Image src={bannerImg} width={700} height={700} alt="banner image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

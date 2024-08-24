import Container from "@/components/ui/Container";
import React from "react";
import howItWorkImg from "@/assets/howItWorkImg.jpg";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

const HowItWorks = () => {
  return (
    <Container className="mt-32 mb-20">
      <div className="mx-2">
        <div className="md:flex justify-between gap-10 items-center">
          <div>
            <Image
              src={howItWorkImg}
              width={700}
              height={700}
              alt="how it work image"
              className="rounded-md drop-shadow-md"
            />
          </div>

          <div className="mt-5 md:mt-0">
            <div>
              <SectionTitle
                title="How it works"
                description="Here are the 3 working steps on success."
              />
            </div>

            <div className="mt-10 w-full max-w-[500px] ">
              {/* 1 */}
              <div className="flex gap-2 mt-5">
                <p className="text-2xl font-semibold bg-green-100 text-green-500 size-12 flex justify-center items-center border rounded-md">
                  1
                </p>
                <div>
                  <p className="text-left font-semibold">Collect Ideas</p>
                  <p className="mt-1 text-gray-700">
                    Nulla vitae elit libero pharetra augue dapibus. Praesent
                    commodo cursus.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="flex gap-2 my-10">
                <p className="text-2xl font-semibold bg-green-100 text-green-500 size-12 flex justify-center items-center border rounded-md">
                  2
                </p>
                <div>
                  <p className="text-left font-semibold">Data Analysis</p>
                  <p className="mt-1 text-gray-700">
                    Vivamus sagittis lacus vel augue laoreet. Etiam porta sem
                    malesuada magna.
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className="flex gap-2">
                <p className="text-2xl font-semibold bg-green-100 text-green-500 size-12 flex justify-center items-center border rounded-md">
                  3
                </p>
                <div>
                  <p className="text-left font-semibold">Finalize Product</p>
                  <p className="mt-1 text-gray-700">
                    Cras mattis consectetur purus sit amet. Aenean lacinia
                    bibendum nulla sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;

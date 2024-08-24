import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Headset, Rss, SearchCheckIcon, ShieldCheck } from "lucide-react";

const WhatWeDo = () => {
  return (
    <Container className="mt-20">
      <div className="mx-2 md:mx-0">
        <div>
          <SectionTitle
            title="What we do"
            description="The service we offer is specifically designed to meet your needs."
          />
        </div>

        <div>
          <div className="bg-slate-100 py-12 mt-10">
            <div className="grid grid-cols-2 md:grid-cols-4 w-full max-w-[1280px] mx-auto">
              <div className="md:flex justify-center items-center gap-4">
                <SearchCheckIcon size={40} />
                <div>
                  <p className="text-xl font-bold">Market Research</p>
                  <p className="text-gray-500 ">Market Research</p>
                </div>
              </div>

              <div className="md:flex justify-center items-center gap-4 ">
                <Headset size={40} />
                <div>
                  <p className="text-xl font-bold">Support 24/7</p>
                  <p className="text-gray-500">Contact us 24 hours a day</p>
                </div>
              </div>

              <div className="md:flex justify-center items-center gap-4">
                <ShieldCheck size={40} />
                <div>
                  <p className="text-xl font-bold">Secure payment</p>
                  <p className="text-gray-500">100% payment protection</p>
                </div>
              </div>

              <div className="md:flex justify-center items-center gap-4">
                <Rss size={40} />
                <div>
                  <p className="text-xl font-bold">Daily Updates </p>
                  <p className="text-gray-500">We provide daily updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhatWeDo;

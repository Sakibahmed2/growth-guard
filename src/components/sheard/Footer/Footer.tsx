import Container from "@/components/ui/Container";
import { Button, Input } from "@nextui-org/react";
import React from "react";

const Footer = () => {
  return (
    <div className="py-10 bg-[#262b32] md:clip-polygon-footer text-white">
      <Container>
        <div className="md:flex justify-between space-y-7 md:space-y-0 mx-2 pt-24">
          <div>
            <p className="text-3xl font-semibold">
              Growth<span className="text-[#17C964]">Guard</span>
            </p>
            <div className="flex flex-col space-y-2 mt-4">
              <p className="text-gray-400">
                <span className="font-semibold text-white">Hotline:</span> 1372
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-white">Phone:</span>
                (+123) 456-7898
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-white">Email:</span>
                hello@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-white">Address:</span>
                ****, ****
              </p>
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold">Information</p>
            <p className="border-2 border-green-500 w-full max-w-16 mt-1"></p>
            <div className="flex flex-col space-y-2 mt-4">
              <ul className="list-disc list-inside mt-2 text-gray-400">
                <li>About</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
                <li>Terms and condition</li>
                <li>Delivery information</li>
              </ul>
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold">Customer care</p>
            <p className="border-2 border-green-500 w-full max-w-16 mt-1"></p>
            <div className="flex flex-col space-y-2 mt-4">
              <ul className="list-disc list-inside mt-2 text-gray-400">
                <li>Help</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
                <li>Terms and condition</li>
                <li>Delivery information</li>
              </ul>
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold">Newsletter</p>
            <p className="border-2 border-green-500 w-full max-w-16 mt-1"></p>
            <div className="flex flex-col space-y-2 mt-4 w-48">
              <p className="text-gray-400">
                Sign up for our mailing list to get the latest updates & offers.
              </p>
              <div>
                <Input variant="bordered" placeholder="Subscribe" />

                <Button
                  variant="bordered"
                  color="primary"
                  className="mt-2 w-full"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

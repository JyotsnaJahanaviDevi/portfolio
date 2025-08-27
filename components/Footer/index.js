import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = () => {
  return (
    <footer id="contact" className="mt-5 laptop:mt-40 p-2 laptop:p-0">
      <div>
        <h2 className="text-2xl font-bold">Contact.</h2>

        <div className="mt-10 flex flex-col items-start gap-6 laptop:flex-row laptop:items-center">
          {/* LET'S WORK TOGETHER */}
          <div className="flex-1">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl font-bold">
              LET&apos;S WORK TOGETHER
            </h1>
          </div>

          {/* Phone & Email side by side */}
          <div className="flex gap-4">
            <a
              href="tel:+918790514510"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:bg-blue-700 hover:scale-105 flex items-center justify-center"
            >
              📞 +91 8790514510
            </a>
            <a
              href="mailto:jyotsnaicloud@gmail.com"
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:bg-green-700 hover:scale-105 flex items-center justify-center"
            >
              ✉️ jyotsnaicloud@gmail.com
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10">
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

// Footer navigation links organized by column
const footerLinks = [
  {
    title: "Rooms",
    links: [
      { label: "Rooms", href: "#facilities" },
      { label: "Facilities", href: "#facilities" },
      { label: "Offers", href: "#rating" },
      { label: "Wedding", href: "#rating" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About", href: "#rating" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#rating" },
      { label: "Location", href: "#home" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", href: "#home" },
      { label: "Twitter", href: "#home" },
      { label: "YouTube", href: "#home" },
      { label: "TikTok", href: "#home" },
    ],
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#191818] py-20 max-[680px]:py-10">
      <div className="container mx-auto px-6 max-w-[1216px]">
        <div className="flex justify-between max-[1000px]:flex-wrap gap-10">
          {/* Logo and Address */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3.5">
              <img className="w-[60px] h-10 max-[480px]:w-[30px]"  alt="Logo" src="/logo-2.svg" />
              <div className="font-text-lg-medium text-white text-2xl">
                Zerra
              </div>
            </div>
            <p className="font-text-lg-regular text-[#7a7a7a] text-lg leading-[27px] max-w-[231px] max-[480px]:text-[16px]">
              2020 Massachusetts Ave NW, Washington, DC 20036
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-[380px] max-[767px]:w-[100%] max-[500px]:flex-wrap flex gap-20">
          {footerLinks.map((column, index) => (
            <div key={index} className="flex flex-col gap-8 max-[480px]:gap-2 ">
              {column.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.href}
                  className="font-text-sm-medium text-white text-base  hover:text-gray-300 transition-colors max-[480px]:text-[16px]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col gap-[50px]">
            <h3 className="w-[174px] font-text-lg-medium text-white text-2xl max-[480px]:text-[20px] max-[800px]:w-[250px]">
              Subscribe Our Newsletter
            </h3>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between w-full">
                <Input
                  placeholder="Email Address"
                  className="border-none bg-transparent text-[#7a7a7a] placeholder:text-[#7a7a7a] font-text-sm-medium text-base focus-visible:ring-0 p-0 h-auto max-[480px]:text-[16px]"
                />
                <button className="flex items-center justify-center">
                  <ArrowUpRightIcon className="w-[30px] h-[30px] text-white" />
                </button>
              </div>
              <Separator className="bg-[#7a7a7a] h-px w-full opacity-50" />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10">
          <Separator className="bg-[#7a7a7a] h-px w-full opacity-50 mb-10" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="font-text-lg-regular text-[#7a7a7a] text-lg max-[480px]:text-[16px]">
              @2023 Zerra. All rights reserved
            </div>
            <div className="flex gap-8 mt-4 md:mt-0 max-[360px]:flex-col max-[360px]:gap-2">
              <a
                href="#"
                className="font-text-lg-regular text-[#7a7a7a] text-lg hover:text-gray-300 transition-colors max-[480px]:text-[16px]"
              >
                Terms &amp; Condditions
              </a>
              <a
                href="#"
                className="font-text-lg-regular text-[#7a7a7a] text-lg hover:text-gray-300 transition-colors max-[480px]:text-[16px]"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

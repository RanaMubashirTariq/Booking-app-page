import { ArrowUpRightIcon, ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Separator } from "../../../../components/ui/separator";

// Define navigation items for reuse
const navigationItems = [
  { name: "Home", active: true },
  { name: "Rooms", active: false },
  { name: "Facilities", active: false },
  { name: "Offers", active: false },
  { name: "Wedding", active: false },
  { name: "About", active: false },
  { name: "Blog", active: false },
];

// Define search filter options
const searchFilters = [
  {
    label: "Room type",
    value: "Select type",
    icon: <ChevronDownIcon className="h-6 w-6 text-[#191818]" />,
  },
  {
    label: "Checkin",
    value: "18 May 2023",
    icon: <ChevronDownIcon className="h-6 w-6 text-[#191818]" />,
  },
  {
    label: "Checkout",
    value: "19 May 2023",
    icon: <ChevronDownIcon className="h-6 w-6 text-[#191818]" />,
  },
  {
    label: "Rooms",
    value: "1 Room",
    icon: <ChevronDownIcon className="h-6 w-6 text-[#191818]" />,
  },
];

export const HeaderSection = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="relative w-full bg-neutral-50">
      <div className="relative w-full">
        {/* Background images */}
        <div className="relative h-[804px]  max-[767px]:h-[400px]  max-[1000px]:h-[600px] max-[800px]:h-[500px]">
          <img
            className="absolute w-full h-full object-cover"
            alt="Background"
            src="/image-5.png"
          />
          <img
            className="absolute w-full h-full bg-blend-color-burn opacity-40"
            alt="Noise texture"
            src="/noise.png"
          />
        </div>

        {/* Navigation bar */}
        <nav className="absolute top-0 left-0 w-full py-8 px-6 md:px-12 z-20 max-[680px]:py-2">
          <div className="flex justify-between items-center max-w-[1216px] mx-auto">
            {/* Logo */}
            <div className="flex items-center gap-3.5">
              <img className="w-[60px] h-10 max-[480px]:w-[30px]"  alt="Logo" src="/logo-2.svg" />
              <div className="font-medium text-white text-2xl [font-family:'Bw_Gradual_DEMO-Medium',Helvetica] max-[480px]:text-[20px]">
                Zerra
              </div>
            </div>

            {/* Navigation links - desktop */}
            <div className="hidden lg:flex items-center gap-8 max-[1022px]:hidden">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className={`$${
                    item.active
                      ? "font-text-sm-bold text-white"
                      : "font-text-sm-medium text-[#d7d7d7]"
                  } text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] cursor-pointer hover:text-white transition-colors`}
                >
                  {item.name}
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="mt-1 min-[1000px]:flex items-center gap-[9px] px-[30px] py-[15px] text-[#191818] border-[#191818] rounded hover:bg-[#191818]/10 transition-colors max-[1000px]:hidden"
            >
              <span className="font-text-lg-medium text-[length:var(--text-lg-medium-font-size)] tracking-[var(--text-lg-medium-letter-spacing)] leading-[var(--text-lg-medium-line-height)]">
                Contact
              </span>
              <ArrowUpRightIcon className="h-6 w-6" />
            </Button>

            {/* Hamburger menu icon - mobile */}
            {!mobileMenuOpen && (
              <button
                className="flex lg:hidden max-[1022px]:flex items-center justify-center p-2 text-white z-30"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                type="button"
              >
                <MenuIcon className="h-8 w-8" />
              </button>
            )}
          </div>

          {/* Mobile menu overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-60 z-40 flex flex-col">
              <div className="relative flex flex-col bg-white w-4/5 max-w-xs h-full p-8 gap-8 shadow-lg">
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 p-2 text-[#191818]"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  type="button"
                >
                  <XIcon className="h-7 w-7" />
                </button>
                <div className="flex items-center gap-3.5 mb-8">
                  <img className="w-[60px] h-10" alt="Logo" src="/logo-2.svg" />
                  <div className="font-medium text-[#191818] text-2x5[font-family:'Bw_Gradual_DEMO-Medium',Helvetica]">
                    Zerra
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  {navigationItems.map((item) => (
                    <div
                      key={item.name}
                      className={`$${
                        item.active
                          ? "font-text-lg-bold text-[#191818]"
                          : "font-text-lg-medium text-[#7a7a7a]"
                      } text-[length:var(--text-lg-medium-font-size)] tracking-[var(--text-lg-medium-letter-spacing)] leading-[var(--text-lg-medium-line-height)] cursor-pointer hover:text-[#191818] transition-colors`}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="mt-8 flex items-center gap-[9px] px-[30px] py-[15px] text-[#191818] background-none"
                >
                  <span className="font-text-lg-medium text-[length:var(--text-lg-medium-font-size)] tracking-[var(--text-lg-medium-letter-spacing)] leading-[var(--text-lg-medium-line-height)]">
                    Contact
                  </span>
                  <ArrowUpRightIcon className="h-6 w-6" />
                </Button>
              </div>
              {/* Click outside to close */}
              <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
            </div>
          )}
        </nav>

        {/* Hero content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 ">
          <div className="flex flex-col items-center gap-6 max-w-[1100px] w-full text-center">
            <h1
              className="font-display-2xl-medium text-white text-[56px] max-[1300px]:text-[44px] max-[1024px]:text-[36px] max-[768px]:text-[28px] max-[480px]:text-[22px] max-[375px]:text-[18px] font-bold tracking-tight leading-tight max-[768px]:leading-snug"
              style={{ wordBreak: 'break-word' }}
            >
              Helping You Find The Most Comfortable Place
            </h1>
            <p
              className="max-w-[687px] w-full font-text-lg-regular text-white text-[22px] max-[1300px]:text-[18px] max-[1024px]:text-[16px] max-[768px]:text-[15px] max-[480px]:text-[13px] max-[375px]:text-[12px] tracking-normal leading-relaxed mx-auto"
              style={{ wordBreak: 'break-word' }}
            >
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="absolute bottom-[200px] left-1/2 transform -translate-x-1/2 flex items-start gap-2 max-[768px]:bottom-[120px] max-[480px]:bottom-[80px]">
          <div className="w-10 h-2 bg-white rounded-[10px] max-[480px]:w-6 max-[480px]:h-1" />
          <div className="w-2 h-2 bg-white rounded opacity-40 max-[480px]:w-1.5 max-[480px]:h-1.5" />
          <div className="w-2 h-2 bg-white rounded opacity-40 max-[480px]:w-1.5 max-[480px]:h-1.5" />
          <div className="w-2 h-2 bg-white rounded opacity-40 max-[480px]:w-1.5 max-[480px]:h-1.5" />
        </div>


        {/* Search card */}
        <Card
          className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg overflow-hidden shadow-lg max-w-[1216px] w-full mx-4
            max-[1300px]:max-w-[900px] max-[1300px]:p-2 max-[1300px]:text-[12px] max-[1300px]:rounded-md max-[1300px]:shadow-md max-[1000px]:hidden"
        >
          <CardContent
            className="flex flex-col lg:flex-row items-stretch p-0 max-[1300px]:p-2 max-[1024px]:p-4 max-[768px]:p-2 max-[480px]:p-1"
          >
            <div className="flex flex-col lg:flex-row items-stretch flex-1 w-full">
              {searchFilters.map((filter, index) => (
                <React.Fragment key={filter.label}>
                  <div
                    className="flex flex-col justify-center px-8 py-6 lg:py-8 min-h-[120px] flex-1
                      max-[1300px]:px-[16px] max-[1300px]:py-4 max-[1300px]:min-h-[100px]"
                  >
                    <div className="flex flex-col gap-2">
                      <label
                        className="font-text-lg-regular text-[#7a7a7a] text-[18px] max-[1300px]:text-[15px]"
                      >
                        {filter.label}
                      </label>
                      <Select>
                        <SelectTrigger className="border-0 p-0 h-auto shadow-none focus:ring-0 bg-transparent [&>svg]:hidden group">
                          <div className="flex items-center justify-between w-full">
                            <SelectValue>
                              <span className="font-text-xl-semibold text-[#191818] text-[20px] max-[1300px]:text-[15px] tracking-normal leading-relaxed">
                                {filter.value}
                              </span>
                            </SelectValue>
                            {filter.icon}
                          </div>
                        </SelectTrigger>
                      </Select>
                    </div>
                  </div>
                  {index < searchFilters.length - 1 && (
                    <Separator
                      orientation="vertical"
                      className="h-auto bg-[#f3f3f3] hidden lg:block max-[1300px]:mx-1"
                    />
                  )}
                  {index < searchFilters.length - 1 && (
                    <Separator
                      orientation="horizontal"
                      className="w-full bg-[#f3f3f3] lg:hidden"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="flex items-center justify-center p-8 lg:p-0 lg:pr-8 max-[1300px]:p-4">
              <Button
                className="w-full lg:w-40 h-[54px] max-[1300px]:h-[44px] max-[1300px]:text-[15px] max-[1024px]:h-[48px] max-[1024px]:text-[18px] max-[768px]:h-[44px] max-[768px]:text-[16px] max-[480px]:h-[40px] max-[480px]:text-[14px] max-[375px]:text-[13px] bg-[#191818] text-white rounded font-text-xl-semibold text-[20px] tracking-normal leading-relaxed hover:bg-[#333333] transition-colors"
              >
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </header>
  );
};
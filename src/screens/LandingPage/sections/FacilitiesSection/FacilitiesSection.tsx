import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const FacilitiesSection = (): JSX.Element => {
  // Facility data for mapping
  const facilities = [
    {
      id: "01",
      title: "Indoor Swimming Pool",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page",
      image: "/image-6.png",
    },
    {
      id: "02",
      title: "Gym Training Ground",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page",
      image: "/image-7.png",
    },
    {
      id: "03",
      title: "Caffe & Restaurant",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page",
      image: "/image-8.png",
    },
  ];

  return (
    <section className="w-full bg-neutral-50">
  <div className="container mx-auto max-w-[1216px] px-6 sm:px-6 py-16  max-[680px]:py-10 ">
    {/* Header */}
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 sm:mb-20 gap-6 sm:gap-8">
      <h2 className="font-display-lg-medium text-[#191818] text-[length:var(--display-lg-medium-font-size)] tracking-[var(--display-lg-medium-letter-spacing)] leading-[var(--display-lg-medium-line-height)] max-w-full lg:max-w-[556px] max-[480px]:text-[24px]">
        Enjoy complete and best quality facilities
      </h2>
      <Button className="bg-[#191818] text-white rounded px-6 sm:px-[30px] py-3.5 h-auto hover:bg-[#333333] transition-colors max-[431px]:px-4">
        <span className="font-text-xl-semibold text-[length:var(--text-xl-semibold-font-size)] tracking-[var(--text-xl-semibold-letter-spacing)] leading-[var(--text-xl-semibold-line-height)] max-[480px]:text-[16px]">
          See more
        </span>
      </Button>
    </div>

    {/* Facilities */}
    <div className="flex flex-col gap-10">
      {facilities.map((facility, index) => (
        <React.Fragment key={facility.id}>
          <Separator className="w-full h-px bg-[#f3f3f3]" />
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
            {/* Image */}
            <div className="w-full lg:w-[592px] h-[240px] sm:h-[300px] relative">
              <img
                className="w-full h-full object-cover rounded-lg lg:rounded-none"
                alt={facility.title}
                src={facility.image}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row lg:ml-8 gap-4 sm:gap-6 flex-1">
              {/* Number */}
              <div className="lg:w-[107px] flex lg:justify-start">
                <span className="font-text-xl-medium text-[#191818] text-[length:var(--text-xl-medium-font-size)] tracking-[var(--text-xl-medium-letter-spacing)] leading-[var(--text-xl-medium-line-height)]">
                  {facility.id}
                </span>
              </div>

              {/* Text + Arrow */}
              <div className="flex flex-col justify-between flex-1 gap-5  max-[1000px]:flex-row">
                <div className="flex flex-col gap-3 sm:gap-5">
                  <h3 className="font-display-md-medium text-[#191818] text-[length:var(--display-md-medium-font-size)] tracking-[var(--display-md-medium-letter-spacing)] leading-[var(--display-md-medium-line-height)] max-[480px]:text-[18px]">
                    {facility.title}
                  </h3>
                  <p className="font-text-lg-medium text-[#7a7a7a] text-[length:var(--text-lg-medium-font-size)] tracking-[var(--text-lg-medium-letter-spacing)] leading-[var(--text-lg-medium-line-height)] max-w-full sm:max-w-[485px] max-[480px]:text-[12px]">
                    {facility.description}
                  </p>
                </div>
                <div className="flex justify-start lg:justify-start">
                  <ArrowRightIcon className="w-12 h-12 text-[#7a7a7a] max-[480px]:w-8 max-[480px]:h-8 hover:text-[#c9a96a] transition-colors cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          {index === facilities.length - 1 && (
            <Separator className="w-full h-px bg-[#f3f3f3]" />
          )}
        </React.Fragment>
      ))}
    </div>

    {/* Testimonial */}
    <div className="flex flex-col lg:flex-row  mt-40 gap-10 max-[1100px]:mt-20 max-[1100px]:mt-10">
      <div className="flex flex-col items-start gap-6 sm:gap-10 w-full lg:max-w-[600px]  max-[1000px]:w-[100%]">
        <span className="font-text-md-medium text-[#7a7a7a] text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] max-[1300px]:text-[18px] max-[1024px]:text-[16px] max-[768px]:text-[15px] max-[480px]:text-[12px]">
          WHAT THEY SAID
        </span>
        <div className="flex flex-col items-start gap-5 sm:gap-6">
          <blockquote className="font-display-sm-medium text-[#191818] text-[length:var(--display-sm-medium-font-size)] tracking-[var(--display-sm-medium-letter-spacing)] leading-[var(--display-sm-medium-line-height)] max-w-full max-[1300px]:text-[18px] max-[1024px]:text-[16px] max-[768px]:text-[18px] max-[480px]:text-[13px]">
            "A comfortable place to stay, minimalist and clean design makes it
            more comfortable. Complete facilities are also of high quality."
          </blockquote>
          <cite className="font-text-lg-bold text-[#191818] text-[length:var(--text-lg-bold-font-size)] tracking-[var(--text-lg-bold-letter-spacing)] leading-[var(--text-lg-bold-line-height)] not-italic max-[1300px]:text-[18px] max-[1024px]:text-[16px] max-[768px]:text-[14px] max-[480px]:text-[12px] ">
            Angelia Surminah
          </cite>
        </div>
        <div className="relative w-full max-w-[592px] h-[3px] bg-[#f3f3f3] ">
          <div className="w-[198px] h-[3px] bg-[#c9a96a]" />
        </div>
      </div>
      <div className="lg:ml-[128px] flex justify-center lg:justify-start w-full max[1100px]:ml-[80px]">
        <img
          className="w-full max-w-full h-[300px] sm:h-[400px] lg:h-[594px] object-cover rounded-lg lg:rounded-none"
          alt="Testimonial"
          src="/image-4.png"
        />
      </div>
    </div>
  </div>
</section>

  );
};
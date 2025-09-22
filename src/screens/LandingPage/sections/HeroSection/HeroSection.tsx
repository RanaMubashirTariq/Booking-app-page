import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

// Image data for the gallery
const galleryImages = [
  {
    src: "/image.png",
    alt: "Image",
    className: "w-full h-[693px] object-cover",
  },
  {
    src: "/image-1.png",
    alt: "Image",
    className: "w-full h-[298px] object-cover",
  },
  {
    src: "/image-2.png",
    alt: "Image",
    className: "w-full h-[379px] object-cover mb-0",
  },
  {
    src: "/image-3.png",
    alt: "Image",
    className: "w-full h-[693px] object-cover",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full bg-neutral-50 py-[120px] max-[800px]:py-[50px] ">
      <div className="container max-w-[1216px] mx-auto flex flex-col gap-[60px] max-[680px]:gap-[30px] max-[680px]:px-6">
        {/* Header content */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 max-[680px]:gap-2">
          <h1 className="font-display-XL-medium text-[#191818] text-[length:var(--display-XL-medium-font-size)] tracking-[var(--display-XL-medium-letter-spacing)] leading-[var(--display-XL-medium-line-height)] max-w-[737px] max-[1100px]:text-[44px] max-[900px]:text-[36px] max-[768px]:text-[28px] max-[480px]:text-[24px]  font-bold tracking-tight leading-tight max-w-[737px] max-[900px]:max-w-full">
            Enjoy an unforgettable stay with the best charm
          </h1>

          <div className="flex flex-col items-start gap-6 max-w-[450px]">
            <p className="font-text-lg-medium text-[#7a7a7a] text-[length:var(--text-lg-medium-font-size)] tracking-[var(--text-lg-medium-letter-spacing)] leading-[var(--text-lg-medium-line-height)] max-[1100px]:text-[18px] max-[900px]:text-[16px] max-[768px]:text-[15px] max-[480px]:text-[13px] max-[375px]:text-[12px] tracking-normal leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page
            </p>

            <Button
              variant="link"
              className="p-0 h-auto flex items-center gap-2 text-[#191818]"
            >
              <span className="font-text-xl-medium text-[length:var(--text-xl-medium-font-size)] tracking-[var(--text-xl-medium-letter-spacing)] leading-[var(--text-xl-medium-line-height)]">
                More Info
              </span>
              <ArrowUpRightIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-12 gap-4 h-[693px] max-[1100px]:h-[500px] max-[900px]:h-[400px] max-[768px]:h-[300px] max-[480px]:h-auto">
          {/* Desktop and tablet layout */}
          <div className="col-span-4 max-[768px]:col-span-12 max-[768px]:h-[180px] max-[480px]:h-[120px]">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="col-span-4 flex flex-col gap-4 max-[768px]:col-span-12 max-[768px]:flex-row max-[768px]:gap-2 max-[768px]:h-[180px] max-[480px]:h-[120px]">
            <div className="h-[298px] max-[1100px]:h-[300px] max-[920px]:h-[300px] max-[768px]:h-full max-[768px]:w-1/2 max-[480px]:h-full max-[480px]:w-1/2">
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="h-[379px] max-[1100px]:h-[300px] max-[920px]:h-[300px] max-[768px]:h-full max-[768px]:w-1/2 max-[480px]:h-full max-[480px]:w-1/2">
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          <div className="col-span-4 max-[768px]:col-span-12 max-[768px]:h-[180px] max-[480px]:h-[120px]">
            <img
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

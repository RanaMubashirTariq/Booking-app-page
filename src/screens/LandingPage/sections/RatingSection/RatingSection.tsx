import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Define the data for the stats circles to make the code more maintainable
const statsData = [
  {
    value: "100+",
    description: "Comfortable room",
  },
  {
    value: "5M+",
    description: "Happy Customers",
  },
  {
    value: "23+",
    description: "Certificate of Merit",
  },
];

export const RatingSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#191818] py-20">
      <div className="container mx-auto max-w-[1216px] px-7 flex max-[1142px]:flex-col flex-row items-start lg:items-center justify-between gap-10 max-[680px]:px-6">
        {/* Left side with heading and rating */}
        <div className="flex flex-col items-start gap-[30px] w-[402px] max-[1142px]:w-[100%] max-[1142px]:items-center">
          <h2 className="font-display-md-medium text-neutral-50 text-[length:var(--display-md-medium-font-size)] tracking-[var(--display-md-medium-letter-spacing)] leading-[var(--display-md-medium-line-height)] max-[480px]:text-[24px]">
            Hotels with the best service and quality always
          </h2>

          <Separator className="w-full bg-[#7a7a7a]" />

          <div className="flex flex-col items-start gap-1 max-[1142px]:items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-start gap-2">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    className="w-8 h-8"
                    alt="Star"
                    src="/star.svg"
                  />
                ))}
              </div>

              <span className="font-text-xl-medium text-neutral-50 text-[length:var(--text-xl-medium-font-size)] tracking-[var(--text-xl-medium-letter-spacing)] leading-[var(--text-xl-medium-line-height)]">
                5.0
              </span>
            </div>

            <p className="font-text-md-medium text-[#afafaf] text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)]">
              a five-star hotel
            </p>
          </div>
        </div>

        {/* Right side with stats circles */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-0 lg:justify-end max-[1142px]:mx-auto max-[450px]:gap-x-12 max-[450px]:items-center ">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="relative w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] rounded-full border border-solid border-[#7a7a7a] flex items-center justify-center max-[680px]:w-[150px] max-[680px]:h-[150px]" 
              style={{ marginLeft: index > 0 ? "-40px" : "0" }}
            >
              <Card className="bg-transparent border-none shadow-none">
                <CardContent className="flex flex-col items-center justify-center gap-2 p-0">
                  <span className="font-display-lg-medium text-neutral-50 text-[length:var(--display-lg-medium-font-size)] tracking-[var(--display-lg-medium-letter-spacing)] leading-[var(--display-lg-medium-line-height)] max-[680px]:text-[16px]">
                    {stat.value}
                  </span>
                  <p className="w-[124px] font-text-md-medium text-[#afafaf] text-[length:var(--text-md-medium-font-size)] text-center tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] max-[680px]:text-[12px] max-[680px]:whitespace-break">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
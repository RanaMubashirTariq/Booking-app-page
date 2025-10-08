import React from 'react'

export default function Marquee () {


    const trustedCompanies = [
        {
          alt: "Group",
          src: "/logo-1.png",
        },
        {
          alt: "Logoipsum",
          src: "/logo-1.png",
        },
        {
          alt: "Logoipsum",
          src: "/logo-1.png",
        },
        {
          alt: "Logoipsum",
          src: "/logo-1.png",
        },
        {
          alt: "Logoipsum",
          src: "/logo-1.png",
        },
      ];
    

    return(
      <div className="w-full h-auto bg-[#f4f4f4] overflow-hidden relative py-[60px] max-[1020px]:py-[40px] max-[767px]:py-[20px] px-[120px] max-[1300px]:px-[80px] max-[1200px]:px-[50px] max-[767px]:px-[25px] mt-[117px] max-[1020px]:mt-[300px] max-[500px]:mt-[500px]">
          {/* Marquee Section */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-[84px] max-[1020px]:gap-[50px] whitespace-nowrap animate-marquee">
              {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between "
                >
                  <div className="flex justify-center items-center h-[51px] w-[177px] max-[767px]:w-[130px] max-[767px]:h-10">
                    <img
                      src={company.src}
                      alt={company.alt}
                      className="object-contain h-[51px] w-[177px] max-[767px]:w-[130px] max-[767px]:h-10"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    
    )
}
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Blog post data for mapping
const blogPosts = [
  {
    id: 1,
    image: "/image-9.png",
    title: "New facilities : Large golf course at the Zerra hotel",
    date: "25 May 2023",
  },
  {
    id: 2,
    image: "/image-10.png",
    title: "Coming soon! a posh supermarket near the hotel",
    date: "12 May 2023",
  },
  {
    id: 3,
    image: "/image-11.png",
    title: "Webinar event Mental training for young people to develop",
    date: "15 Apr 2023",
  },
];

export const BlogSection = (): JSX.Element => {
  return (
    <section className="w-full bg-neutral-50 py-16 max-[680px]:py-5">
      <div className="container max-w-7xl mx-auto px-7 max-[680px]:px-6">
        <div className="flex justify-between items-center mb-10 max-[800px]:mb-2">
          <h2 className="font-display-lg-medium font-[number:var(--display-lg-medium-font-weight)] text-[#191818] text-[length:var(--display-lg-medium-font-size)] tracking-[var(--display-lg-medium-letter-spacing)] leading-[var(--display-lg-medium-line-height)] [font-style:var(--display-lg-medium-font-style)] max-[380px]:text-[24px]">
            Blog
          </h2>

          <button className="flex items-center gap-3 text-[#191818]">
            <span className="font-text-lg-regular font-[number:var(--text-lg-regular-font-weight)] text-[length:var(--text-lg-regular-font-size)] tracking-[var(--text-lg-regular-letter-spacing)] leading-[var(--text-lg-regular-line-height)] [font-style:var(--text-lg-regular-font-style)] max-[480px]:text-[16px]">
              View more
            </span>
            <ArrowRightIcon className="w-6 h-6 max-[480px]:w-4 max-[480px]:h-4" />
          </button>
        </div>

        <Separator className="mb-10 w-full" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="border-none shadow-none bg-transparent"
            >
              <CardContent className="p-0 flex flex-col gap-6">
                <img
                  className="w-full h-60 object-cover"
                  alt="Blog post image"
                  src={post.image}
                />
                <div className="flex flex-col gap-6">
                  <h3 className="font-text-xl-medium font-[number:var(--text-xl-medium-font-weight)] text-[#191818] text-[length:var(--text-xl-medium-font-size)] tracking-[var(--text-xl-medium-letter-spacing)] leading-[var(--text-xl-medium-line-height)] [font-style:var(--text-xl-medium-font-style)] max-[1300px]:text-[18px] max-[1024px]:text-[16px] max-[768px]:text-[15px] max-[480px]:text-[13px] max-[375px]:text-[12px]">
                    {post.title}
                  </h3>
                  <p className="font-text-lg-medium font-[number:var(--text-lg-medium-font-weight)] text-[#7a7a7a] text-[length:var(--text-lg-medium-font-size)] tracking-[var(--text-lg-medium-letter-spacing)] leading-[var(--text-lg-medium-line-height)] [font-style:var(--text-lg-medium-font-style)] max-[1300px]:text-[18px] max-[1024px]:text-[16px] max-[768px]:text-[15px] max-[480px]:text-[13px] max-[375px]:text-[12px]">
                    {post.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

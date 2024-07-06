import Image from "next/image";
import HeroBannerHorizontal from "@/components/herosection/horizontal";
import BadgeCross from "@/components/badges/cross";
import HeadlineSection from "@/components/headline/section";
import Chip from "@/components/chip";
import LeftImageRightContent from "@/components/leftImageRightContent";

import LoginIcon from "@mui/icons-material/Login";
import SpaIcon from "@mui/icons-material/Spa";
import TimelineIcon from "@mui/icons-material/Timeline";

export default function Home() {
  const categoryList = [
    {
      name: "Transistion",
      icon: <LoginIcon />,
    },
    {
      name: "Nature",
      icon: <SpaIcon />,
    },
    {
      name: "Technology",
      icon: <TimelineIcon />,
    },
  ];

  return (
    <main className="relative h-screen">
      <HeroBannerHorizontal
        className="h-[245px] sm:h-[345px] md:h-[500px] lg:h-[550px]"
        image={
          <Image
            src="/images/home-hero-banner.png"
            alt="home-hero-banner"
            className="object-cover object-center"
            fill
          />
        }
        headline={"Your One-Stop Shop for  Premium Sound Effects"}
        description={
          "Enhance Your Productions with our High-Quality Sound Effects Library"
        }
        buttonText={"Buy Sound Effects"}
      ></HeroBannerHorizontal>
      <BadgeCross
        firstLoop="4"
        firstContent="around 1100+ Sound"
        className="-mt-[1rem]"
      ></BadgeCross>
      <div className="container py-6">
        <HeadlineSection
          uppercase
          headline="Explore Our Featured Categories"
        ></HeadlineSection>
        <div className="mt-[40px] flex gap-4 flex-wrap">
          {categoryList.map((obj, i) => {
            return (
              <Chip
                prependIcon={obj?.icon}
                variant="outlined"
                color="bg-secondaryBg"
                className="px-[16px] md:px-[18px] lg:px-[20px] h-[40px] xl:h-[60px] text-primaryText"
                key={"cat_chip_" + i}
              >
                <h6>{obj?.name}</h6>
              </Chip>
            );
          })}
        </div>
        <div className="mt-[74px] flex flex-row flex-wrap lg:flex-nowrap gap-5 justify-between">
          <div className="basis-full lg:basis-[33.33%] shrink grow">
            <HeadlineSection
              uppercase
              headline="Top picks this week"
              description="Discover the Best Sounds of the Week: Our Top Picks for Unbeatable Audio Effects!"
            ></HeadlineSection>
          </div>
          <div className="basis-[45%] lg:basis-[33.33%] shrink">
            <HeadlineSection
              uppercase
              headline="Popular sound effects"
              description="Add Life to Your Productions with Our Extensive Collection of Popular Sound Effects!"
              textColor="text-secondaryText"
            ></HeadlineSection>
          </div>
          <div className="basis-[45%] lg:basis-[33.33%] shrink">
            <HeadlineSection
              uppercase
              headline="Editor's Pick"
              description="Discover Our Editor's Pick of the Best Sound Effects for Your Next Project!"
              textColor="text-secondaryText"
            ></HeadlineSection>
          </div>
        </div>
        <HeroBannerHorizontal
          className="h-[245px] sm:h-[345px] md:h-[500px] lg:h-[550px]"
          headline="Explore Our Extensive Sound Effects Collection"
          description={
            "Check out All Sounds Now and Take Your Audio Design to the Next Level!"
          }
          buttonText={"Explore sounds"}
          buttonVariant="grad-outlined"
        ></HeroBannerHorizontal>
      </div>
      <div className="bg-secondaryBg relative">
        <div className="container relative z-[99]">
          <LeftImageRightContent
            image={
              <Image
                src="/images/left-image-content.png"
                alt="left-image-content"
                className="object-fit object-cover"
                fill
              />
            }
            headline="Your Premier Source for Unmatched Sound Effects"
            description="Explore a Vast Library of High-Quality Sound Effects and Audio Samples,Create Customized Audio Designs, and Bring Your Projects to Life!"
            buttonVariant="gradient"
            buttonText="Check Pricing"
          ></LeftImageRightContent>
        </div>
        <div className="absolute top-0 left-0 rotate-[180deg]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="215"
            height="214"
            viewBox="0 0 115 114"
            fill="none"
          >
            <path
              opacity="0.5"
              d="M209 104.5C209 162.214 162.214 209 104.5 209C46.7862 209 0 162.214 0 104.5C0 46.7862 46.7862 0 104.5 0C162.214 0 209 46.7862 209 104.5ZM42.5544 104.5C42.5544 138.712 70.2884 166.446 104.5 166.446C138.712 166.446 166.446 138.712 166.446 104.5C166.446 70.2884 138.712 42.5544 104.5 42.5544C70.2884 42.5544 42.5544 70.2884 42.5544 104.5Z"
              fill="url(#paint0_linear_156_1538)"
            />
            <path
              opacity="0.3"
              d="M209 104.5C209 162.214 162.214 209 104.5 209C46.7862 209 0 162.214 0 104.5C0 46.7862 46.7862 0 104.5 0C162.214 0 209 46.7862 209 104.5ZM57.5549 104.5C57.5549 130.427 78.5729 151.445 104.5 151.445C130.427 151.445 151.445 130.427 151.445 104.5C151.445 78.5729 130.427 57.5549 104.5 57.5549C78.5729 57.5549 57.5549 78.5729 57.5549 104.5Z"
              fill="url(#paint1_linear_156_1538)"
            />
            <path
              d="M209 104.5C209 162.214 162.214 209 104.5 209C46.7862 209 0 162.214 0 104.5C0 46.7862 46.7862 0 104.5 0C162.214 0 209 46.7862 209 104.5ZM29.4551 104.5C29.4551 145.946 63.0539 179.545 104.5 179.545C145.946 179.545 179.545 145.946 179.545 104.5C179.545 63.0539 145.946 29.4551 104.5 29.4551C63.0539 29.4551 29.4551 63.0539 29.4551 104.5Z"
              fill="url(#paint2_linear_156_1538)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_156_1538"
                x1="3.11434e-06"
                y1="104.5"
                x2="209"
                y2="104.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DC1B73" />
                <stop offset="1" stop-color="#F47B23" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_156_1538"
                x1="3.11434e-06"
                y1="104.5"
                x2="209"
                y2="104.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DC1B73" />
                <stop offset="1" stop-color="#F47B23" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_156_1538"
                x1="3.11434e-06"
                y1="104.5"
                x2="209"
                y2="104.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DC1B73" />
                <stop offset="1" stop-color="#F47B23" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="115"
            height="114"
            viewBox="0 0 115 114"
            fill="none"
          >
            <path
              opacity="0.5"
              d="M209 104.5C209 162.214 162.214 209 104.5 209C46.7862 209 0 162.214 0 104.5C0 46.7862 46.7862 0 104.5 0C162.214 0 209 46.7862 209 104.5ZM42.5544 104.5C42.5544 138.712 70.2884 166.446 104.5 166.446C138.712 166.446 166.446 138.712 166.446 104.5C166.446 70.2884 138.712 42.5544 104.5 42.5544C70.2884 42.5544 42.5544 70.2884 42.5544 104.5Z"
              fill="url(#paint0_linear_156_1538)"
            />
            <path
              opacity="0.3"
              d="M209 104.5C209 162.214 162.214 209 104.5 209C46.7862 209 0 162.214 0 104.5C0 46.7862 46.7862 0 104.5 0C162.214 0 209 46.7862 209 104.5ZM57.5549 104.5C57.5549 130.427 78.5729 151.445 104.5 151.445C130.427 151.445 151.445 130.427 151.445 104.5C151.445 78.5729 130.427 57.5549 104.5 57.5549C78.5729 57.5549 57.5549 78.5729 57.5549 104.5Z"
              fill="url(#paint1_linear_156_1538)"
            />
            <path
              d="M209 104.5C209 162.214 162.214 209 104.5 209C46.7862 209 0 162.214 0 104.5C0 46.7862 46.7862 0 104.5 0C162.214 0 209 46.7862 209 104.5ZM29.4551 104.5C29.4551 145.946 63.0539 179.545 104.5 179.545C145.946 179.545 179.545 145.946 179.545 104.5C179.545 63.0539 145.946 29.4551 104.5 29.4551C63.0539 29.4551 29.4551 63.0539 29.4551 104.5Z"
              fill="url(#paint2_linear_156_1538)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_156_1538"
                x1="3.11434e-06"
                y1="104.5"
                x2="209"
                y2="104.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DC1B73" />
                <stop offset="1" stop-color="#F47B23" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_156_1538"
                x1="3.11434e-06"
                y1="104.5"
                x2="209"
                y2="104.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DC1B73" />
                <stop offset="1" stop-color="#F47B23" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_156_1538"
                x1="3.11434e-06"
                y1="104.5"
                x2="209"
                y2="104.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DC1B73" />
                <stop offset="1" stop-color="#F47B23" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </main>
  );
}

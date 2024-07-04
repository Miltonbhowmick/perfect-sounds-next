import Image from "next/image";
import HeroBannerHorizontal from "@/components/herosection/horizontal";
import ButtonGradiend from "@/components/button/gradient";
// import heroBanner from "@/assets/images/hero-banners/home-hero-banner.png";

export default function Home() {
  return (
    <main>
      <HeroBannerHorizontal
        image={
          <Image
            src="/images/home-hero-banner.png"
            alt="home-hero-banner"
            className="object-cover object-center"
            fill
          />
        }
        className="h-[245px] sm:h-[345px] md:h-[520px] lg:h-[620px]"
      >
        <div className="w-10/12 flex flex-col justify-center items-center">
          <h1 className="text-primaryText font-bold text-center leading-[5.5rem]">
            Your One-Stop Shop for Premium Sound Effects
          </h1>
          <p className="text-primaryText text-center">
            Enhance Your Productions with our High-Quality Sound Effects Library
          </p>
          <ButtonGradiend className="px-1" gradient></ButtonGradiend>
        </div>
      </HeroBannerHorizontal>
    </main>
  );
}

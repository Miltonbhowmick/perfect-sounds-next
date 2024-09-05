import Image from "next/image";

import HeroBannerHorizontal from "@/components/herosection/horizontal";
import AccountMobileSidebar from "@/components/sidebar/mobile-account";
import LicenseSidebar from "@/components/sidebar/license";

export default function License() {
  return (
    <main className="min-h-screen mt-24">
      <div className="relative overflow-hidden">
        <HeroBannerHorizontal
          className="h-[245px] sm:h-[345px] md:h-[360px] lg:h-[400px]"
          image={
            <Image
              src="/images/account/rectangle-banner.jpg"
              alt="rectangle-banner"
              className="object-fit opacity-60"
              fill
            />
          }
          headline={"Perfectsounds License"}
        ></HeroBannerHorizontal>
        <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gradientRight to-gradientLeft blur-[45px] md:blur-[90px] rounded-full w-[130px] h-[120px] md:w-[336px] md:h-[200px] lg:w-[436px] lg:h-[405px] absolute top-[5%] -left-[15%] lg:-left-[25%]"></div>
        <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gradientRight to-gradientLeft blur-[45px] md:blur-[90px] rounded-full w-[111px] h-[111px] md:w-[236px] md:h-[170px] lg:w-[336px] lg:h-[305px] absolute -bottom-[15%]  -right-[8%] lg:-right-[15%]"></div>
      </div>
      <div className="container p-auto py-4 lg:p-[90px] flex flex-col lg:flex-row gap-5">
        <div className="basis-auto lg:basis-[600px] h-max p-[10px] bg-transparent lg:bg-secondaryBg rounded-[20px]">
          <LicenseSidebar className={"hidden lg:block"}></LicenseSidebar>
          <AccountMobileSidebar
            className={"block lg:hidden"}
          ></AccountMobileSidebar>
        </div>
        <div className="basis-auto grow shrink flex flex-col gap-5">
          <div className="px-5 py-2 lg:px-14 lg:py-5 bg-secondaryBg rounded-[20px] flex flex-col gap-2 md:gap-4">
            <h5 className="text-primaryText font-medium">
              Stock Music License
            </h5>
            <p className="text-primaryText font-regular">
              Terms under the Perfectsounds Stock Music Free License can be used
              in your commercial and non-commercial projects for free.
            </p>
            <p className="text-primaryText font-regular">
              You’re permitted to download, copy, modify, distribute and
              publicly perform the Music Items on any web or social media
              platform, including internet-based video on demand services,
              podcasts and advertisements.
            </p>
            <p className="text-primaryText font-regular">
              You’re not allowed to use them in CDs or DVDs, video games or tv
              or radio broadcast. You’re also not allowed to remix them (or
              incorporate in a music-only track), claim them as your own or
              register them on any rights management service.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

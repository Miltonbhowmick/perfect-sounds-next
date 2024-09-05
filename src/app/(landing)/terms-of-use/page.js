import Image from "next/image";
import Link from "next/link";

import HeroBannerHorizontal from "@/components/herosection/horizontal";
import AccountMobileSidebar from "@/components/sidebar/mobile-account";
import LicenseSidebar from "@/components/sidebar/license";

export default function TermsOfUse() {
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
          headline={"Terms Of Use"}
        ></HeroBannerHorizontal>
        <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gradientRight to-gradientLeft blur-[45px] md:blur-[90px] rounded-full w-[130px] h-[120px] md:w-[336px] md:h-[200px] lg:w-[436px] lg:h-[405px] absolute top-[5%] -left-[15%] lg:-left-[25%]"></div>
        <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gradientRight to-gradientLeft blur-[45px] md:blur-[90px] rounded-full w-[111px] h-[111px] md:w-[236px] md:h-[170px] lg:w-[336px] lg:h-[305px] absolute -bottom-[15%]  -right-[8%] lg:-right-[15%]"></div>
      </div>
      <div className="container p-auto py-4 lg:p-[90px] flex flex-col lg:flex-row gap-5">
        <div className="basis-auto grow shrink flex flex-col gap-5">
          <div className="px-5 py-2 lg:px-14 lg:py-5 bg-secondaryBg rounded-[20px] flex flex-col gap-2 md:gap-4">
            <h6 className="text-primaryText font-regular">
              The Perfectsounds User Terms, our Privacy Policy and the
              Perfectsounds License apply to your use of Perfectsounds.co and
              any other Perfectsounds-branded services owned or operated by
              Reserved Training Ltd (we, us, our). We’ll try to keep this short{" "}
            </h6>
            <ol className="list-decimal ms-4">
              <li className="text-primaryText font-regular">
                <h6>
                  Perfectsounds is an online content service where we make
                  certain content available for download (Items).
                </h6>
              </li>
              <li className="text-primaryText font-regular">
                <h6>
                  Your use of our Items is subject to our Perfectsounds License.
                  There are a couple of important limits to your license rights:
                  you must not (a) use an Item to build a service or product
                  that is similar or competitive with Perfectsounds (or try to);
                  (b) aggregate or collate an Item(s) and make available on a
                  stock or inventory basis; (c) use an Item in the context of
                  adult content (such as nudity or sexual services), supply of
                  weapons or gambling services, exploitation of children, hate
                  speech, defamatory content, misleading or deceptive conduct,
                  or any illegal activity
                </h6>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}

import HeroBannerAuth from "@/components/herosection/auth";
import Image from "next/image";
import SignupForm from "@/components/forms/signup";

export default function SignUp() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row">
      <HeroBannerAuth
        image={
          <Image
            src="/images/account/login-banner.png"
            alt="login-banner"
            className="object-fit object-cover opacity-50"
            fill
          />
        }
        headline={"The Ultimate Destination for Premium Sound Effects"}
        description={"Choose Your Plan and Enhance Your Audio Experience Today"}
        buttonText={"Buy Sound Effects"}
        href="/"
      />
      <div className="lg:basis-[50%] min-h-screen py-2 bg-secondaryBg flex justify-center items-center">
        <div className="container h-full flex justify-center items-center">
          <div className="relative w-full lg:w-[70%] flex flex-col gap-4">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-[90px] h-[50px] md:w-[100px] md:h-[60px]">
                <Image
                  src="/images/company-logo/perfectsounds-logo-white.png"
                  alt="perfectsounds-logo-white"
                  fill
                />
              </div>
            </div>
            <h4 className="hidden lg:block text-primaryText font-bold text-center lg:text-start">
              Create an account for free
            </h4>
            <h1 className="block lg:hidden text-primaryText font-bold text-center lg:text-start">
              Create an account for free
            </h1>
            <p className="text-primaryText font-medium text-center lg:text-start">
              Enhance Your Productions with our High-Quality Sound Effects
              Library
            </p>
            <SignupForm className="mt-3"></SignupForm>
          </div>
        </div>
      </div>
    </main>
  );
}

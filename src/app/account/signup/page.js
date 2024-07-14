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
      <div className="lg:basis-[50%] bg-secondaryBg flex justify-center items-center">
        <div className="relative w-[70%] flex flex-col gap-2">
          <div className="relative w-[58px] h-[30px] md:w-[120px] md:h-[60px]">
            <Image
              src="/images/company-logo/perfectsounds-logo-white.png"
              alt="perfectsounds-logo-white"
              fill
            />
          </div>
          <h4 className="text-primaryText font-bold">
            Create an account for free
          </h4>
          <p className="text-primaryText font-medium">
            Enhance Your Productions with our High-Quality Sound Effects Library
          </p>
          <SignupForm className="mt-3"></SignupForm>
        </div>
      </div>
    </main>
  );
}

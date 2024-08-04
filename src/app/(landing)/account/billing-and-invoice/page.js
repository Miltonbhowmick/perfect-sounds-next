import Image from "next/image";
import Link from "next/link";

import HeroBannerHorizontal from "@/components/herosection/horizontal";
import AccountSidebar from "@/components/sidebar/account";
import ButtonGradiend from "@/components/button/gradient";
import EditProfileForm from "@/components/forms/edit-profile";
import ButtonGradiendOutlined from "@/components/button/gradientOutlined";
import AccountMobileSidebar from "@/components/sidebar/mobile-account";

export default function AccountBillingInvoice() {
  return (
    <div>
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
          headline={"My Account"}
          description={
            "Want to get in touch? We’d love to hear from you. Here’s how you can reach us:"
          }
        ></HeroBannerHorizontal>
        <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gradientRight to-gradientLeft blur-[45px] md:blur-[90px] rounded-full w-[130px] h-[120px] md:w-[336px] md:h-[200px] lg:w-[436px] lg:h-[405px] absolute top-[5%] -left-[15%] lg:-left-[25%]"></div>
        <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gradientRight to-gradientLeft blur-[45px] md:blur-[90px] rounded-full w-[111px] h-[111px] md:w-[236px] md:h-[170px] lg:w-[336px] lg:h-[305px] absolute -bottom-[15%]  -right-[8%] lg:-right-[15%]"></div>
      </div>
      <div className="container p-auto py-4 lg:p-[90px] flex flex-col lg:flex-row gap-5">
        <div className="basis-auto lg:basis-[300px] h-max p-[10px] bg-transparent lg:bg-secondaryBg rounded-[20px]">
          <AccountSidebar className={"hidden lg:block"}></AccountSidebar>
          <AccountMobileSidebar
            className={"block lg:hidden"}
          ></AccountMobileSidebar>
        </div>

        <div className="basis-auto grow shrink flex flex-col gap-5">
          <div className="px-5 py-2 lg:px-14 lg:py-5 bg-secondaryBg rounded-[20px] flex flex-col gap-2 md:gap-4">
            <h4 className="text-primaryText font-bold">Profile Overview</h4>
            <h5 className="text-primaryText font-medium">Account Type</h5>
            <p className="text-primaryText font-medium">
              You currently don’t have any subscription. Subscribe to one of our
              plans and start downloading.
            </p>
            <ButtonGradiend
              className="mt-1 xs:mt-2 md:mt-4 xl:mt-7 px-5 h-[35px] md:h-[45px] lg:h-[55px] w-max rounded-lg"
              gradient
            >
              <h6 className="text-primaryText font-medium">View Pricing</h6>
            </ButtonGradiend>
          </div>
          <div className="px-5 py-2 lg:px-14 lg:py-5 bg-secondaryBg rounded-[20px] flex flex-col gap-2 md:gap-4">
            <h4 className="text-primaryText font-bold">Payment Method</h4>
            <p className="text-primaryText font-medium">
              View and Edit your Payment Method
            </p>
            <div className="mt-6 flex flex-col gap-5">
              <div className="flex justify-between">
                <div className="p-2 bg-white w-max rounded-xl">
                  <div className="relative w-[60px] h-[30px] md:w-[100px] md:h-[50px]">
                    <Image
                      src="/images/payment/visa-logo.png"
                      alt="visa-logo"
                      fill
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <a className="text-primaryText font-bold">Edit</a>
                  <span className="text-gradientLeft font-bold">|</span>{" "}
                  <a className="text-gradientLeft font-bold">Delete</a>
                </div>
              </div>

              <p className="text-primaryText font-medium">
                <span>*****1234</span> | <span>Expire 06/27</span>
              </p>
            </div>
            <h5 className="mt-3 text-primaryText font-medium">Jacob Hardman</h5>
            <ButtonGradiendOutlined className="mt-1 xs:mt-2 md:mt-4 xl:mt-7 w-max h-[35px] md:h-[45px] lg:h-[55px] rounded-xl">
              <h6 className="bg-gradient-to-r from-gradientLeft to-gradientRight bg-clip-text text-transparent font-bold">
                Add a payment method
              </h6>
            </ButtonGradiendOutlined>
          </div>
          <div className="px-5 py-2 lg:px-14 lg:py-5 bg-secondaryBg rounded-[20px] flex flex-col gap-1">
            <h4 className="text-primaryText font-bold">Invoice</h4>
            <p className="text-primaryText font-medium">
              You Have not any any Invoce
            </p>
            <ButtonGradiend
              className="mt-5 px-5 h-[35px] md:h-[45px] lg:h-[55px] w-max rounded-lg bg-tertiaryBg"
              // gradient
              disabled
            >
              <h6 className="text-secondaryBg font-medium">Delete Account</h6>
            </ButtonGradiend>
          </div>
        </div>
      </div>
    </div>
  );
}

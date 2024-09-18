"use client";

import HeroBannerAuth from "@/components/herosection/auth";
import Image from "next/image";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { sendVerificationCode, verifyCode } from "@/services/user.service";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Loading from "../loading";

export default function Verification(searchParams) {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);

  const queryParams = searchParams.searchParams;
  const email = queryParams?.email || null;
  const reason = queryParams?.reason || null;

  const resetTimer = () => {
    setTimer(60);
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [timer]);

  const handleResendVerificationCodeApi = () => {
    let payload = {
      email: email,
      reason: reason,
      code: otp,
    };
    sendVerificationCode(payload)
      .then((data) => {
        toast.success("OTP success send");
        resetTimer();
      })
      .catch((e) => {
        toast.error("OTP not send!");
      });
  };

  const handleVerifyCodeApi = () => {
    let payload = {
      email: email,
      code: otp,
    };
    setLoading(true);
    verifyCode(payload)
      .then((data) => {
        toast.success("Verification is successfull!");
        setLoading(false);
        router.push("/signin", { scroll: false });
      })
      .catch((e) => {
        toast.error("Verification is unsuccessfull!");
        setLoading(false);
      });
  };

  return (
    <main className="min-h-screen flex flex-col lg:flex-row">
      <HeroBannerAuth
        image={
          <Image
            src="/images/account/login-banner.png"
            alt="login-banner"
            className="object-fit object-cover opacity-50"
            fill
            priority
          />
        }
        headline={"The Ultimate Destination for Premium Sound Effects"}
        description={"Choose Your Plan and Enhance Your Audio Experience Today"}
        buttonText={"Buy Sound Effects"}
        href="/"
      />
      <div className="lg:basis-[50%] h-screen bg-secondaryBg">
        <div className="container h-full flex justify-center items-center">
          <div className="relative w-full lg:w-[70%] flex flex-col gap-4">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-[90px] h-[50px] md:w-[120px] md:h-[60px]">
                <Image
                  src="/images/company-logo/perfectsounds-logo-white.png"
                  alt="perfectsounds-logo-white"
                  fill
                />
              </div>
            </div>
            <h4 className="hidden lg:block text-primaryText font-bold text-center lg:text-start">
              Verification
            </h4>
            <h1 className="block lg:hidden text-primaryText font-bold text-center lg:text-start">
              Verification
            </h1>
            <p className="text-primaryText font-medium text-center lg:text-start">
              Verify your code properly
            </p>
            <div className="flex">
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputType="number"
                renderSeparator={<span style={{ width: "10px" }}> </span>}
                inputStyle="custom-hide-number-arrows w-12 md:w-16 text-center text-h6-sm md:text-h3-md aspect-square focus:outline-none focus:ring-1 rounded-md py-3 ring-[0.4px] ring-gray-500"
                renderInput={(props) => (
                  <input {...props} style={{ width: "" }} />
                )}
                style={{ gap: "4px" }}
              ></OTPInput>
            </div>
            <div className="flex justify-center">
              <h3 className="text-primaryText">
                00:{timer > 9 ? timer : "0" + timer}
              </h3>
            </div>
            <p className="text-primaryText font-bold">
              Want verification code again?
              <a
                onClick={handleResendVerificationCodeApi}
                className={
                  (timer > 0
                    ? "pointer-events-none line-through"
                    : "pointer-events-auto underline") +
                  " " +
                  "ms-1 text-gradientRight  cursor-pointer font-bold	"
                }
              >
                Resend Code
              </a>
            </p>
            <button
              onClick={handleVerifyCodeApi}
              disabled={timer === 0}
              className={`px-[20px] py-[15px] bg-gradient-to-r from-gradientLeft to-gradientRight rounded-lg ${
                timer === 0 ? "opacity-25" : ""
              }`}
            >
              <h6 className="text-primaryText font-bold">Submit</h6>
            </button>
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </main>
  );
}

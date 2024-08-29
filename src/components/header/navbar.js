"use client";

import ButtonGradiend from "../button/gradient";
import Link from "next/link";
import { getProfile } from "@/store/modules/user";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Navbar({ className }) {
  const router = useRouter();
  const profile = useSelector(getProfile);

  const handleSignout = () => {
    const ck = Cookies.remove("PERFECTSOUND");
    router.push("/signin");
  };

  return (
    <nav className={`${className} bg-secondaryBg fixed z-[999] w-full`}>
      <div className="container">
        <div className="py-2 lg:h-[100px] flex justify-between items-center">
          <div className="basis-[30%] shrink grow-0 flex gap-2 items-center">
            <svg
              className="w-[20px]"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M21.875 21.875L27.5 27.5"
                stroke="#828282"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25 13.75C25 7.5368 19.9633 2.5 13.75 2.5C7.5368 2.5 2.5 7.5368 2.5 13.75C2.5 19.9633 7.5368 25 13.75 25C19.9633 25 25 19.9633 25 13.75Z"
                stroke="#828282"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <input
              className="text-secondaryText bg-transparent outline-0"
              placeholder="Search for Sound effect"
            />
          </div>
          <div className="basis-[40%] shrink grow flex justify-center">
            <Link href="/">
              <img
                className="md:w-[80px] lg:w-[120px]"
                src="/images/company-logo/perfectsounds-logo-white.png"
              />
            </Link>
          </div>
          <ul className="basis-[30%] shrink flex gap-4 lg:gap-7 justify-end items-center">
            <li>
              <Link
                href="/price"
                className="text-primaryText text-h3 font-medium"
              >
                <h6>Plan</h6>
              </Link>
            </li>
            {profile === null ? (
              <>
                <li>
                  <Link
                    href="/signup"
                    className="text-primaryText text-h3 font-medium"
                  >
                    Sign up
                  </Link>
                </li>
                <li>
                  <ButtonGradiend
                    href={"/signin"}
                    className="text-primaryText text-h3 px-[16px] py-[10px] rounded-full"
                    gradient
                  >
                    <span className="leading-none">Sign in</span>
                  </ButtonGradiend>
                </li>
              </>
            ) : (
              <li>
                <ButtonGradiend
                  onClick={handleSignout}
                  className="text-primaryText text-h3 px-[16px] py-[10px] rounded-full"
                  gradient
                >
                  <span className="leading-none">Sign Out</span>
                </ButtonGradiend>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

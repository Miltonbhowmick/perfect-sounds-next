"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const MobileNavbar = ({ className }) => {
  const [showMenuList, setShowMenuList] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    setShowMenuList(false);
    setShowSearchBox(false);
  }, [pathName]);

  return (
    <nav className={`${className} relative z-[10] bg-secondaryBg`}>
      <div className="container">
        <div className="h-[70px] flex justify-between items-center">
          <div
            onClick={() => {
              setShowSearchBox(!showSearchBox);
              setShowMenuList(false);
            }}
            className="relative w-[24px] h-[24px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.5 17.5L22 22"
                stroke="#828282"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                stroke="#828282"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {showSearchBox && (
            <div className="bg-tertiaryBg absolute top-[70px] left-0 right-0">
              <div className="container py-2 flex gap-2 items-center">
                <div className="relative w-[24px] h-[24px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17.5 17.5L22 22"
                      stroke="#828282"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                      stroke="#828282"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-primaryText">Search for Sound effect</p>
              </div>
            </div>
          )}
          <div className="basis-[auto] shrink grow flex justify-center">
            <Link href="/" scroll={false}>
              <img
                className="w-[76px] h-[36px]"
                src="/images/company-logo/perfectsounds-logo-white.png"
              />
            </Link>
          </div>
          <div
            onClick={() => {
              setShowMenuList(!showMenuList);
              setShowSearchBox(false);
            }}
            className="relative w-[24px] h-[24px]"
          >
            {showMenuList === false ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 5H20"
                  stroke="#828282"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12H20"
                  stroke="#828282"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 19H20"
                  stroke="#828282"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.0005 5L5.00049 19M5.00049 5L19.0005 19"
                  stroke="#828282"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>

          {showMenuList && (
            <div className="bg-tertiaryBg absolute top-[70px] left-0 right-0">
              <div className="container py-2">
                <ul className="flex flex-col">
                  <li className="py-2">
                    <Link
                      href="/discover"
                      scroll={false}
                      className="text-primaryText"
                    >
                      Plan
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/signup"
                      scroll={false}
                      className="text-primaryText"
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/signin"
                      scroll={false}
                      className="text-primaryText"
                    >
                      Sign In
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;

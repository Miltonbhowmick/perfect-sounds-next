"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import classNames from "classnames";

const AccountMobileSidebar = ({ className }) => {
  const routerPath = usePathname();
  const activeClassNames = "bg-gradientRight rounded-lg";
  const [activeSidebar, setActiveSidebar] = useState();

  useEffect(() => {
    if (routerPath === "/account") setActiveSidebar(1);
    else if (routerPath === "/account/favourites") {
      setActiveSidebar(2);
    } else if (routerPath === "/account/downloads") {
      setActiveSidebar(3);
    } else if (routerPath === "/account/billing-and-invoice") {
      setActiveSidebar(4);
    }
  }, [routerPath]);

  return (
    <div className={className}>
      <ul className="flex flex-row gap-4 overflow-x-auto py-4 custom-scrollbar">
        <li
          className={`${
            activeSidebar === 1 ? "bg-gradientRight " : "bg-secondaryBg"
          } rounded-lg h-max`}
        >
          <Link href="/account" className="flex gap-2 items-center p-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
            <h6 className="text-primaryText w-max">Profile</h6>
          </Link>
        </li>
        <li
          className={`${
            activeSidebar === 2 ? "bg-gradientRight" : "bg-secondaryBg"
          } rounded-lg h-max`}
        >
          <Link
            href="/account/favourites"
            scroll={false}
            className="flex gap-2 items-center p-3 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.22172 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <h6 className="text-primaryText w-max">Favorites</h6>
          </Link>
        </li>
        <li
          className={`${
            activeSidebar === 3 ? "bg-gradientRight" : "bg-secondaryBg"
          }  rounded-lg h-max`}
        >
          <Link
            href="/account/downloads"
            scroll={false}
            className="flex gap-2 items-center p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M12 16V8M12 16C11.2998 16 9.99153 14.0057 9.5 13.5M12 16C12.7002 16 14.0085 14.0057 14.5 13.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h6 className="text-primaryText w-max">Downloads</h6>
          </Link>
        </li>
        <li
          className={`${
            activeSidebar === 4 ? "bg-gradientRight" : "bg-secondaryBg"
          } rounded-lg w-max h-max`}
        >
          <Link
            href="/account/billing-and-invoice"
            scroll={false}
            className="flex gap-2 items-center p-3 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20.016 2C18.9026 2 18 4.68629 18 8H20.016C20.9876 8 21.4734 8 21.7741 7.66455C22.0749 7.32909 22.0225 6.88733 21.9178 6.00381C21.6414 3.67143 20.8943 2 20.016 2Z"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M18 8.05426V18.6458C18 20.1575 18 20.9133 17.538 21.2108C16.7831 21.6971 15.6161 20.6774 15.0291 20.3073C14.5441 20.0014 14.3017 19.8485 14.0325 19.8397C13.7417 19.8301 13.4949 19.9768 12.9709 20.3073L11.06 21.5124C10.5445 21.8374 10.2868 22 10 22C9.71321 22 9.45546 21.8374 8.94 21.5124L7.02913 20.3073C6.54415 20.0014 6.30166 19.8485 6.03253 19.8397C5.74172 19.8301 5.49493 19.9768 4.97087 20.3073C4.38395 20.6774 3.21687 21.6971 2.46195 21.2108C2 20.9133 2 20.1575 2 18.6458V8.05426C2 5.20025 2 3.77325 2.87868 2.88663C3.75736 2 5.17157 2 8 2H20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6H14"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 10H6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 10.875C11.6716 10.875 11 11.4626 11 12.1875C11 12.9124 11.6716 13.5 12.5 13.5C13.3284 13.5 14 14.0876 14 14.8125C14 15.5374 13.3284 16.125 12.5 16.125M12.5 10.875C13.1531 10.875 13.7087 11.2402 13.9146 11.75M12.5 10.875V10M12.5 16.125C11.8469 16.125 11.2913 15.7598 11.0854 15.25M12.5 16.125V17"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <h6 className="text-primaryText w-max">Billing & Invoice</h6>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountMobileSidebar;

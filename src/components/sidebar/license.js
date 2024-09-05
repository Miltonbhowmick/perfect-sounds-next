"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import classNames from "classnames";

const LicenseSidebar = ({ className, ...props }) => {
  const [activeSidebar, setActiveSidebar] = useState(0);

  //   useEffect(() => {
  //     if (routerPath === "/account") setActiveSidebar(1);
  //     else if (routerPath === "/account/favourites") {
  //       setActiveSidebar(2);
  //     } else if (routerPath === "/account/downloads") {
  //       setActiveSidebar(3);
  //     } else if (routerPath === "/account/billing-and-invoice") {
  //       setActiveSidebar(4);
  //     }
  //   }, [routerPath]);

  return (
    <div className={classNames(className)}>
      <ul className="flex flex-col">
        <li
          className={`${
            activeSidebar === 0 ? "bg-gradientRight" : ""
          } rounded-lg`}
        >
          <a className="flex gap-2 items-center p-4">
            <h5 className="text-primaryText">Stock Music License</h5>
          </a>
        </li>
        <li
          className={`${
            activeSidebar === 1 ? "bg-gradientRight" : ""
          } rounded-lg`}
        >
          <a className="flex gap-2 items-center p-4">
            <h5 className="text-primaryText">Sound Effects License</h5>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LicenseSidebar;

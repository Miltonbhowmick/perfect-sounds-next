import Link from "next/link";

const MobileNavbar = ({ className }) => {
  return (
    <nav className={`${className} relative bg-secondaryBg`}>
      <div className="container">
        <div className="h-[70px] flex justify-between items-center">
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
          <div className="basis-[auto] shrink grow flex justify-center">
            <Link href="/">
              <img
                className="w-[76px] h-[36px]"
                src="/images/company-logo/perfectsounds-logo-white.png"
              />
            </Link>
          </div>
          <div className="relative w-[24px] h-[24px]">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;

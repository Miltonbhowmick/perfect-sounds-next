import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterBottom = () => {
  return (
    <div className="container">
      <div className="w-100 flex justify-center py-[14px] md:py-[50px]">
        <div className="w-[90%] md:w-[50%] flex flex-col gap-4 justify-center items-center">
          <div className="relative w-[58px] h-[30px] md:w-[195px] md:h-[102px]">
            <Image
              src="/images/company-logo/perfectsounds-logo-white.png"
              alt="perfectsounds-logo-white"
              fill
            />
          </div>
          <p className="text-center text-secondaryText">
            PerfectSounds is owned and operated by Reserved Training Limited
            Company number 13663798 22 3a Carlton Road Bournemouth Dorset Bh1
            3TG
          </p>
          <div className="w-full flex flex-col lg:flex-row gap-5">
            <div className="w-full flex gap-0 justify-between">
              <div className="basis-1/3 shrink grow flex flex-col gap-6">
                <h5 className="text-primaryText leading-[25px]">Product</h5>
                <ul className="flex flex-col gap-2">
                  <li>
                    <a className="text-secondaryText">Browse Sounds</a>
                  </li>
                  <li>
                    <a className="text-secondaryText">Plan</a>
                  </li>
                </ul>
              </div>
              <div className="basis-1/3 shrink grow flex flex-col gap-6">
                <h5 className="text-primaryText leading-[25px]">Company</h5>
                <ul className="flex flex-col gap-2">
                  <li>
                    <a className="text-secondaryText">Contract</a>
                  </li>
                </ul>
              </div>
              <div className="basis-1/3 shrink grow flex flex-col gap-6">
                <h5 className="text-primaryText leading-[25px]">Legal</h5>
                <ul className="flex flex-col gap-2">
                  <li>
                    <a className="text-secondaryText">License</a>
                  </li>
                  <li>
                    <a className="text-secondaryText">Terms of Use</a>
                  </li>
                  <li>
                    <a className="text-secondaryText">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="flex flex-row justify-center gap-[20px]">
              <li className="rounded-full overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M30 15.0919C30 6.75567 23.2837 -0.00183105 15 -0.00183105C6.71247 4.39454e-05 -0.00378418 6.75567 -0.00378418 15.0938C-0.00378418 22.6257 5.48247 28.8694 12.6525 30.0019V19.455H8.84622V15.0938H12.6562V11.7657C12.6562 7.98379 14.8968 5.89504 18.3225 5.89504C19.965 5.89504 21.6806 6.18942 21.6806 6.18942V9.90192H19.7887C17.9268 9.90192 17.3456 11.0663 17.3456 12.2607V15.0919H21.5043L20.8406 19.4532H17.3437V30C24.5137 28.8675 30 22.6238 30 15.0919Z"
                    fill="#828282"
                  />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <g clipPath="url(#clip0_28_1182)">
                    <path
                      d="M15 10C13.6739 10 12.4021 10.5268 11.4645 11.4645C10.5268 12.4021 10 13.6739 10 15C10 16.3261 10.5268 17.5979 11.4645 18.5355C12.4021 19.4732 13.6739 20 15 20C16.3261 20 17.5979 19.4732 18.5355 18.5355C19.4732 17.5979 20 16.3261 20 15C20 13.6739 19.4732 12.4021 18.5355 11.4645C17.5979 10.5268 16.3261 10 15 10Z"
                      fill="#828282"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 0C6.61305 0 4.32387 0.948212 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9L0 21C0 23.3869 0.948212 25.6761 2.63604 27.364C4.32387 29.0518 6.61305 30 9 30H21C23.3869 30 25.6761 29.0518 27.364 27.364C29.0518 25.6761 30 23.3869 30 21V9C30 6.61305 29.0518 4.32387 27.364 2.63604C25.6761 0.948212 23.3869 0 21 0L9 0ZM8 15C8 13.1435 8.7375 11.363 10.0503 10.0503C11.363 8.7375 13.1435 8 15 8C16.8565 8 18.637 8.7375 19.9497 10.0503C21.2625 11.363 22 13.1435 22 15C22 16.8565 21.2625 18.637 19.9497 19.9497C18.637 21.2625 16.8565 22 15 22C13.1435 22 11.363 21.2625 10.0503 19.9497C8.7375 18.637 8 16.8565 8 15ZM22 8H24V6H22V8Z"
                      fill="#828282"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_28_1182">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <g clipPath="url(#clip0_28_1183)">
                    <path
                      d="M17.7928 12.7031L28.7208 0H26.1309L16.6425 11.0297L9.06376 0H0.32251L11.783 16.6791L0.32251 30H2.91235L12.9328 18.3523L20.9363 30H29.6775L17.7921 12.7031H17.7928ZM14.2458 16.8258L13.0845 15.165L3.8454 1.94953H7.82321L15.2789 12.615L16.44 14.2758L26.1321 28.1391H22.1548L14.2458 16.8265V16.8258Z"
                      fill="#828282"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_28_1183">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;

import ButtonGradiend from "../button/gradient";

export default function Navbar() {
  return (
    <nav className="relative bg-secondaryBg">
      <div className="container">
        <div className="lg:h-[100px] flex justify-between items-center">
          <div className="basis-[20%] shrink-1 grow-0 flex gap-2 items-center">
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25 13.75C25 7.5368 19.9633 2.5 13.75 2.5C7.5368 2.5 2.5 7.5368 2.5 13.75C2.5 19.9633 7.5368 25 13.75 25C19.9633 25 25 19.9633 25 13.75Z"
                stroke="#828282"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
            <span className="text-secondaryText text-[20px]">
              Search for Sound effect
            </span>
          </div>
          <div className="basis-[auto] shrink-1 grow-1">
            <img
              className="w-[120px]"
              src="/images/company-logo/perfectsounds-logo-white.png"
            />
          </div>
          <ul className="basis-[20%] shrink-1 grow-0 flex gap-7 justify-end items-center">
            <li>
              <a className="text-primaryText text-h3 font-medium">Plan</a>
            </li>
            <li>
              <a className="text-primaryText text-h3 font-medium">Sign up</a>
            </li>
            <li>
              {/* <a className="px-2 bg-gradient-primaryButton text-primaryText text-h3 font-medium">
                Log in
              </a> */}
              <ButtonGradiend
                gradient
                className="text-primaryText text-h3 px-[16px] py-[10px] rounded-full"
              >
                <span className="leading-none">Log in</span>
              </ButtonGradiend>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useCallback, useEffect, useRef } from "react";
import ButtonGradiend from "../button/gradient";

const SuccessfullModal = ({
  showModal,
  hideModal,
  headline,
  description,
  className,
  ...props
}) => {
  const modalWrapperRef = useRef();

  const overlayHandler = useCallback((e) => {
    if (!modalWrapperRef?.current?.contains(e.target)) {
      hideModal(false);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("click", overlayHandler);
    });
    return () => {
      window.removeEventListener("click", overlayHandler);
    };
  }, []);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-x-hidden flex justify-center items-center bg-primaryBg">
          <div
            ref={modalWrapperRef}
            className="relative max-w-[846px] max-h-[695px] mx-5 p-[30px] md:p-[70px] bg-secondaryBg rounded-[10px] md:rounded-[20px] drop-shadow-primary"
          >
            <a
              onClick={() => {
                hideModal(false);
              }}
              className="p-auto md:p-1 absolute top-[8px] right-[8px] md:top-[30px] md:right-[30px] border-gradientLeft border rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-[14px] h-[14px] md:w-[24px] md:h-[24px]"
              >
                <path
                  d="M19 4.99988L5 18.9999M5 4.99988L19 18.9999"
                  stroke="#DC1B73"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div className="flex flex-col items-center gap-5 md:gap-6 lg:gap-10">
              <div className="p-[10px] md:p-[30px] w-max bg-gradient-to-r from-gradientLeft to-gradientRight rounded-full drop-shadow-gradient-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 71 74"
                  fill="none"
                  className="w-[30px] h-[30px] md:w-[64px] md:h-[64px]"
                >
                  <mask
                    id="mask0_549_473"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="71"
                    height="74"
                  >
                    <path
                      d="M35.5015 3.66675L44.2565 10.0534L55.0948 10.0334L58.4231 20.3467L67.2031 26.7001L63.8348 37.0001L67.2031 47.3001L58.4231 53.6534L55.0948 63.9667L44.2565 63.9467L35.5015 70.3334L26.7465 63.9467L15.9081 63.9667L12.5798 53.6534L3.7998 47.3001L7.16814 37.0001L3.7998 26.7001L12.5798 20.3467L15.9081 10.0334L26.7465 10.0534L35.5015 3.66675Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="6.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.835 37.0001L32.1683 45.3334L48.835 28.6667"
                      stroke="black"
                      strokeWidth="6.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </mask>
                  <g mask="url(#mask0_549_473)">
                    <path d="M-4.5 -3H75.5V77H-4.5V-3Z" fill="white" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-primaryText font-bold text-center">
                  Payment Successful!
                </h4>
                <p className="text-primaryText text-center w-3/4">
                  Your payment has been processed successfully.
                </p>
              </div>
              <ButtonGradiend
                onClick={() => {
                  hideModal(false);
                }}
                className="py-2 md:py-3 rounded-md w-full"
                gradient
              >
                <h6 className="text-primaryText">Done</h6>
              </ButtonGradiend>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessfullModal;

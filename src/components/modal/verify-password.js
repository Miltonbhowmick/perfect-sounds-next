"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ButtonGradiend from "../button/gradient";
import { updateUserProfile, verifyUserPassword } from "@/services/user.service";
import { getAuthToken, getProfile } from "@/store/modules/user";
import { useSelector } from "react-redux";

export default function VerifyPasswordModal({
  showModal,
  hideModal,
  headline,
  description,
  userData,
  className,
  ...props
}) {
  const token = useSelector(getAuthToken);
  const modalWrapperRef = useRef();
  var [password, setPassword] = useState("");

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

  const handleUpdateUserProfileApi = () => {
    let payload = {
      email: userData?.email,
      first_name: userData?.firstName,
      last_name: userData?.lastName,
      address: userData?.address,
      city: userData?.city,
      post_code: userData?.postCode,
      country: userData?.country,
    };
    updateUserProfile(payload, token)
      .then((res) => {
        console.log("====== update profile");
        hideModal(false);
      })
      .catch((e) => {
        console.log("====== update not profile", e);
        hideModal(false);
      });
  };

  const handleVerifyUserPasswordApi = () => {
    let payload = {
      password: password,
    };

    verifyUserPassword(payload, token)
      .then((data) => {
        console.log("Successfully user verified!");
        handleUpdateUserProfileApi();
      })
      .catch((e) => {
        console.log("user verification failed!");
      });
  };

  const handleUpdateProfile = () => {
    if (!password || password.length === 0) {
      alert("Password not be empty!");
      return;
    }
    console.log("====", token);
    handleVerifyUserPasswordApi();
  };

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
              <div className="p-[10px] md:p-[30px] w-max bg-gradient-to-r from-gradientLeft to-gradientRight rounded-full drop-shadow-gradient-left"></div>
              <div className="flex flex-col items-center">
                <h4 className="text-primaryText font-bold text-center uppercase">
                  Your Password
                </h4>
                <p className="text-primaryText text-center w-3/4">
                  Verify your account and update your profile information
                </p>
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="password"
                    className="text-primaryText font-medium	text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
                  />
                </div>
              </div>
              <ButtonGradiend
                onClick={() => {
                  handleUpdateProfile();
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
}

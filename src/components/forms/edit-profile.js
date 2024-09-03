"use client";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Link from "next/link";
import classNames from "classnames";

import ButtonGradiend from "../button/gradient";
import { useSelector } from "react-redux";
import { getProfile } from "@/store/modules/user";
import VerifyPasswordModal from "../modal/verify-password";

const EditProfileForm = ({ className }) => {
  const profile = useSelector(getProfile);
  const [showVerifyPasswordModal, setShowVerifyPasswordModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: profile.email,
      firstName: profile.first_name,
      lastName: profile.last_name,
      address: profile.address,
      city: profile.city,
      postCode: profile.post_code,
      country: profile.country,
    },
    onSubmit: (values) => {
      setShowVerifyPasswordModal(true);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={classNames(className, "flex flex-col gap-4")}
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="firstName"
          className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
        >
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="lastName"
          className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
        >
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last name"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="address"
          className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
        >
          Address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="Your living address"
          onChange={formik.handleChange}
          value={formik.values.address}
          className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="city"
          className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
        >
          City
        </label>
        <input
          id="city"
          name="city"
          type="text"
          placeholder="City name"
          onChange={formik.handleChange}
          value={formik.values.city}
          className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="postCode"
          className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
        >
          Post Code
        </label>
        <input
          id="postCode"
          name="postCode"
          type="text"
          placeholder="Post codes"
          onChange={formik.handleChange}
          value={formik.values.postCode}
          className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="country"
          className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
        >
          Country
        </label>
        <input
          id="country"
          name="country"
          type="text"
          placeholder="Country"
          onChange={formik.handleChange}
          value={formik.values.country}
          className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
        />
      </div>
      <ButtonGradiend
        type="submit"
        className="mt-1 xs:mt-2 md:mt-4 xl:mt-7 px-10  h-[35px] md:h-[45px] lg:h-[55px] w-max rounded-lg"
        gradient
      >
        <h6 className="text-primaryText font-medium">Save</h6>
      </ButtonGradiend>
      {showVerifyPasswordModal && (
        <VerifyPasswordModal
          showModal={showVerifyPasswordModal}
          hideModal={setShowVerifyPasswordModal}
          userData={formik.values}
        />
      )}
    </form>
  );
};

export default EditProfileForm;

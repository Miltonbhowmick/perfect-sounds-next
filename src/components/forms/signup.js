"use client";

import React from "react";
import { useFormik } from "formik";
import Link from "next/link";
import classNames from "classnames";

const SignupForm = ({ className }) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className={classNames(className, "flex flex-col gap-3")}
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
          onChange={formik.handleChange}
          value={formik.values.password}
          className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="confirmPassword"
          className="text-primaryText font-medium	text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
        >
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="confirmPassword"
          placeholder="Enter your password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
        />
      </div>
      <div className="flex gap-2 items-center text-paragraph md:text-paragraph-md lg:text-paragraph-lg">
        <input type="checkbox" className="accept-gradientRight"></input>
        <label className="text-primaryText font-medium">
          I agree to the Terms of Service and Privacy Policy
        </label>
      </div>

      <button className="px-[20px] py-[15px] bg-gradient-to-r from-gradientLeft to-gradientRight rounded-xl">
        <h6 className="text-primaryText">Create account</h6>
      </button>
      <p className="text-primaryText font-bold flex gap-2">
        Already have an account?
        <Link href="/account/signin" className="text-secondaryButton">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;

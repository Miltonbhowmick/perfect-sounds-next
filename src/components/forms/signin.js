"use client";

import React from "react";
import { useFormik } from "formik";
import Link from "next/link";
import classNames from "classnames";

const SigninForm = ({ className }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
      <Link
        href={"/"}
        className="text-gradientRight font-medium	 text-paragraph md:text-paragraph-md lg:text-paragraph-lg text-center lg:text-start"
      >
        Forgot Password
      </Link>
      <button className="px-[20px] py-[15px] bg-gradient-to-r from-gradientLeft to-gradientRight rounded-lg">
        <h6 className="text-primaryText font-bold">Signin</h6>
      </button>
      <p className="text-primaryText font-bold flex gap-2 justify-center lg:justify-start">
        Don't have an account?
        <Link href="/signup" className="text-secondaryButton">
          Sign up now
        </Link>
      </p>
    </form>
  );
};

export default SigninForm;

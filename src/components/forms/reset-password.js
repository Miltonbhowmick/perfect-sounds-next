"use client";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import classNames from "classnames";
import { signup, sendVerificationCode } from "@/services/user.service";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Loading from "@/app/(auth)/loading";

const ResetPasswordForm = ({ className }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const SignupSchema = yup.object().shape({
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/\d/, "Password must contain at least one digit")
      .matches(
        /[~!@#$%^&*]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    validationSchema: SignupSchema,
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: (values) => {
      let payload = {
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };
      setLoading(true);
      //   signup(payload)
      //     .then((data) => {
      //       toast.success("Please check your email!");
      //       setLoading(false);
      //     })
      //     .catch((e) => {
      //       toast.success("Signup verification sending problem!");
      //       setLoading(false);
      //     });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={classNames(className, "flex flex-col gap-3")}
    >
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
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="text-gradientRight text-small">
            {formik.errors.password}
          </p>
        ) : null}
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
          type="password"
          placeholder="Enter your password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <p className="text-gradientRight text-small">
            {formik.errors.confirmPassword}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="px-[20px] py-[15px] bg-gradient-to-r from-gradientLeft to-gradientRight rounded-lg"
      >
        <h6 className="text-primaryText font-bold">Change Password</h6>
      </button>

      {loading && <Loading />}
    </form>
  );
};

export default ResetPasswordForm;

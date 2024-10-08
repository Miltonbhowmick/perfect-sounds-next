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

const SignupForm = ({ className }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const SignupSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required!"),
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
    isAgreed: yup.boolean().oneOf([true], "You need to agree with our policy"),
  });

  const formik = useFormik({
    validationSchema: SignupSchema,
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      isAgreed: false,
    },

    onSubmit: (values) => {
      let payload = {
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };
      setLoading(true);
      signup(payload)
        .then((data) => {
          toast.success("Please check your email!");
          setLoading(false);
          handleResendVerificationCodeApi(payload);
        })
        .catch((e) => {
          toast.success("Signup verification sending problem!");
          setLoading(false);
        });
    },
  });

  const handleResendVerificationCodeApi = ({ email }) => {
    let payload = {
      email: email,
      reason: "user_creation",
    };
    setLoading(true);
    sendVerificationCode(payload)
      .then((data) => {
        toast.success("OTP is sent successfully!");
        setLoading(false);
        router.push(
          `/verification?email=${payload.email}&reason=user_creation`,
          { scroll: false }
        );
      })
      .catch((e) => {
        toast.success("OTP is not sent!");
        setLoading(false);
      });
  };

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
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="text-gradientRight text-small">{formik.errors.email}</p>
        ) : null}
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
      <div className="flex gap-2 items-center text-paragraph md:text-paragraph-md lg:text-paragraph-lg">
        <input
          id="isAgreed"
          type="checkbox"
          name="isAgreed"
          className="accept-gradientRight"
          onChange={formik.handleChange}
          value={formik.values.isAgreed}
        ></input>
        <label
          htmlFor="isAgreed"
          className="text-primaryText font-medium cursor-pointer"
        >
          I agree to the Terms of Service and Privacy Policy
        </label>
      </div>
      {formik.touched.isAgreed && formik.errors.isAgreed ? (
        <p className="text-gradientRight text-small">
          {formik.errors.isAgreed}
        </p>
      ) : null}

      <button
        type="submit"
        className="px-[20px] py-[15px] bg-gradient-to-r from-gradientLeft to-gradientRight rounded-lg"
      >
        <h6 className="text-primaryText font-bold">Create account</h6>
      </button>
      <p className="text-primaryText font-bold flex gap-2 justify-center lg:justify-start">
        Already have an account?
        <Link href="/signin" scroll={false} className="text-secondaryButton">
          Sign in
        </Link>
      </p>
      {loading && <Loading />}
    </form>
  );
};

export default SignupForm;

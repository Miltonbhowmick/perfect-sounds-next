"use client";

import React from "react";
import { useFormik } from "formik";
import Link from "next/link";
import classNames from "classnames";
import * as yup from "yup";
import { sendVerificationCode } from "@/services/user.service";
import { useRouter } from "next/navigation";

const ForgetPasswordForm = ({ className }) => {
  const router = useRouter();
  const ForgetPasswordSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required!"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgetPasswordSchema,
    onSubmit: (values) => {
      let payload = {
        email: values.email,
      };
      handleResendVerificationCodeApi(payload);
    },
  });

  const handleResendVerificationCodeApi = ({ email }) => {
    let payload = {
      email: email,
      reason: "forget_password",
    };
    console.log("call it???", payload);
    sendVerificationCode(payload)
      .then((data) => {
        alert("OTP success send");
        router.push(
          `/verification?email=${payload.email}&reason=user_creation`
        );
      })
      .catch((e) => {
        console.log(e);
        alert("unsuccess");
      });
  };

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
      <button className="px-[20px] py-[15px] bg-gradient-to-r from-gradientLeft to-gradientRight rounded-lg">
        <h6 className="text-primaryText font-bold">Submit</h6>
      </button>
      <p className="text-primaryText font-bold flex gap-2 justify-center lg:justify-start">
        {"Don't have an account?"}
        <Link href="/signup" className="text-secondaryButton">
          Sign up now
        </Link>
      </p>
    </form>
  );
};

export default ForgetPasswordForm;

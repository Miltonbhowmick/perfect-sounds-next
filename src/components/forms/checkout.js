"use client";

import React from "react";
import { useFormik } from "formik";
import Link from "next/link";
import classNames from "classnames";

const CheckoutForm = ({ className }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={classNames(className, "flex flex-col gap-4 w-full")}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="name"
            className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="name"
            className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
          >
            Last Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="name"
          className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
        >
          Promo Code
        </label>
        <input
          id="promoCode"
          name="promoCode"
          type="text"
          placeholder="Ex. Promo Code"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
        />
      </div>
      <button className="px-[20px] py-[15px] bg-gradient-to-r from-gradientLeft to-gradientRight rounded-lg">
        <h6 className="text-primaryText font-bold">Complete Payment -$20.00</h6>
      </button>
    </form>
  );
};

export default CheckoutForm;

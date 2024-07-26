"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import Link from "next/link";
import classNames from "classnames";
import SuccessfullModal from "@/components/modal/successfull";

const CheckoutForm = ({ className }) => {
  const [showSuccessfullModal, setShowSuccessfullModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
    },
  });

  return (
    <>
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
              htmlFor="lastName"
              className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
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
            placeholder="Ex. DX263"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="company"
            className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Ex. Octapatech"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="address"
            className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
          >
            Address Line 01
          </label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Ex. Octapatech"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="address"
            className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
          >
            Address Line 02
          </label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Ex. Octapatech"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
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
            placeholder="Select Country"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="zipcode"
              className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
            >
              Zip Code
            </label>
            <input
              id="zipcode"
              name="zipcode"
              type="text"
              placeholder="Ex. 73923"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
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
              placeholder="Ex. New York"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="state"
            className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
          >
            State/Province
          </label>
          <input
            id="state"
            name="state"
            type="text"
            placeholder="London"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
          />
        </div>
        <div className="flex gap-2 items-center text-paragraph md:text-paragraph-md lg:text-paragraph-lg">
          <input type="checkbox" className="accent-gradientLeft"></input>
          <label className="text-primaryText font-medium">
            I agree to the Terms of Service and Privacy Policy
          </label>
        </div>
        <button
          className="px-[20px] py-[15px] bg-gradient-to-r from-gradientLeft to-gradientRight rounded-lg"
          onClick={() => {
            setShowSuccessfullModal(true);
          }}
        >
          <h6 className="text-primaryText font-bold">
            Complete Payment -$20.00
          </h6>
        </button>
      </form>
      {showSuccessfullModal && (
        <SuccessfullModal
          showModal={showSuccessfullModal}
          hideModal={setShowSuccessfullModal}
        ></SuccessfullModal>
      )}
    </>
  );
};

export default CheckoutForm;

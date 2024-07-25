"use client";

import React from "react";
import { useFormik } from "formik";
import Link from "next/link";
import classNames from "classnames";

const ContactForm = ({ className }) => {
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
          htmlFor="name"
          className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Ex. Ryhan"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
        />
      </div>
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
          htmlFor="description"
          className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          type="text"
          placeholder="Let us know what you need?"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="px-[20px] py-[15px] min-h-[128px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
        ></textarea>
      </div>
      <p className="text-gradientLeft">
        Please enter the details of your request. A member of our support staff
        will respond as soon as possible.
      </p>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="description"
          className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
        >
          Attachments
        </label>
        <div className="border-tertiaryBg border-2 border-dotted rounded-xl relative flex justify-center items-center px-[30px] py-[20px] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.625 16.875V13.125H13.125L10 9.375L6.875 13.125H9.375V16.875H6.25V16.8438C6.145 16.85 6.045 16.875 5.9375 16.875C4.6943 16.875 3.50201 16.3811 2.62294 15.5021C1.74386 14.623 1.25 13.4307 1.25 12.1875C1.25 9.7825 3.06875 7.8225 5.4025 7.55375C5.60712 6.48412 6.17806 5.51922 7.01714 4.82501C7.85622 4.1308 8.91097 3.75067 10 3.75C11.0892 3.7506 12.1441 4.13068 12.9834 4.82488C13.8227 5.51908 14.3939 6.48401 14.5988 7.55375C16.9325 7.8225 18.7488 9.7825 18.7488 12.1875C18.7488 13.4307 18.2549 14.623 17.3758 15.5021C16.4967 16.3811 15.3045 16.875 14.0613 16.875C13.9563 16.875 13.855 16.85 13.7488 16.8438V16.875H10.625Z"
              fill="#F47B23"
            />
          </svg>
          <p className="text-gradientRight">Add file or drop files here</p>
          <input
            type="file"
            className="absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer"
          />
        </div>
      </div>
      <button className="px-[20px] py-[15px] bg-gradient-to-r from-gradientLeft to-gradientRight rounded-lg">
        <h6 className="text-primaryText font-bold">Submit</h6>
      </button>
    </form>
  );
};

export default ContactForm;

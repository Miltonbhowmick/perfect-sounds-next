"use client";

import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import classNames from "classnames";
import SuccessfullModal from "@/components/modal/successfull";
import { createOrder } from "@/services/order.service";
import toast from "react-hot-toast";
import Loading from "@/app/(auth)/loading";
import { isPromoCodeValid } from "@/services/payment.service";
import { useRouter } from "next/navigation";

const CheckoutForm = ({
  pricePlan,
  selectedCredit,
  costData,
  authToken,
  className,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showSuccessfullModal, setShowSuccessfullModal] = useState(false);
  var [checkoutCostData, setCheckoutCostData] = useState(costData);
  var [promoCodeData, setPromoCodeData] = useState(null);

  const checkoutSchema = yup.object({
    firstName: yup.string().required("First name is required!"),
    lastName: yup.string().required("Last name is required!"),
    company: yup.string().required("Company is required"),
    address1: yup.string().required("Address 1 is required"),
    country: yup.string().required("Country is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    zipCode: yup.string().required("Zip code is required"),
    isAgreePolicy: yup.boolean().oneOf([true], "Please agree with policy"),
  });

  const formik = useFormik({
    validationSchema: checkoutSchema,
    initialValues: {
      firstName: "",
      lastName: "",
      promoCode: "",
      company: "",
      address1: "",
      address2: "",
      country: "",
      city: "",
      state: "",
      zipCode: "",
      isAgreePolicy: false,
    },
    onSubmit: (values) => {
      let payload = {
        first_name: values.firstName,
        last_name: values.lastName,
        company: values.company,
        address1: values.address1,
        address2: values.address2,
        country: values.country,
        city: values.city,
        state: values.state,
        zip_code: values.zipCode,
        is_agreed_policy: values.isAgreePolicy,
        price_plan: pricePlan,
      };

      if (promoCodeData?.id) {
        payload["promo_code"] = parseInt(promoCodeData?.id);
      }
      if (selectedCredit) {
        payload["credit"] = parseInt(selectedCredit?.id);
      }

      createOrder(payload, authToken)
        .then((data) => {
          setShowSuccessfullModal(true);
        })
        .catch((e) => {
          toast.error("Order is not created!");
        });
    },
  });

  useEffect(() => {
    if (promoCodeData) {
      setCheckoutCostData((prevState) => ({
        ...prevState,
        total:
          checkoutCostData.total -
          (checkoutCostData.total * promoCodeData.percentage) / 100,
      }));
    }
  }, [promoCodeData]);

  const hideShowSuccessfullModal = () => {
    setShowSuccessfullModal(false);
    router.push("/account");
  };

  const handlePromoCodeValidApi = () => {
    if (promoCodeData != null) {
      toast.error("Already applied promocode!");
      return;
    }
    if (formik.values.promoCode.length === 0) {
      toast.error("Please fill promo code first!");
      return;
    }
    let payload = {
      code: formik.values.promoCode,
    };
    setLoading(true);
    isPromoCodeValid(payload, authToken)
      .then((data) => {
        toast.success("Promo Code is valid!");
        setPromoCodeData(data);
        setLoading(false);
      })
      .catch((e) => {
        toast.error("Promo Code is not valid!");
        setLoading(false);
      });
    return promoCodeData;
  };

  const handleApplyPromoCode = () => {
    handlePromoCodeValidApi();
  };

  useEffect(() => {}, []);

  if (loading === true) {
    return <Loading />;
  }

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className={classNames(className, "flex flex-col gap-4 w-full")}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 w-full">
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
              placeholder="Your Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className="text-gradientRight text-small">
                {formik.errors.firstName}
              </p>
            ) : null}
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
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p className="text-gradientRight text-small">
                {formik.errors.lastName}
              </p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="name"
            className="flex justify-between items-center text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
          >
            <div>
              <span>Promo Code</span>
              <a
                onClick={handleApplyPromoCode}
                className="ms-2 text-small text-gradientLeft underline cursor-pointer"
              >
                {promoCodeData != null ? "applied" : "apply"}
              </a>
            </div>
            {promoCodeData != null && (
              <span className="text-paragraph">
                Total with promo code: {checkoutCostData.total}
              </span>
            )}
          </label>
          <input
            id="promoCode"
            name="promoCode"
            type="text"
            placeholder="Ex. DX263"
            onChange={formik.handleChange}
            value={formik.values.promoCode}
            disabled={promoCodeData != null}
            className={`${
              promoCodeData != null
                ? "opacity-30 bg-tertiaryBg"
                : "bg-transparent"
            } px-[20px] py-[15px] focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400`}
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
            onBlur={formik.handleBlur}
            value={formik.values.company}
            className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
          />
          {formik.touched.company && formik.errors.company ? (
            <p className="text-gradientRight text-small">
              {formik.errors.company}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="address1"
            className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
          >
            Address Line 01
          </label>
          <input
            id="address1"
            name="address1"
            type="text"
            placeholder="Ex. Octapatech"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address1}
            className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
          />
          {formik.touched.address1 && formik.errors.address1 ? (
            <p className="text-gradientRight text-small">
              {formik.errors.address1}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="address"
            className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
          >
            Address Line 02
          </label>
          <input
            id="address2"
            name="address2"
            type="text"
            placeholder="Ex. Octapatech"
            onChange={formik.handleChange}
            value={formik.values.address2}
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
            onBlur={formik.handleBlur}
            value={formik.values.country}
            className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
          />
          {formik.touched.country && formik.errors.country ? (
            <p className="text-gradientRight text-small">
              {formik.errors.country}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="zipCode"
              className="text-primaryText font-medium text-paragraph md:text-paragraph-md lg:text-paragraph-lg"
            >
              Zip Code
            </label>
            <input
              id="zipode"
              name="zipCode"
              type="text"
              placeholder="Ex. 73923"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zipCode}
              className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
            />
            {formik.touched.zipCode && formik.errors.zipCode ? (
              <p className="text-gradientRight text-small">
                {formik.errors.zipCode}
              </p>
            ) : null}
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
              onBlur={formik.handleBlur}
              value={formik.values.city}
              className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
            />
            {formik.touched.city && formik.errors.city ? (
              <p className="text-gradientRight text-small">
                {formik.errors.city}
              </p>
            ) : null}
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
            onBlur={formik.handleBlur}
            value={formik.values.state}
            className="px-[20px] py-[15px] bg-transparent focus:outline-none border-tertiaryBg rounded-xl border text-[16px] text-primaryText placeholder-slate-400"
          />
          {formik.touched.state && formik.errors.state ? (
            <p className="text-gradientRight text-small">
              {formik.errors.state}
            </p>
          ) : null}
        </div>
        <div className="flex gap-2 items-center text-paragraph md:text-paragraph-md lg:text-paragraph-lg">
          <input
            id="agree"
            type="checkbox"
            name="isAgreePolicy"
            className="accent-gradientLeft"
            onChange={formik.handleChange}
            checked={formik.isAgreePolicy}
          ></input>
          <label
            htmlFor="agree"
            className="text-primaryText font-medium cursor-pointer"
          >
            I agree to the Terms of Service and Privacy Policy
          </label>
        </div>
        {formik.touched.isAgreePolicy && formik.errors.isAgreePolicy ? (
          <p className="text-gradientRight text-small">
            {formik.errors.isAgreePolicy}
          </p>
        ) : null}
        <button
          type="submit"
          className="px-[20px] py-[15px] bg-gradient-to-r from-gradientLeft to-gradientRight rounded-lg"
        >
          <h6 className="text-primaryText font-bold">
            Complete Payment - ${checkoutCostData.total}
          </h6>
        </button>
      </form>
      {showSuccessfullModal && (
        <SuccessfullModal
          showModal={showSuccessfullModal}
          hideModal={hideShowSuccessfullModal}
        ></SuccessfullModal>
      )}
    </>
  );
};

export default CheckoutForm;

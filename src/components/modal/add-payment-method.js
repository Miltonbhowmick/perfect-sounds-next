"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ButtonGradiend from "../button/gradient";
import { getAuthToken } from "@/store/modules/user";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import PaymentStripeMethodModal from "../payment/stripe-method";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function AddPaymentMethodModal({
  showModal,
  hideModal,
  headline,
  description,
  userData,
  mode,
  className,
  ...props
}) {
  const token = useSelector(getAuthToken);
  const router = useRouter();
  const modalWrapperRef = useRef();
  const [methodType, setMethodType] = useState(1);

  const options = {
    currency: "usd",
    appearance: {
      theme: "night",
      variables: { colorText: "#ffffff" },
    },
    automatic_payment_methods: { enabled: true },
    clientSecret:
      "seti_1PyEuEP0btNCbhoSNJzHJulz_secret_QpujXSbwFjSaZUkx8Ubwvl5kYFjE4yD",
  };

  const overlayHandler = useCallback((e) => {
    if (!modalWrapperRef?.current?.contains(e.target)) {
      hideModal(false);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("click", overlayHandler);
    });
    return () => {
      window.removeEventListener("click", overlayHandler);
    };
  }, []);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-x-hidden mx-2 sm:mx-0 flex justify-center items-center bg-primaryBgRGB">
          <div
            ref={modalWrapperRef}
            className="relative max-w-[846px] max-h-[695px] min-w-[100%] sm:min-w-[430px] md:min-w-[500px] mx-5 p-[30px] md:p-[70px] bg-secondaryBg rounded-[10px] md:rounded-[20px] drop-shadow-primary"
          >
            <a
              onClick={() => {
                hideModal(false);
              }}
              className="p-auto md:p-1 absolute top-[8px] right-[8px] md:top-[30px] md:right-[30px] border-gradientLeft border rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-[14px] h-[14px] md:w-[24px] md:h-[24px]"
              >
                <path
                  d="M19 4.99988L5 18.9999M5 4.99988L19 18.9999"
                  stroke="#DC1B73"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div className="flex flex-col items-center gap-5 md:gap-6 lg:gap-10">
              <div className="p-[10px] md:p-[30px] w-max bg-gradient-to-r from-gradientLeft to-gradientRight rounded-full drop-shadow-gradient-left"></div>
              <div className="flex flex-col items-center">
                <h4 className="text-primaryText font-bold text-center uppercase">
                  Choose and add your payment details
                </h4>
                <p className="text-primaryText text-center w-3/4">
                  Its verify confidential and we securely handle everything
                </p>
                <div className="w-full py-5">
                  <ul className="flex gap-2">
                    <li className="flex gap-2 items-center ">
                      <input
                        id="stripe"
                        type="radio"
                        name="paymentMethodType"
                        checked={methodType === 1}
                        onChange={() => setMethodType(1)}
                        className="bg-transparent accent-gradientLeft"
                      />
                      <label
                        htmlFor="stripe"
                        className="w-full text-primaryText cursor-pointer"
                      >
                        Card
                      </label>
                    </li>
                    {/* <li className="flex gap-2 items-center">
                      <input
                        id="paypal"
                        type="radio"
                        name="paymentMethodType"
                        checked={methodType === 2}
                        onChange={() => setMethodType(2)}
                        className="bg-transparent accent-gradientLeft"
                      />
                      <label
                        htmlFor="paypal"
                        className="w-full text-primaryText cursor-pointer"
                      >
                        Paypal
                      </label>
                    </li> */}
                  </ul>
                </div>
                <div className="w-full">
                  {methodType === 1 ? (
                    <>
                      <Elements stripe={stripePromise} options={options}>
                        <PaymentStripeMethodModal />
                      </Elements>
                    </>
                  ) : (
                    <div>paypal</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ButtonGradiend from "../button/gradient";
import { postConfirmPayment } from "@/app/actions/payment";
import toast from "react-hot-toast";
import Loading from "@/app/(landing)/loading";

const PayNowModal = ({
  showModal,
  hideModal,
  headline,
  description,
  subscriptionPlan,
  paymentMethodList,
  className,
  ...props
}) => {
  const modalWrapperRef = useRef();
  const [typePaymentMethod, setTypePaymentMethod] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(1);
  const [loading, setLoading] = useState(false);

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

  function getSinglePaymentMethodData(targetIndex) {
    return paymentMethodList.find((element, idx) => idx + 1 === targetIndex);
  }

  const handleConfirmPaymentApi = () => {
    if (!selectedPaymentMethod) {
      toast.error("Please select one of save payment methods!");
      return;
    }
    setLoading(true);
    const paymentMethodData = getSinglePaymentMethodData(selectedPaymentMethod);
    let payload = {
      payment_method_id: paymentMethodData?.id,
      price_plan_id: subscriptionPlan?.order?.price_plan?.id,
    };
    postConfirmPayment(payload)
      .then((res) => {
        if (res.success) {
          toast.success("Payment is done!");
        } else {
          toast.success("Payment is something problem!");
        }
        console.log(loading);
        setLoading(false);
      })
      .catch((e) => {
        toast.error("Payment is failed!");
        setLoading(false);
      });
  };
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
              <div className="flex flex-col items-center gap-2">
                <h4 className="text-primaryText font-bold text-center uppercase">
                  Pay for your subscription
                </h4>
                <h6 className="text-primaryText font-regular text-center">
                  Choose your payment method
                </h6>
                <ul className="mt-4 flex gap-2">
                  <li
                    onClick={() => setTypePaymentMethod(0)}
                    className={`p-2 cursor-pointer text-primaryText ${
                      typePaymentMethod === 0
                        ? "border-b border-primaryText"
                        : ""
                    }`}
                  >
                    Custom
                  </li>
                  <li
                    onClick={() => setTypePaymentMethod(1)}
                    className={`p-2 cursor-pointer text-primaryText ${
                      typePaymentMethod === 1
                        ? "border-b border-primaryText"
                        : ""
                    }`}
                  >
                    Your Saved
                  </li>
                </ul>
                {typePaymentMethod === 0 ? (
                  <div>{subscriptionPlan.order.price_plan.title}</div>
                ) : (
                  <>
                    <div className="w-full flex flex-col gap-5">
                      {paymentMethodList.length === 0 ? (
                        <p>No payment methods found</p>
                      ) : (
                        paymentMethodList.map((method, index) => {
                          return (
                            <div
                              onClick={() => {
                                setSelectedPaymentMethod(index + 1);
                              }}
                              className="w-full p-3 flex justify-between border border-gradientLeft rounded cursor-pointer hover:shadow-2xl"
                              key={method.id}
                            >
                              <p className="text-primaryText font-medium">
                                <span>{method.card.brand.toUpperCase()}</span> |{" "}
                                <span>*****{method.card.last4}</span> |{" "}
                                <span>
                                  Expire {method.card.exp_month}/
                                  {method.card.exp_year}
                                </span>
                              </p>
                            </div>
                          );
                        })
                      )}
                    </div>
                    <ButtonGradiend
                      onClick={() => {
                        handleConfirmPaymentApi();
                      }}
                      className="py-2 md:py-3 rounded-md w-full"
                      gradient
                    >
                      <h6 className="text-primaryText">Confirm Pay</h6>
                    </ButtonGradiend>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && <Loading />}
    </>
  );
};

export default PayNowModal;

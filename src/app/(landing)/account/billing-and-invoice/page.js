"use client";

import Image from "next/image";

import HeroBannerHorizontal from "@/components/herosection/horizontal";
import AccountSidebar from "@/components/sidebar/account";
import ButtonGradiend from "@/components/button/gradient";
import ButtonGradiendOutlined from "@/components/button/gradientOutlined";
import AccountMobileSidebar from "@/components/sidebar/mobile-account";
import AddPaymentMethodModal from "@/components/modal/add-payment-method";
import { useEffect, useState } from "react";
import { getPaymentMethodList } from "@/app/actions/payment";
import Loading from "../../loading";
import { getUserLatestSubscription } from "@/app/actions/user";
import PayNowModal from "@/components/modal/pay-now";

export default function AccountBillingInvoice() {
  const [showAddPaymentMethodModal, setShowAddPaymentMethodModal] =
    useState(false);
  const [showPayNowModal, setShowPayNowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentMethodList, setPaymentMethodList] = useState([]);
  const [subscriptionPlan, setSubscriptionPlan] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function handleFetchPaymentMethodsApi() {
      try {
        const data = await getPaymentMethodList();
        setPaymentMethodList(data);
      } catch (error) {}
    }

    async function handleFetchUserLatestSubscriptionApi() {
      try {
        const data = await getUserLatestSubscription();
        setSubscriptionPlan(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    handleFetchPaymentMethodsApi();
    handleFetchUserLatestSubscriptionApi();
  }, []);

  return (
    <div>
      {loading && <Loading />}
      <div className="relative overflow-hidden">
        <HeroBannerHorizontal
          className="h-[245px] sm:h-[345px] md:h-[360px] lg:h-[400px]"
          image={
            <Image
              src="/images/account/rectangle-banner.jpg"
              alt="rectangle-banner"
              className="object-fit opacity-60"
              fill
            />
          }
          headline={"My Account"}
          description={
            "Want to get in touch? We’d love to hear from you. Here’s how you can reach us:"
          }
        ></HeroBannerHorizontal>
        <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gradientRight to-gradientLeft blur-[45px] md:blur-[90px] rounded-full w-[130px] h-[120px] md:w-[336px] md:h-[200px] lg:w-[436px] lg:h-[405px] absolute top-[5%] -left-[15%] lg:-left-[25%]"></div>
        <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gradientRight to-gradientLeft blur-[45px] md:blur-[90px] rounded-full w-[111px] h-[111px] md:w-[236px] md:h-[170px] lg:w-[336px] lg:h-[305px] absolute -bottom-[15%]  -right-[8%] lg:-right-[15%]"></div>
      </div>
      <div className="container p-auto py-4 lg:p-[90px] flex flex-col lg:flex-row gap-5">
        <div className="basis-auto lg:basis-[300px] h-max p-[10px] bg-transparent lg:bg-secondaryBg rounded-[20px]">
          <AccountSidebar className={"hidden lg:block"}></AccountSidebar>
          <AccountMobileSidebar
            className={"block lg:hidden"}
          ></AccountMobileSidebar>
        </div>

        <div className="basis-auto grow shrink flex flex-col gap-5">
          <div className="px-5 py-2 lg:px-14 lg:py-5 bg-secondaryBg rounded-[20px] flex flex-col gap-2 md:gap-4">
            <h4 className="text-primaryText font-bold">Profile Overview</h4>
            <h5 className="text-primaryText font-medium">Subscription Type</h5>
            {subscriptionPlan ? (
              <div className="flex flex-col">
                <h6 className="text-primaryText font-medium">
                  Your current plan -{" "}
                  <span className="text-gradientLeft">
                    {subscriptionPlan?.order?.price_plan?.title}
                  </span>{" "}
                  - with {subscriptionPlan?.order?.price_plan_credit?.credit}{" "}
                  credits
                </h6>
                <p className="text-primaryText">
                  Payment Status -{" "}
                  <span className="text-gradientLeft capitalize">
                    {subscriptionPlan?.order?.status}
                  </span>
                </p>
                {subscriptionPlan?.order?.status === "pending" && (
                  <>
                    <ButtonGradiend
                      onClick={() => {
                        setShowPayNowModal(true);
                      }}
                      className="mt-1 xs:mt-2 md:mt-4 xl:mt-7 px-5 h-[35px] md:h-[45px] lg:h-[55px] w-max rounded-lg"
                      gradient
                    >
                      <h6 className="text-primaryText font-medium">
                        Pay Now - $
                        {subscriptionPlan?.order?.price_plan?.duration !==
                        "custom"
                          ? subscriptionPlan?.order?.price_plan?.amount
                          : subscriptionPlan?.order?.price_plan_credit?.amount}
                      </h6>
                    </ButtonGradiend>
                    {showPayNowModal && (
                      <PayNowModal
                        showModal={showPayNowModal}
                        hideModal={setShowPayNowModal}
                        subscriptionPlan={subscriptionPlan}
                        paymentMethodList={paymentMethodList}
                      ></PayNowModal>
                    )}
                  </>
                )}
              </div>
            ) : (
              <>
                <p className="text-primaryText font-medium">
                  You currently don’t have any subscription. Subscribe to one of
                  our plans and start downloading.
                </p>
                <ButtonGradiend
                  className="mt-1 xs:mt-2 md:mt-4 xl:mt-7 px-5 h-[35px] md:h-[45px] lg:h-[55px] w-max rounded-lg"
                  gradient
                >
                  <h6 className="text-primaryText font-medium">View Pricing</h6>
                </ButtonGradiend>
              </>
            )}
          </div>
          <div className="px-5 py-2 lg:px-14 lg:py-5 bg-secondaryBg rounded-[20px] flex flex-col gap-2 md:gap-4">
            <h4 className="text-primaryText font-bold">Payment Method</h4>
            <p className="text-primaryText font-medium">
              View and Edit your Payment Method
            </p>
            <div className="mt-6 flex flex-col gap-5">
              {paymentMethodList.length === 0 ? (
                <p className="text-primaryText font-weight-bold">
                  No payment methods found
                </p>
              ) : (
                paymentMethodList.map((method) => {
                  return (
                    <div className="flex justify-between" key={method.id}>
                      <p className="text-primaryText font-medium">
                        <span>{method.card.brand.toUpperCase()}</span>
                        <span>*****{method.card.last4}</span> |{" "}
                        <span>
                          Expire {method.card.exp_month}/{method.card.exp_year}
                        </span>
                      </p>
                      <div className="flex gap-2">
                        <a className="text-primaryText font-bold">Edit</a>
                        <span className="text-gradientLeft font-bold">|</span>
                        <a className="text-gradientLeft font-bold">Delete</a>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            {paymentMethodList.length === 0 && (
              <ButtonGradiendOutlined
                onClick={() => setShowAddPaymentMethodModal(true)}
                className="mt-1 xs:mt-2 md:mt-4 xl:mt-7 w-max h-[35px] md:h-[45px] lg:h-[55px] rounded-xl"
              >
                <h6 className="bg-gradient-to-r from-gradientLeft to-gradientRight bg-clip-text text-transparent font-bold">
                  Add a payment method
                </h6>
              </ButtonGradiendOutlined>
            )}
          </div>
          <div className="px-5 py-2 lg:px-14 lg:py-5 bg-secondaryBg rounded-[20px] flex flex-col gap-1">
            <h4 className="text-primaryText font-bold">Invoice</h4>
            <p className="text-primaryText font-medium">
              You Have not any any Invoce
            </p>
            <ButtonGradiend
              className="mt-5 px-5 h-[35px] md:h-[45px] lg:h-[55px] w-max rounded-lg bg-tertiaryBg"
              // gradient
              disabled
            >
              <h6 className="text-secondaryBg font-medium">Delete Account</h6>
            </ButtonGradiend>
          </div>
        </div>
      </div>
      {showAddPaymentMethodModal && (
        <AddPaymentMethodModal
          showModal={showAddPaymentMethodModal}
          hideModal={setShowAddPaymentMethodModal}
        />
      )}
    </div>
  );
}

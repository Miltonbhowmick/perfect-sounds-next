"use client";

import { useEffect } from "react";
import ButtonGradiend from "../button/gradient";
import Chip from "../chip";
import { useSelector } from "react-redux";
import { getProfile } from "@/store/modules/user";

export default function UserSubscriptionOverview({ subscriptionDetail }) {
  const profile = useSelector(getProfile);

  return (
    <>
      <p className="text-primaryText font-medium">
        You currently don’t have any subscription. Subscribe to one of our plans
        and start downloading.
      </p>
      {subscriptionDetail ? (
        <>
          <div className="mt-3 px-2 py-4 rounded-lg border-2">
            <h5 className="text-center text-gradientRight uppercase tracking-widest">
              {subscriptionDetail?.order?.price_plan?.title}
            </h5>
            {subscriptionDetail?.order?.price_plan?.duration != "custom" && (
              <p className="text-center text-primaryText">
                Price Plan Amount: $
                {subscriptionDetail?.order?.price_plan?.amount}
              </p>
            )}
            <div className="mt-4 text-center">
              <Chip className="px-3 rounded-full bg-gradientRight">
                <h6>
                  {subscriptionDetail?.order?.price_plan_credit?.credit} Credits
                  on ${subscriptionDetail?.order?.price_plan_credit?.amount}
                </h6>
              </Chip>
            </div>
            <div></div>
          </div>
          <div className="mt-3 px-2 py-4 rounded-lg border-2">
            <h5 className="text-center text-gradientRight">
              {profile?.username}'s{" "}
              <span className="text-primaryText">remaining</span>
            </h5>
            <p className="text-primaryText text-center">
              Current Credit: {"40"}
            </p>
          </div>
        </>
      ) : (
        <ButtonGradiend
          href={"/price"}
          className="mt-1 xs:mt-2 md:mt-4 xl:mt-7 px-5 h-[35px] md:h-[45px] lg:h-[55px] w-max rounded-lg"
          gradient
        >
          <h6 className="text-primaryText font-medium">View Pricing</h6>
        </ButtonGradiend>
      )}
    </>
  );
}

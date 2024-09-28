import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import ButtonGradiend from "../button/gradient";
import toast from "react-hot-toast";
import { activeSingleSubscription } from "@/services/user.service";
import { useEffect } from "react";
import { getAuthToken } from "@/store/modules/user";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function PaymentStripePaynowModal({ subscriptionPlan }) {
  const authToken = useSelector(getAuthToken);
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const handleSaveStripePaymentMethod = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // return_url: `${process.env.NEXT_PUBLIC_CLIENT_DOMAIN}/account/billing-and-invoice`,
      },
      redirect: "if_required",
    });

    if (error) {
      toast.error(error?.message);
    } else {
      let payload = {
        id: subscriptionPlan?.id,
      };
      activeSingleSubscription(payload, authToken)
        .then((res) => {
          router.push("/account");
          toast.success("Successfully payment done and active subscription!");
        })
        .catch((e) => {
          toast.failed(
            "Successfully added payment done but subscription deactive!"
          );
        });
    }
  };

  return (
    <form onSubmit={handleSaveStripePaymentMethod}>
      <PaymentElement />
      <ButtonGradiend
        className="mt-5 px-5 h-[35px] md:h-[45px] lg:h-[55px] w-full rounded-lg bg-tertiaryBg"
        gradient
        disabled={!stripe}
      >
        <h6 className="text-secondaryBg font-medium">Pay Now</h6>
      </ButtonGradiend>
    </form>
  );
}

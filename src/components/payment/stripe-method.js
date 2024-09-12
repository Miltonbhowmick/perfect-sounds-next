import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import ButtonGradiend from "../button/gradient";
import toast from "react-hot-toast";

export default function PaymentStripeMethodModal() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSaveStripePaymentMethod = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Call elements.submit() to submit the form
    const { error } = await elements.submit();

    const result = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_CLIENT_DOMAIN}/account/billing-and-invoice`,
      },
    });

    if (result) {
      toast.error(result?.error?.message);
    } else {
      console.log(result);
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
        <h6 className="text-secondaryBg font-medium">Save</h6>
      </ButtonGradiend>
    </form>
  );
}

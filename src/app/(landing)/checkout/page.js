import CheckoutForm from "@/components/forms/checkout";
import { fetchSinglePricePlans } from "@/services/payment.service";
import Link from "next/link";
import { getTokenSSR } from "../../actions/auth";

const CheckoutPage = async (searchParams) => {
  const queryParams = searchParams.searchParams;
  const pricePlanId = parseInt(queryParams.pricePlan);
  const taxPercentage = 5;
  var pricePlanData = null;
  const token = getTokenSSR();
  await fetchSinglePricePlans({ pricePlanId: pricePlanId }).then((data) => {
    pricePlanData = data;
  });

  return (
    <div className="container flex flex-col gap-5">
      <div className="mt-[9rem] header p-10 relative bg-secondaryBg rounded-xl flex flex-col justify-center items-center">
        {pricePlanData && (
          <>
            <div className="w-[90%] md:w-[60%] flex flex-col justify-center items-center">
              <h4 className="text-primaryText font-bold">Order Summary</h4>
              <table className="table-auto w-full">
                <tbody>
                  <tr>
                    <td className="pb-1 md:pb-5">
                      <p className="text-tertiaryText font-medium">Plan Name</p>
                    </td>
                    <td className="pb-1 md:pb-5">
                      <p className="text-primaryText font-bold flex flex-row gap-3">
                        {pricePlanData?.title}
                        <Link
                          href="/price"
                          className="text-gradientLeft underline"
                        >
                          Change Plan
                        </Link>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="pb-1 md:pb-5">
                      <p className="text-tertiaryText font-medium">
                        Subscription Duration
                      </p>
                    </td>
                    <td className="pb-1 md:pb-5">
                      <p className="text-primaryText font-bold flex flex-row gap-3">
                        {pricePlanData?.duration_unit} {pricePlanData?.duration}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="pb-1 md:pb-5">
                      <p className="text-tertiaryText font-medium">Sub total</p>
                    </td>
                    <td className="pb-1 md:pb-5">
                      <p className="text-primaryText font-bold flex flex-row gap-3">
                        ${parseFloat(pricePlanData?.amount).toFixed(2)} USD
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="pb-1 md:pb-5">
                      <p className="text-tertiaryText font-medium">
                        Vat/GST/Sales taxes ({taxPercentage}%)
                      </p>
                    </td>
                    <td className="pb-1 md:pb-5">
                      <p className="text-primaryText font-bold flex flex-row gap-3">
                        $
                        {(parseFloat(pricePlanData?.amount) * taxPercentage) /
                          100}
                        USD
                      </p>
                    </td>
                  </tr>
                  <tr className="border-t border-tertiaryBg">
                    <td className="py-1 md:py-5">
                      <p className="text-tertiaryText font-medium">Total</p>
                    </td>
                    <td className="py-1 md:py-5">
                      <p className="text-primaryText font-bold flex flex-row gap-3">
                        $
                        {parseFloat(pricePlanData?.amount) +
                          (parseFloat(pricePlanData?.amount) * taxPercentage) /
                            100}
                        USD
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="absolute top-0 left-0 rotate-[180deg] w-[80px] h-[80px] md:w-[160px] md:h-[160px] lg:w-[215px] lg:h-[215px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 115 114"
                fill="none"
              >
                <path
                  opacity="0.5"
                  d="M209 104.5C209 162.214 162.214 209 104.5 209C46.7862 209 0 162.214 0 104.5C0 46.7862 46.7862 0 104.5 0C162.214 0 209 46.7862 209 104.5ZM42.5544 104.5C42.5544 138.712 70.2884 166.446 104.5 166.446C138.712 166.446 166.446 138.712 166.446 104.5C166.446 70.2884 138.712 42.5544 104.5 42.5544C70.2884 42.5544 42.5544 70.2884 42.5544 104.5Z"
                  fill="url(#paint0_linear_156_1538)"
                />
                <path
                  opacity="0.3"
                  d="M209 104.5C209 162.214 162.214 209 104.5 209C46.7862 209 0 162.214 0 104.5C0 46.7862 46.7862 0 104.5 0C162.214 0 209 46.7862 209 104.5ZM57.5549 104.5C57.5549 130.427 78.5729 151.445 104.5 151.445C130.427 151.445 151.445 130.427 151.445 104.5C151.445 78.5729 130.427 57.5549 104.5 57.5549C78.5729 57.5549 57.5549 78.5729 57.5549 104.5Z"
                  fill="url(#paint1_linear_156_1538)"
                />
                <path
                  d="M209 104.5C209 162.214 162.214 209 104.5 209C46.7862 209 0 162.214 0 104.5C0 46.7862 46.7862 0 104.5 0C162.214 0 209 46.7862 209 104.5ZM29.4551 104.5C29.4551 145.946 63.0539 179.545 104.5 179.545C145.946 179.545 179.545 145.946 179.545 104.5C179.545 63.0539 145.946 29.4551 104.5 29.4551C63.0539 29.4551 29.4551 63.0539 29.4551 104.5Z"
                  fill="url(#paint2_linear_156_1538)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_156_1538"
                    x1="3.11434e-06"
                    y1="104.5"
                    x2="209"
                    y2="104.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#DC1B73" />
                    <stop offset="1" stopColor="#F47B23" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_156_1538"
                    x1="3.11434e-06"
                    y1="104.5"
                    x2="209"
                    y2="104.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#DC1B73" />
                    <stop offset="1" stopColor="#F47B23" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_156_1538"
                    x1="3.11434e-06"
                    y1="104.5"
                    x2="209"
                    y2="104.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#DC1B73" />
                    <stop offset="1" stopColor="#F47B23" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-[45px] h-[45px] md:w-[80px] md:h-[80px] lg:w-[125px] lg:h-[125px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 115 114"
                fill="none"
              >
                <path
                  opacity="0.5"
                  d="M209 104.5C209 162.214 162.214 209 104.5 209C46.7862 209 0 162.214 0 104.5C0 46.7862 46.7862 0 104.5 0C162.214 0 209 46.7862 209 104.5ZM42.5544 104.5C42.5544 138.712 70.2884 166.446 104.5 166.446C138.712 166.446 166.446 138.712 166.446 104.5C166.446 70.2884 138.712 42.5544 104.5 42.5544C70.2884 42.5544 42.5544 70.2884 42.5544 104.5Z"
                  fill="url(#paint0_linear_156_1538)"
                />
                <path
                  opacity="0.3"
                  d="M209 104.5C209 162.214 162.214 209 104.5 209C46.7862 209 0 162.214 0 104.5C0 46.7862 46.7862 0 104.5 0C162.214 0 209 46.7862 209 104.5ZM57.5549 104.5C57.5549 130.427 78.5729 151.445 104.5 151.445C130.427 151.445 151.445 130.427 151.445 104.5C151.445 78.5729 130.427 57.5549 104.5 57.5549C78.5729 57.5549 57.5549 78.5729 57.5549 104.5Z"
                  fill="url(#paint1_linear_156_1538)"
                />
                <path
                  d="M209 104.5C209 162.214 162.214 209 104.5 209C46.7862 209 0 162.214 0 104.5C0 46.7862 46.7862 0 104.5 0C162.214 0 209 46.7862 209 104.5ZM29.4551 104.5C29.4551 145.946 63.0539 179.545 104.5 179.545C145.946 179.545 179.545 145.946 179.545 104.5C179.545 63.0539 145.946 29.4551 104.5 29.4551C63.0539 29.4551 29.4551 63.0539 29.4551 104.5Z"
                  fill="url(#paint2_linear_156_1538)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_156_1538"
                    x1="3.11434e-06"
                    y1="104.5"
                    x2="209"
                    y2="104.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#DC1B73" />
                    <stop offset="1" stopColor="#F47B23" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_156_1538"
                    x1="3.11434e-06"
                    y1="104.5"
                    x2="209"
                    y2="104.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#DC1B73" />
                    <stop offset="1" stopColor="#F47B23" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_156_1538"
                    x1="3.11434e-06"
                    y1="104.5"
                    x2="209"
                    y2="104.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#DC1B73" />
                    <stop offset="1" stopColor="#F47B23" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </>
        )}
      </div>
      <div className="p-10 bg-secondaryBg rounded-xl flex flex-col items-center">
        <section className="w-[100%] lg:w-[60%]">
          <CheckoutForm
            pricePlan={pricePlanId}
            authToken={token}
          ></CheckoutForm>
        </section>
        <button></button>
      </div>
    </div>
  );
};

export default CheckoutPage;

"use client";

import Image from "next/image";
import HeroBannerHorizontal from "@/components/herosection/horizontal";
import ButtonGradiend from "@/components/button/gradient";
import ButtonGradiendOutlined from "@/components/button/gradientOutlined";
import { fetchPricePlans } from "@/services/payment.service";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function PricePage() {
  const paymentList = [
    {
      name: "visa",
      imageSrc: "/images/payment/visa-logo.png",
    },
    {
      name: "mastercard",
      imageSrc: "/images/payment/mastercard.png",
    },
    {
      name: "discover",
      imageSrc: "/images/payment/discover.png",
    },
    {
      name: "american-express",
      imageSrc: "/images/payment/american-express.png",
    },
  ];
  const router = useRouter();
  const [loading, setLoading] = useState(null);
  const [selectedCreditId, setSelectedCreditId] = useState(null);
  const [pricePlanList, setPricePlanList] = useState(null);

  const handleCreditChange = (id) => {
    setSelectedCreditId(id);
  };

  const handleCustomPlan = (pricePlan) => {
    if (!selectedCreditId) {
      toast.error("Please select a credit value from custom plan!");
      return;
    }

    router.push(
      `/checkout?pricePlan=${pricePlan?.id}&type=custom&credit=${selectedCreditId}`
    );
  };

  useEffect(() => {
    const fetchAsyncData = async () => {
      setLoading(true);
      await fetchPricePlans()
        .then((data) => {
          setPricePlanList(data.results);
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
        });
    };
    fetchAsyncData();
  }, []);

  if (loading === true) {
    return <Loading />;
  }

  return (
    <main className="min-h-screen mt-16">
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
          headline={
            "Maximize your value by getting the best bang for your buck."
          }
          description={
            "Explore Our Range of Affordable and Flexible Sound Effect Packages to Enhance Your Audio Experience"
          }
        ></HeroBannerHorizontal>
        <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gradientRight to-gradientLeft blur-[45px] md:blur-[90px] rounded-full w-[130px] h-[120px] md:w-[336px] md:h-[200px] lg:w-[436px] lg:h-[405px] absolute top-[5%] -left-[15%] lg:-left-[25%]"></div>
        <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gradientRight to-gradientLeft blur-[45px] md:blur-[90px] rounded-full w-[111px] h-[111px] md:w-[236px] md:h-[170px] lg:w-[336px] lg:h-[305px] absolute -bottom-[15%]  -right-[8%] lg:-right-[15%]"></div>
      </div>

      <div className="mt-16 container flex flex-col items-center gap-5">
        <h4 className="text-primaryText font-bold">Simple Pricing</h4>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <p className="text-primaryText font-medium">Get started now. </p>
          <ul className="flex flex-row flex-wrap justify-center gap-3">
            {paymentList.map((element, index) => {
              return (
                <li
                  key={"payment_" + index}
                  className="bg-white p-2 rounded-sm"
                >
                  <div className="relative w-[60px] h-[30px]">
                    <Image
                      src={element.imageSrc}
                      alt={element.name}
                      fill
                      sizes="width:auto"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-10 w-full flex flex-row flex-wrap gap-4">
          {pricePlanList &&
            pricePlanList.map((element, index) => {
              return (
                <div
                  className="basis-[100%] sm:basis-[48%] lg:basis-[23%] shrink bg-secondaryBg rounded-xl p-5"
                  key={"price_plan_" + index}
                >
                  <div className="flex flex-col justify-between h-[35rem]">
                    <div className="flex flex-col gap-5">
                      <h6 className="text-primaryText font-medium uppercase text-center">
                        {element.title}
                      </h6>
                      {element.duration_unit && (
                        <div className="flex justify-center items-center">
                          <h4 className="text-primaryText font-bold">
                            ${parseFloat(element.amount).toFixed(2)}/
                          </h4>
                          <p className="text-primaryText font-medium self-end">
                            {element.duration_unit} {element.duration}
                          </p>
                        </div>
                      )}
                      {element.duration === "custom" &&
                      element.credits.length > 0 ? (
                        <section className="custom-scrollbar pe-2 flex flex-col gap-2 max-h-[200px] overflow-y-auto">
                          {element.credits.map((creditObj, creditIndex) => {
                            return (
                              <div
                                className="border border-tertiaryBg px-3 py-4 rounded-xl relative"
                                key={"credit_" + creditIndex}
                              >
                                <input
                                  type="radio"
                                  id={creditObj.id}
                                  className="accent-gradientLeft"
                                  name="credit"
                                  style={{
                                    height: "15px",
                                    width: "15px",
                                    verticalAlign: "middle",
                                  }}
                                  checked={selectedCreditId === creditObj.id}
                                  onChange={() =>
                                    handleCreditChange(creditObj.id)
                                  }
                                ></input>
                                <label
                                  htmlFor={creditObj.id}
                                  className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center ps-10 pe-6 cursor-pointer"
                                >
                                  <span className="text-primaryText font-medium text-paragraph md:text-small">
                                    {creditObj.credit} Credit
                                  </span>
                                  <span className="text-primaryText font-medium text-paragraph md:text-small">
                                    ${creditObj.amount}
                                  </span>
                                </label>
                              </div>
                            );
                          })}
                        </section>
                      ) : null}

                      {element.description && (
                        // <ul className="flex flex-col gap-5">
                        //   {element.description.map((featureObj, idx) => {
                        //     return (
                        //       <li
                        //         className="flex gap-3 items-center"
                        //         key={"feature_" + idx}
                        //       >
                        //         <svg
                        //           xmlns="http://www.w3.org/2000/svg"
                        //           width="24"
                        //           height="25"
                        //           viewBox="0 0 24 25"
                        //           fill="none"
                        //         >
                        //           <path
                        //             d="M5 14.5L8.5 18L19 7"
                        //             stroke="white"
                        //             strokeWidth="1.5"
                        //             strokeLinecap="round"
                        //             strokeLinejoin="round"
                        //           />
                        //         </svg>
                        //         <span className="text-primaryText font-medium text-paragraph md:text-small">
                        //           {featureObj.title}
                        //         </span>
                        //       </li>
                        //     );
                        //   })}
                        // </ul>
                        <div
                          className="text-primaryText font-medium text-paragraph md:text-small flex flex-col gap-3"
                          dangerouslySetInnerHTML={{
                            __html: element.description,
                          }}
                        ></div>
                      )}
                    </div>

                    <div className="flex items-end">
                      {element.duration !== "custom" ? (
                        <ButtonGradiendOutlined
                          href={{
                            pathname: "checkout",
                            query: { pricePlan: element.id },
                          }}
                          className="mt-1 xs:mt-2 md:mt-4 xl:mt-7 h-[35px] md:h-[45px] lg:h-[55px] w-full rounded-lg justify-end"
                          gradient
                        >
                          <h6 className="text-primaryText font-medium">
                            Subscribe
                          </h6>
                        </ButtonGradiendOutlined>
                      ) : (
                        <ButtonGradiend
                          onClick={() => handleCustomPlan(element)}
                          className="mt-1 xs:mt-2 md:mt-4 xl:mt-7 h-[35px] md:h-[45px] lg:h-[55px] w-full rounded-lg justify-end"
                          gradient
                        >
                          <h6 className="text-primaryText font-medium">
                            Subscribe
                          </h6>
                        </ButtonGradiend>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="mt-10 flex flex-col gap-12">
          <h4 className="text-primaryText font-bold">Safe for all Platform</h4>
          <ul className="flex flex-row justify-center gap-12">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="55"
                viewBox="0 0 54 55"
                fill="none"
              >
                <g clipPath="url(#clip0_127_362)">
                  <path
                    d="M42.5947 22.9775L39.3524 21.6252L43.2157 19.571C44.3942 18.9538 45.4389 18.1095 46.2895 17.0866C47.1401 16.0637 47.7799 14.8826 48.1718 13.6113C48.5638 12.34 48.7003 11.0037 48.5733 9.67947C48.4464 8.3552 48.0585 7.06916 47.4322 5.89549C46.174 3.51948 44.0237 1.74048 41.4541 0.949761C38.8844 0.159038 36.1059 0.421345 33.7297 1.67899L10.7819 13.8402C9.07785 14.7369 7.6645 16.1004 6.70735 17.7712C5.75021 19.442 5.28889 21.351 5.37742 23.2745C5.46933 25.1496 6.07836 26.9627 7.13707 28.513C8.19578 30.0633 9.66287 31.2905 11.3759 32.0585C11.4569 32.0855 14.6204 33.4085 14.6204 33.4085L10.7819 35.4357C9.17112 36.3046 7.82528 37.5929 6.88692 39.1642C5.94857 40.7355 5.45265 42.5313 5.45167 44.3615C5.46469 47.0468 6.53733 49.6183 8.43634 51.5169C10.3354 53.4155 12.9071 54.4876 15.5924 54.5C17.2237 54.5 18.8257 54.1085 20.2724 53.357L43.2449 41.1935C44.9454 40.2954 46.3545 38.9311 47.307 37.2605C48.2594 35.5899 48.7158 33.6823 48.6224 31.7615C48.5271 29.8837 47.9136 28.0691 46.8501 26.5186C45.7865 24.9682 44.3122 23.7425 42.5947 22.9775ZM21.5932 34.6775V20.354L35.1089 27.518L21.5932 34.6775Z"
                    fill="#828282"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_127_362">
                    <rect
                      width="54"
                      height="54"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="55"
                viewBox="0 0 54 55"
                fill="none"
              >
                <g clipPath="url(#clip0_127_359)">
                  <path
                    d="M20.4772 53.8047V35.8497H14.9107V27.599H20.4772V24.044C20.4772 14.8527 24.6352 10.5935 33.6577 10.5935C34.56 10.5935 35.8065 10.688 36.9608 10.8252C37.8253 10.9142 38.683 11.0608 39.528 11.264V18.7452C39.0395 18.6997 38.5494 18.6727 38.0588 18.6642C37.5091 18.65 36.9593 18.6432 36.4095 18.644C34.8187 18.644 33.5768 18.86 32.6408 19.3392C32.0115 19.655 31.4825 20.1395 31.113 20.7387C30.5325 21.6837 30.2715 22.9775 30.2715 24.6807V27.599H39.0892L38.2207 32.3307L37.575 35.8497H30.2715V54.401C43.641 52.7855 54 41.4027 54 27.599C54 12.6882 41.9108 0.598999 27 0.598999C12.0893 0.598999 0 12.6882 0 27.599C0 40.262 8.7165 50.8865 20.4772 53.8047Z"
                    fill="#828282"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_127_359">
                    <rect
                      width="54"
                      height="54"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import HeroBannerHorizontal from "@/components/herosection/horizontal";
import ContactForm from "@/components/forms/contact";

const ContactPage = () => {
  return (
    <div>
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
          headline={"Get in touch"}
          description={
            "Want to get in touch? We’d love to hear from you. Here’s how you can reach us:"
          }
        ></HeroBannerHorizontal>
        <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gradientRight to-gradientLeft blur-[45px] md:blur-[90px] rounded-full w-[130px] h-[120px] md:w-[336px] md:h-[200px] lg:w-[436px] lg:h-[405px] absolute top-[5%] -left-[15%] lg:-left-[25%]"></div>
        <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gradientRight to-gradientLeft blur-[45px] md:blur-[90px] rounded-full w-[111px] h-[111px] md:w-[236px] md:h-[170px] lg:w-[336px] lg:h-[305px] absolute -bottom-[15%]  -right-[8%] lg:-right-[15%]"></div>
      </div>
      <div className="container relative flex flex-col gap-5 -mt-10">
        <div className="flex gap-1 md:gap-5">
          <div className="w-1/2 p-[12px] md:p-[40px] bg-secondaryBg rounded-[20px]">
            <div className="flex flex-col gap-4 md:gap-10 items-center">
              <div className="flex flex-col gap-3 items-center">
                <div className="relative p-3 md:p-6 w-[40px] h-[40px] md:w-[100px] md:h-[100px] bg-gradient-to-r from-gradientLeft to-gradientRight flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 45 44"
                    fill="none"
                  >
                    <path
                      d="M22.5 3.66663C26.8761 3.66663 31.0729 5.40501 34.1673 8.49936C37.2616 11.5937 39 15.7906 39 20.1666C39 25.8023 35.9273 30.415 32.6897 33.7241C31.0718 35.3593 29.3068 36.842 27.417 38.1535L26.636 38.6851L26.2693 38.929L25.5782 39.369L24.9622 39.7448L24.1995 40.1885C23.6816 40.4832 23.0959 40.6382 22.5 40.6382C21.9041 40.6382 21.3184 40.4832 20.8005 40.1885L20.0378 39.7448L19.0845 39.1581L18.7325 38.929L17.9808 38.4285C15.9421 37.0486 14.043 35.473 12.3103 33.7241C9.07267 30.4131 6 25.8023 6 20.1666C6 15.7906 7.73839 11.5937 10.8327 8.49936C13.9271 5.40501 18.1239 3.66663 22.5 3.66663ZM22.5 14.6666C21.7777 14.6666 21.0625 14.8089 20.3952 15.0853C19.728 15.3617 19.1216 15.7668 18.6109 16.2775C18.1002 16.7883 17.6951 17.3946 17.4187 18.0619C17.1423 18.7292 17 19.4444 17 20.1666C17 20.8889 17.1423 21.6041 17.4187 22.2714C17.6951 22.9387 18.1002 23.545 18.6109 24.0557C19.1216 24.5664 19.728 24.9716 20.3952 25.248C21.0625 25.5244 21.7777 25.6666 22.5 25.6666C23.9587 25.6666 25.3576 25.0872 26.3891 24.0557C27.4205 23.0243 28 21.6253 28 20.1666C28 18.7079 27.4205 17.309 26.3891 16.2775C25.3576 15.2461 23.9587 14.6666 22.5 14.6666Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4 className="uppercase text-primaryText font-bold">
                  Contact Address
                </h4>
              </div>
              <div className="flex flex-col gap-1 md:gap-2 items-center">
                <h6 className="text-primaryText">Reserved Training Limited</h6>
                <p className="text-primaryText w-[70%] text-center">
                  22 3a Carlton Road Bournemouth , Dorset, Bh1 3TG
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-[12px] md:p-[40px] bg-secondaryBg rounded-[20px]">
            <div className="flex flex-col gap-4 md:gap-10 items-center">
              <div className="flex flex-col gap-3 items-center">
                <div className="relative p-3 md:p-6 w-[40px] h-[40px] md:w-[100px] md:h-[100px] bg-gradient-to-r from-gradientLeft to-gradientRight flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 45 44"
                    fill="none"
                  >
                    <path
                      d="M22.5 3.66663C26.8761 3.66663 31.0729 5.40501 34.1673 8.49936C37.2616 11.5937 39 15.7906 39 20.1666C39 25.8023 35.9273 30.415 32.6897 33.7241C31.0718 35.3593 29.3068 36.842 27.417 38.1535L26.636 38.6851L26.2693 38.929L25.5782 39.369L24.9622 39.7448L24.1995 40.1885C23.6816 40.4832 23.0959 40.6382 22.5 40.6382C21.9041 40.6382 21.3184 40.4832 20.8005 40.1885L20.0378 39.7448L19.0845 39.1581L18.7325 38.929L17.9808 38.4285C15.9421 37.0486 14.043 35.473 12.3103 33.7241C9.07267 30.4131 6 25.8023 6 20.1666C6 15.7906 7.73839 11.5937 10.8327 8.49936C13.9271 5.40501 18.1239 3.66663 22.5 3.66663ZM22.5 14.6666C21.7777 14.6666 21.0625 14.8089 20.3952 15.0853C19.728 15.3617 19.1216 15.7668 18.6109 16.2775C18.1002 16.7883 17.6951 17.3946 17.4187 18.0619C17.1423 18.7292 17 19.4444 17 20.1666C17 20.8889 17.1423 21.6041 17.4187 22.2714C17.6951 22.9387 18.1002 23.545 18.6109 24.0557C19.1216 24.5664 19.728 24.9716 20.3952 25.248C21.0625 25.5244 21.7777 25.6666 22.5 25.6666C23.9587 25.6666 25.3576 25.0872 26.3891 24.0557C27.4205 23.0243 28 21.6253 28 20.1666C28 18.7079 27.4205 17.309 26.3891 16.2775C25.3576 15.2461 23.9587 14.6666 22.5 14.6666Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4 className="uppercase text-primaryText font-bold">
                  Contact Details
                </h4>
              </div>
              <div className="flex flex-col gap-1 md:gap-2 items-center">
                <h6 className="text-primaryText">Company number:13663798</h6>
                <p className="text-primaryText w-[70%] text-center">
                  Governed and controlled by the laws of the United Kingdom &
                  Ireland
                </p>
                <p className="text-primaryText text-small-xs md:paragraph-md lg:text-paragraph-lg text-center flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_206_5991)">
                      <path
                        d="M12.8398 13.3125V3.6875H10.2148V1.0625H2.33984V13.3125H0.589844V14.1875H6.71484V11.5625H8.46484V14.1875H14.5898V13.3125H12.8398ZM5.83984 9.8125H4.08984V8.0625H5.83984V9.8125ZM5.83984 7.1875H4.08984V5.4375H5.83984V7.1875ZM5.83984 4.5625H4.08984V2.8125H5.83984V4.5625ZM8.46484 9.8125H6.71484V8.0625H8.46484V9.8125ZM8.46484 7.1875H6.71484V5.4375H8.46484V7.1875ZM8.46484 4.5625H6.71484V2.8125H8.46484V4.5625ZM11.9648 9.8125H10.2148V8.0625H11.9648V9.8125ZM11.9648 7.1875H10.2148V5.4375H11.9648V7.1875Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_206_5991">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(0.589844 0.1875)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Email: admin@perfectsounds.net
                </p>
                <p className="text-primaryText text-small-xs md:paragraph-md lg:text-paragraph-lg text-center flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 8 9"
                    fill="none"
                  >
                    <path
                      d="M2.16156 4.08445C2.60031 4.94672 3.30719 5.65359 4.16945 6.09234L4.83977 5.42203C4.92508 5.33672 5.04391 5.31234 5.15055 5.34586C5.4918 5.45859 5.85742 5.51953 6.23828 5.51953C6.31909 5.51953 6.39659 5.55163 6.45373 5.60877C6.51087 5.66591 6.54297 5.74341 6.54297 5.82422V6.89062C6.54297 6.97143 6.51087 7.04893 6.45373 7.10607C6.39659 7.16321 6.31909 7.19531 6.23828 7.19531C4.86454 7.19531 3.54707 6.6496 2.57569 5.67822C1.60431 4.70684 1.05859 3.38936 1.05859 2.01562C1.05859 1.93482 1.09069 1.85732 1.14783 1.80018C1.20497 1.74304 1.28247 1.71094 1.36328 1.71094H2.42969C2.5105 1.71094 2.58799 1.74304 2.64513 1.80018C2.70227 1.85732 2.73438 1.93482 2.73438 2.01562C2.73438 2.39648 2.79531 2.76211 2.90805 3.10336C2.94156 3.21 2.91719 3.32883 2.83187 3.41414L2.16156 4.08445Z"
                      fill="white"
                    />
                  </svg>
                  Phone: +44 20 3287 1721
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="header p-10 relative bg-secondaryBg rounded-xl flex flex-col justify-center items-center">
          <section className="w-[100%] lg:w-[60%] py-10 md:py-32">
            <ContactForm></ContactForm>
          </section>
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
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

import classNames from "classnames";
import ButtonGradiend from "@/components/button/gradient";
import ButtonGradiendOutlined from "@/components/button/gradientOutlined";

const HeroBannerHorizontal = ({
  children,
  className,
  image,
  headline,
  description,
  buttonText,
  buttonVariant,
  ...props
}) => {
  return (
    <div className={classNames("relative", "overflow-hidden", className)}>
      <div className="absolute inset-0 -z-10">{image}</div>
      <div className="z-10 h-full flex justify-center">
        <div className="w-100 lg:w-8/12 xl:w-10/12 flex flex-col gap-[.5px] xs:gap-1 md:gap-2 xl:gap-3 justify-center items-center">
          <h1 className="text-primaryText font-bold text-center lg:leading-[4.5rem] xl:leading-[5.5rem]">
            {headline}
          </h1>
          <p className="text-primaryText text-center">{description}</p>
          {buttonVariant === "gradient" && (
            <ButtonGradiend
              className="mt-1 xs:mt-2 md:mt-4 xl:mt-7 h-[40px] lg:h-[55px] rounded-full"
              gradient
            >
              <h6 className="text-primaryText font-bold">{buttonText}</h6>
            </ButtonGradiend>
          )}
          {buttonVariant === "grad-outlined" && (
            <ButtonGradiendOutlined className="mt-1 xs:mt-2 md:mt-4 xl:mt-7 h-[40px] lg:h-[55px] rounded-full">
              <h6 className="bg-gradient-to-r from-gradientLeft to-gradientRight bg-clip-text text-transparent font-bold">
                {buttonText}
              </h6>
            </ButtonGradiendOutlined>
          )}
        </div>
      </div>
    </div>
  );
};

HeroBannerHorizontal.defaultProps = {
  image: null,
  headline: null,
  description: null,
  buttonText: null,
  buttonVariant: "gradient",
  className: "",
};

export default HeroBannerHorizontal;

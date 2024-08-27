import classNames from "classnames";
import ButtonGradiend from "@/components/button/gradient";
import ButtonGradiendOutlined from "@/components/button/gradientOutlined";

const HeroBannerAuth = ({
  image = defaultProps.image,
  headline = defaultProps.headline,
  description = defaultProps.description,
  buttonText = defaultProps.buttonText,
  buttonVariant = defaultProps.buttonVariant,
  className = defaultProps.className,
  href = defaultProps.href,
  children,
  ...props
}) => {
  return (
    <div className="hidden lg:flex lg:basis-[50%] h-inherit relative">
      {image}
      <div className="z-10 h-full flex justify-center">
        <div className="lg:w-[90%] xl:w-[80%] flex flex-col gap-[.5px] xs:gap-1 md:gap-2 xl:gap-3 justify-center items-center">
          <h4 className="text-primaryText font-bold text-center leading-[2.5rem]">
            {headline}
          </h4>
          <p className="text-primaryText text-center">{description}</p>
          {buttonVariant === "gradient" && (
            <ButtonGradiend
              className="mt-1 xs:mt-2 md:mt-4 xl:mt-7 h-[40px] lg:h-[55px] rounded-full"
              href={href}
              gradient
            >
              <h6 className="text-primaryText font-bold">{buttonText}</h6>
            </ButtonGradiend>
          )}
          {buttonVariant === "grad-outlined" && (
            <ButtonGradiendOutlined
              className="mt-1 xs:mt-2 md:mt-4 xl:mt-7 h-[40px] lg:h-[55px] rounded-full"
              href={href}
            >
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

const defaultProps = {
  image: null,
  headline: null,
  description: null,
  buttonText: null,
  buttonVariant: "gradient",
  href: null,
  className: "",
};

export default HeroBannerAuth;

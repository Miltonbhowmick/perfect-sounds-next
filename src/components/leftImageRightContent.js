import ButtonGradiend from "./button/gradient";
import classNames from "classnames";

const ImageContent = ({
  image,
  headline,
  description,
  buttonVariant,
  buttonText,
  className,
  ...props
}) => {
  const customStyles = classNames("flex flex-row gap-20 py-16");

  return (
    <div className={customStyles}>
      <div className="relative rounded-[20px] overflow-hidden w-1/2 basis-1/2 h-[200px] md:h-[300px] lg:h-[400px] xl-[450px]">
        {image}
      </div>
      <div className="content basis-1/2 flex flex-col gap-4 justify-center">
        <h4 className="text-primaryText font-bold">{headline}</h4>
        {description && <p className="text-primaryText">{description}</p>}
        {buttonVariant === "gradient" && (
          <ButtonGradiend
            className="mt-1 xs:mt-2 md:mt-4 xl:mt-7 px-5 h-[55px] w-max rounded-full"
            gradient
          >
            <h6 className="text-primaryText font-bold">{buttonText}</h6>
          </ButtonGradiend>
        )}
        {buttonVariant === "grad-outlined" && (
          <ButtonGradiendOutlined className="mt-1 xs:mt-2 md:mt-4 xl:mt-7 h-[55px] rounded-full">
            <h6 className="bg-gradient-to-r from-gradientLeft to-gradientRight bg-clip-text text-transparent font-bold">
              {buttonText}
            </h6>
          </ButtonGradiendOutlined>
        )}
      </div>
    </div>
  );
};

ImageContent.defaultProps = {
  image: null,
  headline: null,
  description: null,
  buttonText: null,
  buttonVariant: "gradient",
  className: "",
};

export default ImageContent;

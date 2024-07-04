import classNames from "classnames";
const HeroBannerHorizontal = ({ children, className, image, ...props }) => {
  return (
    <div className={classNames("relative", "overflow-hidden", className)}>
      <div className="absolute inset-0 -z-10">{image}</div>
      <div className="z-10 h-full flex justify-center">{children}</div>
    </div>
  );
};

HeroBannerHorizontal.defaultProps = {
  image: null,
  className: "",
};

export default HeroBannerHorizontal;

import classNames from "classnames";

const Chip = ({
  variant,
  color,
  prependIcon,
  appendIcon,
  children,
  className,
  ...props
}) => {
  const variantStyles = {
    "border-[1px]": variant === "outlined",
    "border-none": variant === "flat",
  };

  const bgColorStyles =
    variant === "outlined" ? `border-${color}` : `bg-${color}`;

  const styles = classNames(variantStyles, bgColorStyles, className);

  return (
    <div
      className={`${styles} inline-flex items-center rounded-full text-sm font-semibold h-[50px]`}
    >
      {prependIcon && (
        <span className="material-icons text-inherit mr-2">{prependIcon}</span>
      )}
      <span>{children}</span>
      {appendIcon && (
        <span className="material-icons text-gray-500 mr-2">{appendIcon}</span>
      )}
    </div>
  );
};

Chip.defaultProps = {
  variant: "flat",
  color: "text-gray-700",
  prependIcon: null,
  appendIcon: null,
};

export default Chip;

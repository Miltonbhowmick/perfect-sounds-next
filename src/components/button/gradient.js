import Link from "next/link";

const ButtonGradiend = ({
  children,
  href,
  onClick,
  className,
  gradient,
  ...props
}) => {
  const gradientStyles = "bg-gradient-to-r from-gradientLeft to-gradientRight";
  const solidStyles = "bg-secondaryButtonBg";

  const bgStyle = gradient ? gradientStyles : solidStyles;

  if (href) {
    return (
      <Link
        href={href}
        className={`${bgStyle} ${className} flex justify-center items-center px-[10px] min-h-[30px]`}
        {...props}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`${bgStyle} ${className} flex justify-center items-center px-[10px] min-h-[30px]`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

ButtonGradiend.defaultProps = {
  href: null,
  onClick: null,
  className: "",
  gradient: false,
};

export default ButtonGradiend;

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
        className={`${bgStyle} ${className} flex justify-center items-center p-[2px] h-[60px]`}
        {...props}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`${bgStyle} ${className} flex justify-center items-center p-[2px] h-[60px]`}
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

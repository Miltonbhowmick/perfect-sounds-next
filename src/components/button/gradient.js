import Link from "next/link";

const ButtonGradiend = ({
  href = defaultProps.href,
  onClick = defaultProps.onClick,
  className = defaultProps.className,
  gradient = defaultProps.gradient,
  children,
  ...props
}) => {
  const gradientStyles = "bg-gradient-to-r from-gradientLeft to-gradientRight";
  const solidStyles = "bg-secondaryButtonBg";

  const bgStyle = gradient ? gradientStyles : solidStyles;

  if (href) {
    return (
      <Link
        href={href}
        scroll={false}
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

const defaultProps = {
  href: null,
  onClick: null,
  className: "",
  gradient: false,
  children: null,
};

export default ButtonGradiend;

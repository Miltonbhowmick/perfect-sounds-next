import Link from "next/link";

const ButtonGradiendOutlined = ({
  children,
  href,
  onClick,
  className,
  gradient,
  ...props
}) => {
  const gradientStyles = "bg-gradient-to-r from-gradientLeft to-gradientRight";
  const solidStyles = "bg-secondaryButtonBg";

  const bgStyle = gradientStyles;

  if (href) {
    return (
      <Link
        href={href}
        className={`${bgStyle} ${className} mx-auto p-[2px] h-[80px]`}
        {...props}
      >
        <div className="bg-primaryBg  px-3 rounded-[inherit] flex h-full w-full items-center justify-center">
          {children}
        </div>
      </Link>
    );
  }
  return (
    <button
      className={`${bgStyle} ${className} mx-auto p-[2px] h-[80px]`}
      onClick={onClick}
      {...props}
    >
      <div className="bg-primaryBg  px-3 rounded-[inherit] flex h-full w-full items-center justify-center">
        {children}
      </div>
    </button>
  );
};

ButtonGradiendOutlined.defaultProps = {
  href: null,
  onClick: null,
  className: "",
  gradient: false,
};

export default ButtonGradiendOutlined;

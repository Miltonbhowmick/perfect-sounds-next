import Link from "next/link";

const ButtonGradiendOutlined = ({
  href = defaultProps.href,
  onClick = defaultProps.onClick,
  className = defaultProps.className,
  gradient = defaultProps.gradient,
  children,
  ...props
}) => {
  const gradientStyles = "bg-gradient-to-r from-gradientLeft to-gradientRight";
  const solidStyles = "bg-secondaryButtonBg";

  const bgStyle = gradientStyles;

  if (href) {
    return (
      <Link
        href={href}
        scroll={false}
        className={`${bgStyle} ${className} p-[2px] min-h-[30px]`}
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
      className={`${bgStyle} ${className} p-[2px] min-h-[30px]`}
      onClick={onClick}
      {...props}
    >
      <div className="bg-primaryBg  px-3 rounded-[inherit] flex h-full w-full items-center justify-center">
        {children}
      </div>
    </button>
  );
};

const defaultProps = {
  href: null,
  onClick: null,
  className: "",
  gradient: false,
};

export default ButtonGradiendOutlined;

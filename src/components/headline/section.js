import classNames from "classnames";

const HeadlineSection = ({
  headline,
  description,
  side,
  textColor,
  uppercase,
  ...props
}) => {
  const contentPositionStyles = {
    "justify-start": side === "left",
    "justify-center": side === "center",
    "justify-end": side === "end",
  };

  return (
    <div
      className={classNames(
        "flex",
        "flex-col",
        {
          "justify-start": side === "left",
        },
        { "justify-center": side === "center" },
        { "justify-end": side === "end" }
      )}
    >
      <h4
        className={`${
          uppercase ? "uppercase" : "capitalize"
        } ${textColor} font-bold`}
      >
        {headline}
      </h4>
      {description && (
        <p className="text-secondaryText font-normal">{description}</p>
      )}
    </div>
  );
};

HeadlineSection.defaultProps = {
  headline: null,
  description: null,
  side: "left",
  textColor: "text-primaryText",
  uppercase: false,
};

export default HeadlineSection;

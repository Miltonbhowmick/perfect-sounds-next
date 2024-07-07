import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const ButtonMediaPlay = ({
  onClick = defaultProps.onClick,
  playing = defaultProps.playing,
  gradient = defaultProps.gradient,
  className = defaultProps.className,
  ...props
}) => {
  const gradientStyles = "bg-gradient-to-r from-gradientLeft to-gradientRight";
  const solidStyles = "bg-secondaryButtonBg";

  const bgStyle = gradient ? gradientStyles : solidStyles;

  return (
    <button
      className={`${bgStyle} ${className} flex justify-center items-center min-w-[30px] min-h-[30px]`}
      onClick={onClick}
      {...props}
    >
      {playing === true ? (
        <PauseIcon fontSize="large" />
      ) : (
        <PlayArrowIcon fontSize="large" />
      )}
    </button>
  );
};

const defaultProps = {
  onClick: null,
  playing: false,
  gradient: false,
  className: "",
};

export default ButtonMediaPlay;

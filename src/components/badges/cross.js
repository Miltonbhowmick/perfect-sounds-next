const BadgeCross = ({
  firstLoop,
  secondLoop,
  firstContent,
  secondContent,
  className,
}) => {
  let firstContentElements = [];
  for (let i = 0; i < firstLoop; i++) {
    firstContentElements.push(
      <h4
        className="text-primaryText font-bold uppercase flex items-center gap-4 px-2"
        key={"cross_first_" + i}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
        >
          <path
            d="M21.4378 0.37932L21.1151 10.5342L30.4895 7.7105L32.8792 15.6304L23.3474 18.369L29.0104 26.553L22.2187 31.2197L16.3984 22.9507L10.2248 30.8386L3.74565 25.6702L9.83424 17.9397L0.495556 14.6014L3.30326 6.84663L12.5594 10.2623L12.8821 0.107457L21.4378 0.37932Z"
            fill="white"
          />
        </svg>
        <span className="inline-block w-max">{firstContent}</span>
      </h4>
    );
  }

  let secondContentElements = [];
  for (let i = 0; i < secondLoop; i++) {
    secondContentElements.push(
      <h4
        className="text-primaryText font-bold uppercase flex items-center gap-4 px-2"
        key={"cross_second_" + i}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
        >
          <path
            d="M21.4378 0.37932L21.1151 10.5342L30.4895 7.7105L32.8792 15.6304L23.3474 18.369L29.0104 26.553L22.2187 31.2197L16.3984 22.9507L10.2248 30.8386L3.74565 25.6702L9.83424 17.9397L0.495556 14.6014L3.30326 6.84663L12.5594 10.2623L12.8821 0.107457L21.4378 0.37932Z"
            fill="white"
          />
        </svg>
        <span className="inline-block w-max">{secondContent}</span>
      </h4>
    );
  }

  return (
    <div
      className={`h-[70px] xs-[50px] sm:h-[90px] md:h-[150px] lg:h-[200px] xl:h-[200px] relative -top-[25px] overflow-hidden ${className}`}
    >
      <div className="bg-gradient-to-r from-gradientLeft to-gradientRight absolute z-[2] top-1/2 -translate-y-1/2 -left-[10px] right-0 rotate-[1.817deg] h-[38px] xs-[40px] sm:h-[45px] md:h-[100px] xl:h-[100px] xl:w-[120%] flex items-center">
        {firstContentElements}
      </div>
      <div className="bg-secondaryBg absolute z-[1] top-1/2 -translate-y-1/2 -left-[10px] right-0 rotate-[-1.817deg] h-[38px] xs-[40px] sm:h-[45px] md:h-[100px] xl:h-[100px] xl:w-[120%]  flex items-center">
        {secondContentElements}
      </div>
    </div>
  );
};

BadgeCross.defaultProps = {
  firstLoop: 0,
  secondLoop: 0,
  firstContent: null,
  secondContent: null,
};

export default BadgeCross;

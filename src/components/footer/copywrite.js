const CopyWrite = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <p className="py-7 text-secondaryText text-center">
      PerfectSounds &#169;{year}, All rights reserved.
    </p>
  );
};
export default CopyWrite;

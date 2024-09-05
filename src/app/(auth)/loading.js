export default function Loading() {
  return (
    <div className="fixed z-[999] inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="animate-ping">
        <img
          className="md:w-[80px] lg:w-[120px]"
          src="/images/company-logo/perfectsounds-logo-white.png"
        />
      </div>
    </div>
  );
}

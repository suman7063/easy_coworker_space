import bottom_banner from "../assets/bottom_banner.svg";
import googleBtn from "../assets/googleBtn.png";
import appBtn from "../assets/appBtn.png";
const BottomBanner = () => {
  return (
    <div className="max-w-[1200px] md:w-[90%]  mx-auto relative top-[8px] md:top-[200px]">
      <div className="md:flex justify-between md:items-end border-[#EEE7E7] shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-white rounded-[6px] md:h-52 p-4 md:px-8 md:py-0 w-[90%] md:w-full m-auto">
        <img
          src={bottom_banner}
          alt="bottom_banner"
          className="md:mt-[-140px] h-[350px] w-full md:w-[400px]"
        />

        <div className="w-full md:w-[50%] md:ml-[5%] max-w-[350px] m-auto md:max-w-none md:m-auto-none">
          <p className="text-sm hidden md:block">
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </p>
          <div className="flex justify-between md:justify-start my-4 md:my-8">
            <img
              src={googleBtn}
              alt="googleBtn"
              className="md:w-[130px] md:h-[40px] lg:w-[146px] lg:h-[45px]"
            />
            <img
              src={appBtn}
              alt="appBtn"
              className="md:ml-4 lg:ml-8  md:w-[130px] md:h-[40px] lg:w-[146px] lg:h-[45px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BottomBanner;

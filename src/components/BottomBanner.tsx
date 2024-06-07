import bottom_banner from "../assets/bottom_banner.svg";
import googleBtn from "../assets/googleBtn.png";
import appBtn from "../assets/appBtn.png";
const BottomBanner = () => {
  return (
    <div className="max-w-[1200px] w-[90%]  mx-auto relative top-[280px]">
      <div className="flex justify-between items-end border-[#EEE7E7] shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-white rounded-[6px] h-52 px-8">
        <img src={bottom_banner} alt="bottom_banner" className="w-[45%]" />
        <div className="w-[50%] ml-[5%]">
          <p className="text-sm">
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </p>
          <div className="flex mt-8">
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

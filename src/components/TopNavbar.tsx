import logo from "../assets/logo.svg";
import callIcon from "../assets/material-symbols_call.svg";
const TopNavbar = () => {
  return (
    <header className="w-full px-[5%] z-50  mx-auto py-4 bg-white fixed">
      <div className=" flex justify-between items-center">
        <img
          src={logo}
          alt="logo"
          className="w-[100px] h-[32px] md:w-[125px] md:h-[40px] cursor-pointer"
        />
        <div className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] border border-[#F2B304] rounded-[4px] flex items-center justify-center cursor-pointer">
          <img src={callIcon} alt="callIcon" />
        </div>
      </div>
    </header>
  );
};
export default TopNavbar;

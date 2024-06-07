import React, { useContext, useEffect } from "react";
import TopNavbar from "./components/TopNavbar";
import left from "./assets/left_banner.svg";
import right from "./assets/Combine.svg";
import WhyChoose from "./components/WhyChoose";
import OurSpace from "./components/OurSpace";
import { cardContext } from "./context/ManageState";
import jsonData from "./data/data.json";
import BottomBanner from "./components/BottomBanner";
const Home = () => {
  const { setValue } = useContext(cardContext);
  const callApi = () => {
    setValue(jsonData);
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <div className="text-[#263238]">
      <TopNavbar />
      <div className="hidden md:block relative top-[70px]">
        <div className="absolute top-16 w-full ">
          <div className="max-w-[1200px] mx-auto w-[90%]">
            <h1 className="md:text-3xl lg:text-5xl font-bold  md:w-[400px] lg:w-[550px] text-[#263238]">
              Host your meeting with world-class amenities. Starting at{" "}
              <span className="text-[#FFBB00]">₹199/</span>
            </h1>
          </div>
        </div>
        <div className="flex">
          <div
            className="md:w-[60%] md:h-[450px] 2xl:h-[800px]  bg-cover bg-center"
            style={{ backgroundImage: `url(${left})` }}
          />
          <div
            className="w-[100%] md:w-[40%] h-[320px] md:h-[450px] 2xl:h-[800px] bg-cover bg-bottom object-cover no-r"
            style={{ backgroundImage: `url(${right})` }}
          />
        </div>
      </div>
      <div className="md:hidden relative top-[70px] w-full">
        <div
          className="max-w-[678px] h-[320px] bg-cover bg-bottom object-cover no-r"
          style={{ backgroundImage: `url(${right})` }}
        />
        <div
          className="w-full h-16 bg-cover bg-center relative top-4"
          style={{ backgroundImage: `url(${left})` }}
        >
          <div className="max-w-[320px] w-full text-center m-auto">
            <h1 className="font-bold text-[#263238] text-center text-lg sm:text-xl">
              Host your meeting with world-class amenities. Starting at{" "}
              <span className="text-[#FFBB00]">₹199/</span>
            </h1>
          </div>
        </div>
      </div>

      <WhyChoose />
      <OurSpace />
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-[1200px] w-[90%] mx-auto mt-16">
        Download our app now
      </h1>
      <BottomBanner />
      <footer className="bg-[#222E34] w-full text-xs text-white text-center mt-8 md:mt-[250px] py-4 relative bottom-0">
        © Copyright 2024. Bhive Private Limited
      </footer>
    </div>
  );
};
export default Home;

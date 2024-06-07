import wifi from "../assets/wifiIcon.png";
import gym from "../assets/gymIcon.png";
import lounge from "../assets/loungesIcon.png";
import cafe from "../assets/cafeIcon.png";
const WhyChoose = () => {
  return (
    <>
      <div className="mt-28 md:mt-20 max-w-[1200px] w-[90%] mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
          Why Choose us?
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-4">
          <div className="md:border-b py-2 px-4 md:flex items-center text-sm md:text-md lg:text-lg font-medium text-center md:text-left bg-white shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-[6px] md:bg-transparent md:shadow-none md:rounded-none ">
            <img
              src={wifi}
              alt="wifi"
              className="w-6 h-5 md:mr-3 m-auto md:m-0"
            />
            Community Events
          </div>
          <div className="md:border-b md:border-l md:border-r py-2 px-4 md:flex items-center text-sm md:text-md lg:text-lg font-medium text-center md:text-left bg-white shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-[6px] md:bg-transparent md:shadow-none md:rounded-none">
            <img
              src={gym}
              alt="gym"
              className="w-6 h-5 md:mr-3 m-auto md:m-0"
            />
            Gym Facilities
          </div>
          <div className="md:border-b  md:border-r py-2 px-4 md:flex items-center text-sm md:text-md lg:text-lg font-medium text-center md:text-left bg-white shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-[6px] md:bg-transparent md:shadow-none md:rounded-none">
            <img
              src={wifi}
              alt="wifi"
              className="w-6 h-5 md:mr-3 m-auto md:m-0"
            />
            High-Speed WiFi
          </div>
          <div className="md:border-b py-2 px-4 md:flex items-center text-sm md:text-md lg:text-lg font-medium text-center md:text-left bg-white shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-[6px] md:bg-transparent md:shadow-none md:rounded-none">
            <img
              src={cafe}
              alt="cafe"
              className="w-6 h-5 md:mr-3 m-auto md:m-0"
            />
            Cafe & Tea Bar
          </div>
          <div className="py-2 px-4 md:flex items-center text-sm md:text-md lg:text-lg font-medium text-center md:text-left bg-white shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-[6px] md:bg-transparent md:shadow-none md:rounded-none">
            <img
              src={cafe}
              alt="wifi"
              className="w-6 h-5 md:mr-3 m-auto md:m-0"
            />
            Affordable
          </div>
          <div className="md:border-l md:border-r py-2 px-4 md:flex items-center text-sm md:text-md lg:text-lg font-medium text-center md:text-left bg-white shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-[6px] md:bg-transparent md:shadow-none md:rounded-none">
            <img
              src={lounge}
              alt="lounge"
              className="w-6 h-5 md:mr-3 m-auto md:m-0"
            />
            Comfort Lounges
          </div>
          <div className="md:border-r py-2 px-4 md:flex items-center text-sm md:text-md lg:text-lg font-medium text-center md:text-left bg-white shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-[6px] md:bg-transparent md:shadow-none md:rounded-none">
            <img
              src={gym}
              alt="wifi"
              className="w-6 h-5 md:mr-3 m-auto md:m-0"
            />
            Quick Booking
          </div>
          <div className="py-2 px-4 md:flex items-center text-sm md:text-md lg:text-lg font-medium text-center md:text-left bg-white shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-[6px] md:bg-transparent md:shadow-none md:rounded-none">
            <img
              src={wifi}
              alt="wifi"
              className="w-6 h-5 md:mr-3 m-auto md:m-0"
            />
            Sports Area
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;

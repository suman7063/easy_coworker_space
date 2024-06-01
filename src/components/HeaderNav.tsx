import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../assets/SearchIcon";
import ToggelBtn from "../assets/ToggelBtn";

interface City {
  _id: string;
  name: string;
  imgUrl: string;
  customHtml: any;
}
const HeaderNavbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [inpValue, setInpValue] = useState("");
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <header
      className="fixed w-full top-0  z-[2000] text-white flex justify-between items-center custom-gradient"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 10%, transparent",
      }}
    >
      <nav className="w-full md:hidden  px-0">
        <div className="flex flex-wrap items-center justify-between  xl:px-0 py-2 mx-auto">
          <div className="flex items-center">
            <h1 className="text-lg ml-4 font-bold italic">Click Film</h1>
          </div>
          <ToggelBtn
            setMobileMenuOpen={setMobileMenuOpen}
            isMobileMenuOpen={isMobileMenuOpen}
          />
          <div
            className={
              isMobileMenuOpen
                ? "w-full md:block md:w-auto bg-white"
                : "hidden w-full md:block md:w-auto"
            }
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:mr-2">
              <li>
                <a
                  href="/about"
                  className="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:border-0  md:p-2 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/bePartner"
                  className="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:border-0  md:p-2 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Be A Partner
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:border-0  md:p-2 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contactUs"
                  className="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:border-0  md:p-2 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="w-full hidden md:block px-4 md:px-16">
        <div className="flex flex-wrap items-center justify-between  xl:px-0 py-5  mx-auto">
          <h1 className="text-3xl font-bold italic">Click Film</h1>
          <ToggelBtn
            setMobileMenuOpen={setMobileMenuOpen}
            isMobileMenuOpen={isMobileMenuOpen}
          />
          <div
            className={
              isMobileMenuOpen
                ? "w-full md:block md:w-auto"
                : "hidden w-full md:block md:w-auto"
            }
            id="navbar-default"
          >
            <ul className="flex items-center space-x-4">
              <li className="flex items-center h-[40px]">
                {expanded ? (
                  <div
                    className={`expandable-div bg-white border border-gray-300 rounded-lg shadow-sm h-[40px] ${
                      expanded ? "expanded" : ""
                    }`}
                    ref={searchRef}
                  >
                    <input
                      placeholder="Search for a movie"
                      className="ml-4 focus:outline-none text-black"
                      value={inpValue}
                      onChange={(e) => setInpValue(e.target.value)}
                    />
                    <button
                      onClick={() => {
                        navigate(`/search/${inpValue}`);
                      }}
                      type="button"
                      className="text-white bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg p-4 "
                    >
                      <Search />
                    </button>
                  </div>
                ) : (
                  <button onClick={() => setExpanded(!expanded)}>
                    <Search />
                  </button>
                )}
              </li>
              <li>Popular</li>
              <li>Top Rated</li>
              <li>Up Coming</li>
              <li>Now Playing</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNavbar;

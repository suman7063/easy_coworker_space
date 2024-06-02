import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../assets/SearchIcon";
import ToggelBtn from "../assets/ToggelBtn";
import { navItem, convertToTitleCase } from "./utils";

const HeaderNavbar = ({ scrollYValue }: { scrollYValue: number }) => {
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
    // if click outside then open search closed
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const ExpandedInp = () => {
    return (
      <>
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
                if (inpValue.length > 3) navigate(`/search/${inpValue}`);
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
      </>
    );
  };
  const CommonItem = () => {
    return (
      <>
        <li className="items-center h-[40px] hidden md:flex ">
          <ExpandedInp />
        </li>
        {navItem.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                navigate(`/movies/${item}`);
              }}
              className="cursor-pointer text-black md:text-white"
            >
              {convertToTitleCase(item)}
            </li>
          );
        })}
      </>
    );
  };
  return (
    <header
      className="fixed w-full top-0  z-[2000] text-white flex justify-between items-center custom-gradient"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 10%, transparent",
        backgroundColor: scrollYValue > 30 ? "#000" : "",
      }}
    >
      <nav className="w-full md:hidden  px-0">
        <div className="flex flex-wrap items-center justify-between  xl:px-0 py-2 mx-auto">
          <div className="flex items-center">
            <h1 className="text-lg ml-4 font-bold italic">Click Film</h1>
          </div>
          <ExpandedInp />
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
            <ul className="font-medium flex flex-col p-4 rtl:space-x-reverse ">
              <CommonItem />
            </ul>
          </div>
        </div>
      </nav>
      <nav className="w-full hidden md:block px-4 md:px-16">
        <div className="flex flex-wrap items-center justify-between  xl:px-0 py-3  mx-auto">
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
            <ul className=" flex items-center space-x-4">
              <CommonItem />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNavbar;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { navItem, convertToTitleCase } from "./utils";
import Search from "../assets/SearchIcon";
import ToggelBtn from "../assets/ToggelBtn";
const Common = ({
  expanded,
  setExpanded,
  setMobileMenuOpen,
}: {
  expanded: boolean;
  setExpanded: any;
  setMobileMenuOpen: any;
}) => {
  const navigate = useNavigate();
  const [inpValue, setInpValue] = useState("");

  return (
    <>
      <li className="hidden md:flex items-center h-[40px]">
        {expanded ? (
          <div
            className={`expandable-div bg-white border border-gray-300 rounded-lg shadow-sm h-[40px] ${
              expanded ? "expanded" : ""
            }`}
          >
            <input
              placeholder="Search for a movie"
              className="ml-4 focus:outline-none text-black"
              value={inpValue}
              onChange={(e) => setInpValue(e.target.value)}
            />
            <button
              onClick={() => {
                setExpanded(false);
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
      {navItem.map((item, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              setMobileMenuOpen(false);
              navigate(`/movies/${item}`);
            }}
            className="cursor-pointer text-white"
          >
            {convertToTitleCase(item)}
          </li>
        );
      })}
    </>
  );
};
const HeaderNavbar = ({ scrollYValue }: { scrollYValue: number }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const [inpValue, setInpValue] = useState("");
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
          <div className="flex items-center h-[40px]">
            {expanded ? (
              <div
                className={`expandable-div bg-white border border-gray-300 rounded-lg shadow-sm h-[40px] ${
                  expanded ? "expanded" : ""
                }`}
              >
                <input
                  placeholder="Search for a movie"
                  className="ml-4 focus:outline-none text-black"
                  value={inpValue}
                  onChange={(e) => setInpValue(e.target.value)}
                />
                <button
                  onClick={() => {
                    setExpanded(false);
                    setMobileMenuOpen(false);
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
          </div>
          <ToggelBtn
            setMobileMenuOpen={setMobileMenuOpen}
            isMobileMenuOpen={isMobileMenuOpen}
          />
          <div
            className={
              isMobileMenuOpen
                ? "w-full md:block md:w-auto bg-black "
                : "hidden w-full md:block md:w-auto"
            }
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 mt-4 rtl:space-x-reverse">
              <Common
                setExpanded={setExpanded}
                expanded={expanded}
                setMobileMenuOpen={setMobileMenuOpen}
              />
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
              <Common
                setExpanded={setExpanded}
                expanded={expanded}
                setMobileMenuOpen={setMobileMenuOpen}
              />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNavbar;

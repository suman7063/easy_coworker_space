import Card from "./Card";
import React, { useContext } from "react";
import { cardContext } from "../context/ManageState";
const OurSpace = () => {
  const { value } = useContext(cardContext);
  console.log(value);
  return (
    <>
      <div className="max-w-[1200px] w-[90%]  mx-auto mt-16">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Our Space Overview
        </h1>
        <div className="grid gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-4">
          {value.map((item: any) => {
            return (
              <div key={1}>
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurSpace;

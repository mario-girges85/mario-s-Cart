import React from "react";

//component
const Cartdataa = ({ products, totalpricefunction, itemscountfun }) => {
  if (itemscountfun() == 0) {
    return (
      <h1 className="flex justify-center items-center font-bold to-zinc-600 mt-8 text-red-700">
        Your Cart is empty
      </h1>
    );
  } else {
    return (
      <div>
        <h1 className="flex justify-center items-center font-bold to-zinc-600 mt-8">
          Your total bill is : {totalpricefunction()} $
        </h1>
      </div>
    );
  }
};

export default Cartdataa;

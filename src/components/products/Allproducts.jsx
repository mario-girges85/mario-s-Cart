import React from "react";
import Oneproduct from "./Oneproduct";

const Allproducts = ({ productsFromApp, addTocart }) => {
  return (
    <div>
      <div className="flex   justify-evenly  mr-auto flex-row  flex-wrap">
        <h1>All products</h1>
      </div>
      <div className="flex flex-wrap flex-row justify-around items-center  ">
        {productsFromApp.map((Oneproductfromall) => (
          <Oneproduct
            addTocart={addTocart}
            key={Oneproductfromall.id}
            Oneproductfromall={Oneproductfromall}
          />
        ))}
      </div>
    </div>
  );
};

export default Allproducts;

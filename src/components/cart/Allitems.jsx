import React from "react";
import Oneitem from "./Oneitem";
import { useState } from "react";

const Allitems = ({
  itemsFromApp,
  increment,
  decrement,
  remove,
  deleteallfun,
}) => {
  return (
    <div>
      <div className="flex justify-center items-center mt-5"></div>
      <div>
        {itemsFromApp.map((Oneitemfromall) => (
          <Oneitem
            remove={remove}
            decrement={decrement}
            increment={increment}
            key={Oneitemfromall.id}
            Oneitemfromall={Oneitemfromall}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button onClick={() => deleteallfun()} className="btn  btn-error">
          Remove all
        </button>
      </div>
    </div>
  );
};

export default Allitems;

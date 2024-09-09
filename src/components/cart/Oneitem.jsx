import React from "react";
import Oneproduct from "../products/Oneproduct";

const Oneitem = ({ Oneitemfromall, increment, decrement, remove }) => {
  {
    if (Oneitemfromall.cart) {
      return (
        <div className="flex flex-col sm:flex-row justify-between items-center pt-2 pb-2 px-4 m-3 rounded-2xl bg-slate-600 space-y-2 sm:space-y-0 sm:space-x-4">
          <span>
            <img
              className="rounded-lg w-20 sm:w-14"
              src={Oneitemfromall.img}
              alt={Oneitemfromall.name}
            />
          </span>
          <span className="text-sm sm:text-base">{Oneitemfromall.name}</span>
          <span className="text-sm sm:text-base">
            Price : {Oneitemfromall.price} $
          </span>
          <span className="text-sm sm:text-base">
            Count : {Oneitemfromall.items}
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                decrement(Oneitemfromall.id);
              }}
              className="btn btn-active font-bold text-sm sm:text-base"
            >
              -
            </button>
            <button
              onClick={() => {
                increment(Oneitemfromall.id);
              }}
              className="btn btn-active btn-neutral font-bold text-sm sm:text-base"
            >
              +
            </button>
            <button
              onClick={() => remove(Oneitemfromall.id)}
              className="btn btn-active btn-secondary text-sm sm:text-base"
            >
              Remove
            </button>
          </div>
          <span className="text-sm sm:text-base">
            Total: {Oneitemfromall.price * Oneitemfromall.items} $
          </span>
        </div>
      );
    }
  }
};

export default Oneitem;

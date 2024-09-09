import React from "react";

const Oneproduct = ({ Oneproductfromall, addTocart }) => {
  // console.log(Oneproductfromall);

  return (
    <div className="card mt-5 bg-base-100 w-3/4 md:w-[45%] lg:w-[22%]   shadow-xl">
      <figure>
        <img className="h-40" src={Oneproductfromall.img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Oneproductfromall.name}</h2>
        <p>{Oneproductfromall.price} $</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => addTocart(Oneproductfromall.id)}
            className="btn btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Oneproduct;

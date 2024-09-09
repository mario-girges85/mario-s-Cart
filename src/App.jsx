import { useState } from "react";
import React from "react";
import Allproducts from "./components/products/Allproducts";
import Allitemts from "./components/cart/Allitems";
import Navbar from "./components/Navbar";
import Cartdataa from "./components/cart/Cartdataa";

import imglaptop from "./images/laptop.jpg";
import imgkeyboard from "./images/keyboard.jpg";
import imgmonitor from "./images/monitor.jpg";
import imgmouse from "./images/mouse.jpg";

function App() {
  //Data
  const [products, setProduct] = useState([
    {
      id: 1,
      name: "lenovo laptop",
      price: 45000,
      items: 1,
      img: imglaptop,
      cart: false,
    },
    {
      id: 2,
      name: "gaming keyboard",
      price: 700,
      items: 1,
      img: imgkeyboard,
      cart: true,
    },
    {
      id: 3,
      name: "ips monitor",
      price: 3800,
      items: 1,
      img: imgmonitor,
      cart: false,
    },
    {
      id: 4,
      name: "gaming mouse",
      price: 420,
      items: 1,
      img: imgmouse,
      cart: true,
    },
  ]);
  //increment function
  function increment(x) {
    let newproducts = products.map((product) => {
      if (product.id == x) {
        product.items++;
      }
      return product;
    });
    setProduct(newproducts);
  }

  //decrement function
  function decrement(x) {
    let newproducts = products.map((product) => {
      if (product.id == x && product.items != 1) {
        product.items--;
      }
      return product;
    });
    setProduct(newproducts);
  }

  //add to cart function
  function addTocart(x) {
    let newproducts = products.map((product) => {
      if (product.id == x && product.cart == false) {
        product.cart = true;
        product.items = 1;
      } else if (product.id == x && product.cart == true) {
        increment(x);
      }
      return product;
    });
    setProduct(newproducts);
  }

  //remove
  function remove(x) {
    let newproducts = products.map((product) => {
      if (product.id == x) {
        product.items = 0;
        product.cart = false;
      }
      return product;
    });
    setProduct(newproducts);
  }
  //total price
  function totalpricefunction() {
    let totalprice = 0;
    products.map((product) => {
      let totalitem = product.items * product.price;
      totalprice += totalitem;
    });
    return totalprice;
  }

  //how many items in the cart
  function itemscountfun() {
    let itemscount = 0;
    products.map((product) => {
      if (product.cart) {
        itemscount++;
      }
    });
    return itemscount;
  }

  return (
    <div>
      <Navbar
        itemscountfun={itemscountfun}
        totalpricefunction={totalpricefunction}
      />
      <Allproducts addTocart={addTocart} productsFromApp={products} />

      <Cartdataa
        products={products}
        totalpricefunction={totalpricefunction}
        itemscountfun={itemscountfun}
      />
      <Allitemts
        remove={remove}
        decrement={decrement}
        increment={increment}
        itemsFromApp={products}
      />
    </div>
  );
}

export default App;

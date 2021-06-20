// feature 1
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import data from "../data.json";
import ProductsContainer from "./ProductsContainer";
import Filter from "../components/Filter";
import Cart from "../components/Cart";
import store from "../store";
import { Provider } from "react-redux";

const App = () => {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [cart, setCart] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  const filterProducts = (event) => {
    const value = event.target.value;
    if (value === "") {
      setSize(value);
      setProducts(data.products);
    } else {
      setSize(value);
      setProducts(
        data.products.filter(
          (product) => product.sizes.indexOf(value) >= 0
        )
      );
    }
  };

  const sortProducts = (event) => {
    const value = event.target.value;
    setSort(value);
    setProducts(
      products
        .slice()
        .sort((a, b) =>
          value === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : value === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a.id > b.id
            ? 1
            : -1
        )
    );
  };

  const addToCart = (product) => {
    const cartItems = cart.slice();
    let inCart = false;

    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        inCart = true;
      }
    });
    if (!inCart) {
      cartItems.push({ ...product, count: 1 });
    }
    setCart(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const removeFromCart = (product) => {
    const cartItems = cart.slice();
    setCart(cartItems.filter((item) => item.id !== product.id));
    localStorage.setItem(
      "cartItems",
      JSON.stringify(
        cartItems.filter((item) => item.id !== product.id)
      )
    );
  };

  const createOrder = (order) => {
    alert("Saving order for " + order.name);
  };

  return (
    <Provider store={store}>
      <div className="grid-container">
        <header>
          <a href="/">Shopping App</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={products.length}
                size={size}
                sort={sort}
                onFilterProducts={filterProducts}
                onSortProducts={sortProducts}
              />
              <ProductsContainer
                products={products}
                onAddToCart={addToCart}
              />
            </div>
            <div className="sidebar">
              <Cart
                cartItems={cart}
                onRemoveFromCart={removeFromCart}
                onCreateOrder={createOrder}
              />
            </div>
          </div>
        </main>
        <footer>All rights reserved</footer>
      </div>
    </Provider>
  );
};

export default App;

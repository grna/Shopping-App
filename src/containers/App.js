// feature 1
import React, { useState } from "react";
import ProductsContainer from "./ProductsContainer";
import Filter from "../components/Filter";
import Cart from "../components/Cart";
import store from "../store";
import { Provider } from "react-redux";

const App = () => {
  const [cart, setCart] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

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
              <Filter />
              <ProductsContainer onAddToCart={addToCart} />
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

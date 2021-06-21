// feature 1
import React from "react";
import ProductsContainer from "./ProductsContainer";
import Filter from "../components/Filter";
import Cart from "../components/Cart";
import store from "../store";
import { Provider } from "react-redux";

const App = () => {
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
              <ProductsContainer />
            </div>
            <div className="sidebar">
              <Cart />
            </div>
          </div>
        </main>
        <footer>All rights reserved</footer>
      </div>
    </Provider>
  );
};

export default App;

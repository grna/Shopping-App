// feature 1
import React from "react";
import { Route, Switch } from "react-router-dom";
import data from "../data.json";
import ProductsContainer from "./ProductsContainer";

const state = {
  products: data.products,
  size: "",
  sort: "",
};

const App = () => (
  <div className="grid-container">
    <header>
      <a href="/">Shopping App</a>
    </header>
    <main>
      <div className="content">
        <div className="main">
          <ProductsContainer products={state.products} />
        </div>
        <div className="sidebar">Cart Items</div>
      </div>
    </main>
    <footer>All rights reserved</footer>
  </div>
);

export default App;

// feature 1
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import data from "../data.json";
import ProductsContainer from "./ProductsContainer";
import Filter from "../components/Filter";

const App = () => {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

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

  return (
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
            <ProductsContainer products={products} />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All rights reserved</footer>
    </div>
  );
};

export default App;

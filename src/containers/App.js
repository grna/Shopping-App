// feature 1
import React from "react";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="grid-container">
      <header>
        <a href="/">Shopping App</a>
      </header>
      <main>Product List</main>
      <footer>All rights reserved</footer>
    </div>
  );
};

export default App;

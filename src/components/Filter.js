import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  filterProducts,
  sortProducts,
} from "../actions/productActions";

function Filter({
  size = "",
  sort = "",
  products = [],
  filteredProducts = [],
  filterProducts,
  sortProducts,
}) {
  return !filterProducts ? (
    <div>Loading...</div>
  ) : (
    <div className="filter">
      <div className="filter-result">
        {filteredProducts.length} Products
      </div>
      <div className="filter-sort">
        Order{" "}
        <select
          value={sort}
          onChange={(e) =>
            sortProducts(filteredProducts, e.target.value)
          }
        >
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter-size">
        Filter{" "}
        <select
          value={size}
          onChange={(e) => filterProducts(products, e.target.value)}
        >
          <option value="">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
}

Filter.propTypes = {
  size: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  filteredProducts: PropTypes.array.isRequired,
  filterProducts: PropTypes.func.isRequired,
  sortProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  size: state.products.size,
  sort: state.products.sort,
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
});

export default connect(mapStateToProps, {
  filterProducts,
  sortProducts,
})(Filter);

import React from "react";
import PropTypes from "prop-types";

function Filter({
  count,
  size,
  sort,
  onSortProducts,
  onFilterProducts,
}) {
  return (
    <div className="filter">
      <div className="filter-result">{count} Products</div>
      <div className="filter-sort">
        Order{" "}
        <select value={sort} onChange={onSortProducts}>
          <option value="">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter-size">
        Filter{" "}
        <select value={size} onChange={onFilterProducts}>
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
  count: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  onSortProducts: PropTypes.func.isRequired,
  onFilterProducts: PropTypes.func.isRequired,
};

export default Filter;

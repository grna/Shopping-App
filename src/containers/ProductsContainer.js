import React from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "../utils";

const ProductsContainer = ({ products, onAddToCart }) => {
  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product.id}>
            <div className="product">
              <a href={"#" + product.id}>
                <img src={product.image} alt={product.title}></img>
                <p>{product.title}</p>
              </a>
              <div className="product-price">
                <div>{formatCurrency(product.price)}</div>
                <button
                  onClick={() => onAddToCart(product)}
                  className="button primary"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      sizes: PropTypes.array.isRequired,
    })
  ),
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductsContainer;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "../utils";

function Cart({ cartItems, onRemoveFromCart, onCreateOrder }) {
  const [checkout, setCheckout] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleInput = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.email);
        break;
      case "address":
        setAddress(event.target.address);
        break;
    }
  };

  const onChekoutSubmit = (event) => {
    event.preventDefault();
    const order = {
      name: name,
      email: email,
      address: address,
      cartItems: cartItems,
    };
    onCreateOrder(order);
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Cart is empty</div>
      ) : (
        <div className="cart cart-header">
          You have {cartItems.length} in cart
        </div>
      )}

      <div>
        <div className="cart">
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={item.image} alt={item.title}></img>
                </div>
                <div>{item.title}</div>
                <div className="right">
                  {formatCurrency(item.price)} x {item.count}{" "}
                  <button
                    className="button"
                    onClick={() => onRemoveFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {cartItems.length > 0 && (
          <div className="cart">
            <div className="total">
              <div>
                Total:{" "}
                {formatCurrency(
                  cartItems.reduce((a, c) => a + c.price * c.count, 0)
                )}
              </div>
              <button
                onClick={() => {
                  setCheckout(true);
                }}
                className="button primary"
              >
                Checkout
              </button>
            </div>
            {checkout && (
              <div>
                <form onSubmit={onChekoutSubmit}>
                  <ul className="form-container">
                    <li>
                      <label>Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        onChange={handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Name</label>
                      <input
                        name="name"
                        type="text"
                        required
                        onChange={handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Address</label>
                      <input
                        name="address"
                        type="text"
                        required
                        onChange={handleInput}
                      ></input>
                    </li>
                    <li>
                      <button
                        className="button primary"
                        type="submit"
                      >
                        Checkout
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
  onCreateOrder: PropTypes.func.isRequired,
};

export default Cart;

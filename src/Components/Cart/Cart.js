import React from "react";
import "./Cart.css";
import List from "./Items List/list";

class Cart extends React.Component {
  render() {
    return (
      <section>
        <List />
      </section>
    );
  }
}

export default Cart;

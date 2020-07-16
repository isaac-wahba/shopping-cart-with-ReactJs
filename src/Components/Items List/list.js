import React from "react";
import Product from "./item";
import "./cart.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          id: 0,
          image: "/0.jpeg",
          name: "WOODLY LEATHER JACKET",
          quantity: 1,
          price: 199,
        },
        { id: 1, image: "/1.jpeg", name: "Pants", quantity: 1, price: 199 },
        { id: 2, image: "/2.jpg", name: "Black Boot", quantity: 1, price: 199 },
      ],
    };
    console.log(this.state.productList);
  }

  deleteItem = (id) => {
    const alteredList = this.state.productList.filter((item) => {
      return item.id !== id;
    });

    this.setState({
      productList: alteredList,
    });
  };

  render() {
    const products = this.state.productList.map((item) => {
      return <Product key={item.id} item={item} onDelete={this.deleteItem} />;
    });

    return <ul>{products}</ul>;
  }
}

export default List;

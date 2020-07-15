import React from "react";
import Product from "./item";
import "./list.css";

class List extends React.Component {
  constructor(props){
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
      console.log(item);
      return item.id !== id;
      
    });

    console.log(alteredList);
    this.setState({
      productList: alteredList,
    }); 
  }

  render() {
    console.log(this.state.productList, "list is here");
    const products = this.state.productList.map((item) => {
      return <Product key={item.id} item={item} onDelete={this.deleteItem} />;
    });

    return <ul>{products}</ul>;
  }
}

export default List;
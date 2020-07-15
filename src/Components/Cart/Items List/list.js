import React from "react";
//import productList from "./products";
import "./list.css";

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
  }

  getQuantity = (index, event) => {
    const updatedInput = this.state.productList.find((item) => {
      return item.id === index;
    });
    let value = event.target.value;
    updatedInput.quantity=value;
    this.setState({
      productList: this.state.productList,
    });
  };

  increasingQuantity = (index) => {
    const updatedItem = this.state.productList.find((item) => {
      return item.id === index;
    });

    updatedItem.quantity++;
    this.setState({
      productList: this.state.productList,
    });
  };

  decreaseQuantity = (index) => {
    const updatedItem = this.state.productList.find((item) => {
      return item.id === index;
    });

    updatedItem.quantity--;
    if (updatedItem.quantity < 1) {
      this.deleteItem(index);
    }

    this.setState({
      productList: this.state.productList,
    });
  };

  deleteItem(index) {
    const deletedItem = this.state.productList.find((item) => {
      return item.id === index;
    });

    let deletedItemId = deletedItem.id;
    this.state.productList.splice(deletedItemId, 1);
    this.setState({
      productList: this.state.productList,
    });
  }

  render() {
    const products = this.state.productList.map((product) => {
      return (
        <div key={product.id}>
          <table>
            <tbody>
              <tr>
                <td>
                  {" "}
                  <img src={product.image} alt={product.name} />
                </td>
                <td>{product.name}</td>
                <td>
                  <button onClick={() => this.decreaseQuantity(product.id)}>
                    -
                  </button>
                  <input
                    placeholder={product.quantity}
                    type="number"
                    name=""
                    value={product.quantity}
                    id={product.id}
                    onChange={(event) => this.getQuantity(product.id,event)}
                  />
                  <button onClick={() => this.increasingQuantity(product.id)}>
                    +
                  </button>
                </td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => this.deleteItem(product.id)}>X</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });

    return <ul>{products}</ul>;
  }
}

export default List;

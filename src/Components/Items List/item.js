import React from "react";
import "./cart.css";

class Product extends React.Component {
  state = {
    quantity: this.props.item.quantity,
  };

  getQuantity = (event) => {
    if (this.state.quantity - 1 <= 0) {
      this.props.onDelete(this.props.item.id);
    } else {this.setState({
      quantity: event.target.value,
    });}
  };

  increasingQuantity = () => {
    this.setState((prevState) => {
      return {
        quantity: prevState.quantity++,
      };
    });
  };

  decreaseQuantity = () => {
    if (this.state.quantity - 1 <= 0) {
      this.props.onDelete(this.props.item.id);
    } else {
      this.setState((prevState) => {
        return {
          quantity: prevState.quantity--,
        };
      });
    }
  };

  onDeleteItem = () => {
    this.props.onDelete(this.props.item.id);
  };

  render() {
    const { item } = this.props;

    return (
      <div className="item" key={item.id}>
        <div className="productImage">
          {" "}
          <img src={item.image} alt={item.name} />
        </div>

        <div className="productName">{item.name}</div>

        <div className="quantity">
          <button className="minusButton" onClick={this.decreaseQuantity}>
            -
          </button>
          <input
            placeholder={item.quantity}
            type="number"
            name=""
            value={this.state.quantity}
            id={item.id}
            onChange={this.getQuantity}
            className="input"
          />
          <button className="plusButton" onClick={this.increasingQuantity}>
            +
          </button>
        </div>

        <div className="price">{item.price}</div>

        <div>
          <button className="deleteButton" onClick={this.onDeleteItem}>
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Product;

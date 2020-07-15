import React from "react";
import "./item.css";

class Product extends React.Component {
  state = {
    quantity: this.props.item.quantity,
  };

  getQuantity = (event) => {
    this.setState({
      quantity: event.target.value,
    });
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

  onDeleteItem = ()=>{
    this.props.onDelete(this.props.item.id);
  }

  render() {
    const { item } = this.props;

    return (
      <div key={item.id}>
        <table>
          <tbody>
            <tr>
              <td>
                {" "}
                <img src={item.image} alt={item.name} />
              </td>
              <td>{item.name}</td>
              <td>
                <button onClick={this.decreaseQuantity}>
                  -
                </button>
                <input
                  placeholder={item.quantity}
                  type="number"
                  name=""
                  value={this.state.quantity}
                  id={item.id}
                  onChange={this.getQuantity}
                />
                <button onClick={this.increasingQuantity}>
                  +
                </button>
              </td>
              <td>{item.price}</td>
              <td>
                <button onClick={this.onDeleteItem}>X</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Product;

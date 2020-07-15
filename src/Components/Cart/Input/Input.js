import React from "react";
import './Input.css';
class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        

    };
  }

  increasingQuantity = ()=>{


  }
  render() {
    return (
      <div>
        <button>-</button>
        <input
          placeholder={this.props.placeholder}
          type="number"
          name=""
          id={this.props.id}
        />
        <button onClick={this.increasingQuantity(this.props.id)}>+</button>
      </div>
    );
  }
}

export default InputComponent;

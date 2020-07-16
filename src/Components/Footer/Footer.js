import React from 'react';
import './Footer.css';

class Footer extends React.Component{

render() {
    return (
         <div className="footerContainer">
            <div  className="continue"><p>Continue Shopping</p></div>
           <div className="total">
           <p >Subtotal: $ 799.00</p>            

           </div> 

         </div>
    );
}

}

export default Footer;
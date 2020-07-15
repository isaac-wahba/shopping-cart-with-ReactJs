
const productList= [
{id:0, image:'/0.jpeg', name: 'WOODLY LEATHER JACKET', quantity: 1, price: 199   },
{id:1, image:'/1.jpeg', name: 'Pants', quantity: 1, price: 199   },
{id:2, image:'/2.jpg', name: 'Black Boot', quantity: 1, price: 199   }
]

export default productList;

/* onInputChange = (event) =>{
    const updatedItem = this.state.productList.find((item)=>{
  
      return item.quantity===event.target.value;
    })
    console.log(updatedItem);
      this.setState({
        productList: this.state.productList.splice(1,2,updatedItem)
      }); 
  
    };
  
 */
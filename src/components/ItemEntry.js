import React from 'react';
// import CartItem from './CartItem';
import './react.css';

class ItemEntry extends React.Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            numberOfItems: 1
          };
        // this.state = {
        //     showComponent: false,
        //   };
    }

    addToCart() {
        alert(this.props.caption);
    //     this.setState({
    //         showComponent: true,
    //     });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    

    render() {

        return (
            <div className="entry-block" >
                <a href={this.props.src}>
                    <img className="entry-img" src={this.props.src} alt={this.props.src} />
                </a>
                <h5>{this.props.caption}</h5>
                <h6>{this.props.location}</h6>
                <p style={{marginBottom: "0", fontSize: "90%"}}>Quantity</p>
                <form>
                    <input 
                        name="numberOfItems"
                        type="number"
                        value={this.state.numberOfItems}
                        onChange={this.handleInputChange} />
                </form>
                <div>
                    <p style={{marginRight: "1%"}}>{this.props.price}</p>
                    <button className="add" onClick={this.addToCart}>Add to Cart</button>
                </div>
                {/* {this.state.showComponent ?
                    <CartItem key={this.props.src} src={this.props.src} location={this.props.location} caption={this.props.caption} /> :
                    null
                } */}
            </div>
        )
    }
}
  
export default ItemEntry;


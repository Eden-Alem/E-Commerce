import React from 'react';
import './react.css';

class CartItem extends React.Component {
    state = {
        isActive:true
     }
   
     handleShow = ()=>{
         this.setState({
             isActive: true
         })
     }
   
     handleHide = () =>{
         this.setState({
             isActive: false
         })
     }

    render() {

        return (
            <div>
           {this.state.isActive ? <div className="entry-block" >
                <a href={this.props.src}>
                    <img className="entry-img" src={this.props.src} alt={this.props.src} />
                </a>
                <h5>{this.props.caption}</h5>
                <h6>{this.props.location}</h6>
                {/* <button onClick={this.handleShow}>Show</button>
                <button onClick={this.handleHide}>Hide</button> */}
            </div> : null }
            <button onClick={this.handleShow}>Show</button>
            <button onClick={this.handleHide}>Hide</button>
             
           </div>
            
        )
    }
}
  
export default CartItem;


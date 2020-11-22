import React from 'react';
import './react.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItemEntry from './ItemEntry';
import Signin from './Signin';
import Register from './Register';
import Forgot from './Forgot';
import entries from './data/item-entries.json';
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link
    } from "react-router-dom";

    
function Home() {
    return (
        <div className="wrapper">
                <header className="main-header">
                    <div className="container">
                        <h1 className="name"><a href="index.html"><Link to="/">Lowin Jewellery</Link></a></h1>
                        <ul className="main-nav">
                            <li><a href="index.html"><Link to="/signin"><FontAwesomeIcon icon="user-alt" />&nbsp;Sign in</Link></a></li>
                            <li><a href="index.html"><Link to="/cart"><FontAwesomeIcon icon="shopping-cart" />&nbsp;Cart</Link></a></li>
                        </ul>
                    </div>
                </header>
        <div className="flex-container">
            {entries.itemlist.map((entry) => {
                return <ItemEntry key={entry.src} src={entry.src} location={entry.location} caption={entry.caption} price={entry.price} /> 
            })
            }
        </div>
        <div className="main-footer"> 
                    <span>&copy; Eden Alem 2020</span>
                </div>
        </div>
    );
    }

function Sign() {
    return (
        <div>
            <div className="wrapper">
                <header className="main-header">
                    <div className="container">
                        <p><a href="index.html"><Link to="/" style={{color: "black"}}><FontAwesomeIcon icon="arrow-left" />&nbsp;Go back</Link></a></p>
                    </div>
                </header>
                <Signin/>
                <div className="main-footer"> 
                    <span>&copy; Eden Alem 2020</span>
                </div>
            </div>
        </div>
    );
}

function Cart() {
    return (
        <div className="wrapper">
            <header className="main-header">
                <div className="container">
                    <p><a href="index.html"><Link to="/" style={{color: "black"}}><FontAwesomeIcon icon="arrow-left" />&nbsp;continue shopping</Link></a></p>
                    <ul className="main-nav">
                        <li><a href="index.html"><Link to="/signin"><FontAwesomeIcon icon="user-alt" />&nbsp;Sign in</Link></a></li>
                        <li><a href="index.html"><Link to="/cart"><FontAwesomeIcon icon="shopping-bag" />&nbsp;0</Link></a></li>
                    </ul>
                </div>
            </header>
            <div className="cart_container">
                <img className="cart-img" src="https://images.unsplash.com/photo-1598560917505-59a3ad559071?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="Jewellery" />
                <div style={{marginLeft: "5%", marginTop: "2%"}} class="text_container">
                    <h5>Lovensaider</h5>
                    <h6>Allias street, Bonjour</h6>
                </div>
            </div>
            <div className="cart_container">
                <img className="cart-img" src="https://images.unsplash.com/photo-1589426056403-25c5faaac8ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGpld2Vscnl8ZW58MHx8MHw%3D&auto=format&fit=crop&w=600&q=60" alt="Jewellery" />
                <div style={{marginLeft: "5%", marginTop: "2%"}} class="text_container">
                    <h5>Admineir</h5>
                    <h6>Berly street, Adios</h6>
                </div>
            </div>
        <div className="main-footer"> 
            <span>&copy; Eden Alem 2020</span>
        </div>
    </div>
    );
}
    

export default function Main() {
    return (
        <Router>
            <Switch>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/signin">
                    <Sign />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/forgotpassword">
                    <Forgot />
                </Route>
                <Route path="/">
                    <Home />
                </Route>

            </Switch>
        
        </Router>

    )    

}
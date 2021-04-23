import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/elements/header/Header';
import Footer from "./components/elements/footer/Footer";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Category from "./components/pages/Category";
import Cart from "./components/pages/Cart";
import Product from "./components/pages/Product";
import Checkout from "./components/pages/Checkout";


const App = () => {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/catalog' exact component={Category}/>
                    <Route path='/contact' exact component={Contact}/>
                    <Route path='/cart' exact component={Cart}/>
                    <Route path='/product' exact component={Product}/>
                     <Route path='/checkout' exact component={Checkout}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;

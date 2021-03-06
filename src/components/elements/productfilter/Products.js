import React from 'react';
import './ProductFilter.css';
import OneProduct from "../productcard/OneProduct";

function Products() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <OneProduct/>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="product-item">
                        <div className="pi-pic">
                            <div className="tag-sale">ON SALE</div>
                            <img src="./img/product/6.jpg" alt=""/>
                            <div className="pi-links">
                                <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                            </div>
                        </div>
                        <div className="pi-text">
                            <h6>$35,00</h6>
                            <p>Black and White Stripes Dress</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <OneProduct/>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <OneProduct/>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <OneProduct/>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <OneProduct/>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <OneProduct/>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <OneProduct/>
                </div>
            </div>
                 </div>
    );
}

export default Products;
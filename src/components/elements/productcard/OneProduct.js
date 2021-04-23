import React from 'react';
import '../productfilter/ProductFilter.css';


function OneProduct() {
    return (
        <div className="product-item">
            <div className="pi-pic">
                <img src="./img/product/5.jpg" alt=""/>
                <div className="pi-links">
                    <a href="#" className="add-card"><i className="flaticon-bag"> </i>
                        <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                        <i className="flaticon-heart"> </i>
                    </a>
                </div>
            </div>
            <div className="pi-text">
                <h6>$35,00</h6>
                <p>Flamboyant Pink Top </p>
            </div>
        </div>
    );
}

export default OneProduct;
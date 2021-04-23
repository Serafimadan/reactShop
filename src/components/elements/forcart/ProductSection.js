import React from 'react';
import  './CartElement.css';
import '../latestproduct/LatestProduct.css';


function ProductSection() {
    return (
        <section className="related-product-section">
            <div className="container">
                <div className="section-title text-uppercase">
                    <h2>Continue Shopping</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="product-item">
                            <div className="pi-pic">
                                <div className="tag-new">New</div>
                                <img src="./img/product/2.jpg" alt=""/>
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
                        <div className="product-item">
                            <div className="pi-pic">
                                <img src="./img/product/5.jpg" alt=""/>
                                    <div className="pi-links">
                                        <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                        <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                    </div>
                            </div>
                            <div className="pi-text">
                                <h6>$35,00</h6>
                                <p>Flamboyant Pink Top </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="product-item">
                            <div className="pi-pic">
                                <img src="./img/product/9.jpg" alt=""/>
                                    <div className="pi-links">
                                        <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                        <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                    </div>
                            </div>
                            <div className="pi-text">
                                <h6>$35,00</h6>
                                <p>Flamboyant Pink Top </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="product-item">
                            <div className="pi-pic">
                                <img src="./img/product/1.jpg" alt=""/>
                                    <div className="pi-links">
                                        <a href="#" className="add-card"><i className="flaticon-bag"> </i><span>ADD TO CART</span></a>
                                        <a href="#" className="wishlist-btn"><i className="flaticon-heart"> </i></a>
                                    </div>
                            </div>
                            <div className="pi-text">
                                <h6>$35,00</h6>
                                <p>Flamboyant Pink Top </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductSection;
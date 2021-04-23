import React from 'react';
import  './LatestProduct.css';

import Slider from "react-slick";

function LatestProduct() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        pauseOnFocus: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <section className="top-letest-product-section">
            <div className="container">
                <div className="section-title">
                    <h2>LATEST PRODUCTS</h2>
                </div>
                <Slider {...settings}>

                    <div className="product-item">
                        <div className="pi-pic">
                            <img src="./img/product/1.jpg" alt=""/>
                                <div className="pi-links">
                                    <a href="#" className="add-card"><i className="flaticon-bag"> </i>
                                        <span>ADD TO CART</span>
                                    </a>
                                    <a href="#" className="wishlist-btn"><i className="flaticon-heart"> </i></a>
                                </div>
                        </div>
                        <div className="pi-text">
                            <h6>$35,00</h6>
                            <p>Flamboyant Pink Top </p>
                        </div>
                    </div>
                    <div className="product-item">
                        <div className="pi-pic">
                            <div className="tag-new">New</div>
                            <img src="./img/product/2.jpg" alt=""/>
                                <div className="pi-links">
                                    <a href="#" className="add-card"><i className="flaticon-bag"> </i>
                                        <span>ADD TO CART</span></a>
                                    <a href="#" className="wishlist-btn"><i className="flaticon-heart"> </i></a>
                                </div>
                        </div>
                        <div className="pi-text">
                            <h6>$35,00</h6>
                            <p>Black and White Stripes Dress</p>
                        </div>
                    </div>
                    <div className="product-item">
                        <div className="pi-pic">
                            <img src="./img/product/3.jpg" alt=""/>
                                <div className="pi-links">
                                    <a href="#" className="add-card"><i className="flaticon-bag"> </i>
                                        <span>ADD TO CART</span></a>
                                    <a href="#" className="wishlist-btn"><i className="flaticon-heart"> </i></a>
                                </div>
                        </div>
                        <div className="pi-text">
                            <h6>$35,00</h6>
                            <p>Flamboyant Pink Top </p>
                        </div>
                    </div>
                    <div className="product-item">
                        <div className="pi-pic">
                            <img src="./img/product/4.jpg" alt=""/>
                                <div className="pi-links">
                                    <a href="#" className="add-card"><i className="flaticon-bag"> </i>
                                        <span>ADD TO CART</span></a>
                                    <a href="#" className="wishlist-btn"><i className="flaticon-heart"> </i></a>
                                </div>
                        </div>
                        <div className="pi-text">
                            <h6>$35,00</h6>
                            <p>Flamboyant Pink Top </p>
                        </div>
                    </div>
                    <div className="product-item">
                        <div className="pi-pic">
                            <img src="./img/product/6.jpg" alt=""/>
                                <div className="pi-links">
                                    <a href="#" className="add-card"><i className="fa flaticon-bag"> </i>
                                        <span>ADD TO CART</span></a>
                                    <a href="#" className="wishlist-btn"><i className="flaticon-heart"> </i></a>
                                </div>
                        </div>
                        <div className="pi-text">
                            <h6>$35,00</h6>
                            <p>Flamboyant Pink Top </p>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default LatestProduct;
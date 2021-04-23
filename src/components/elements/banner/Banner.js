import React, {useState}  from 'react';
import './Banner.css';
import {Carousel} from 'react-bootstrap';


function Banner() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(direction);
    };
    return (

        <Carousel 
            activeIndex={index} 
            direction={direction} 
            onSelect={handleSelect} 
            className="hero-section">

            <Carousel.Item className="hero-slider " >
                <img
                    className="d-block w-100"
                    src="img/bg.jpg"
                    alt="First slide" />
                <Carousel.Caption  >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 text-white">
                                <span>New Arrivals</span>
                                <h2>denim jackets</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices
                                    gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <a href="#" className="site-btn sb-line">DISCOVER</a>
                                <a href="#" className="site-btn sb-white">ADD TO CART</a>
                            </div>
                        </div>
                        <div className="offer-card text-white">
                            <span>from</span>
                            <h2>$29</h2>
                            <p>SHOP NOW</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="img/bg-2.jpg"
                    alt="Second slide" />
                <Carousel.Caption>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 text-white">
                                <span>New Arrivals</span>
                                <h2>denim jackets</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices
                                    gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <a href="#" className="site-btn sb-line">DISCOVER</a>
                                <a href="#" className="site-btn sb-white">ADD TO CART</a>
                            </div>
                        </div>
                        <div className="offer-card text-white">
                            <span>from</span>
                            <h2>$29</h2>
                            <p>SHOP NOW</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
                </Carousel>
    );
}

export default Banner;
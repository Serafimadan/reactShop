import React from 'react';
import './Footer.css';



function Footer() {
    return (
        <footer>
        <section className="footer-section">
            <div className="container">
                <div className="footer-logo text-center">
                    <a href="index.html"><img src="../../../img/logo-light.png" alt=""/></a>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget about-widget">
                            <h2>About</h2>
                            <p>Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam frin-gilla
                                faucibus urna, id dapibus erat iaculis ut. Integer ac sem.</p>
                            <img src="/img/cards.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget about-widget">
                            <h2>Menu</h2>
                            <ul>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Track Orders</a></li>
                                <li><a href="">Returns</a></li>
                                <li><a href="">Jobs</a></li>
                                <li><a href="">Shipping</a></li>
                                <li><a href="">Blog</a></li>
                            </ul>
                            <ul>
                                <li><a href="">Partners</a></li>
                                <li><a href="">Bloggers</a></li>
                                <li><a href="">Support</a></li>
                                <li><a href="">Terms of Use</a></li>
                                <li><a href="">Press</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget about-widget">
                            <h2>Style</h2>
                            <div className="fw-latest-post-widget">
                                <div className="lp-item">
                                     <div className="lp-content">
                                        <h6>what shoes to wear</h6>
                                        <span>Apr 21, 2021</span>
                                        <a href="#" className="readmore">Read More</a>
                                    </div>
                                </div>
                                <div className="lp-item">
                                   <div className="lp-content">
                                        <h6>trends this year</h6>
                                        <span>Apr 21, 2021</span>
                                        <a href="#" className="readmore">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget contact-widget">
                            <h2>Contact</h2>
                            <div className="con-info">
                                <span>C.</span>
                                <p>Your Company Ltd </p>
                            </div>
                            <div className="con-info">
                                <span>B.</span>
                                <p>1481 Creekside Lane Avila Beach, CA 93424, P.O. BOX 68 </p>
                            </div>
                            <div className="con-info">
                                <span>T.</span>
                                <p>+000000000000</p>
                            </div>
                            <div className="con-info">
                                <span>E.</span>
                                <p>office@youremail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social-links-warp">
                <div className="container">
                    <p className="text-white text-center mt-5">Copyright &copy;All rights reserved | </p>
                </div>
            </div>
        </section>
        </footer>
    );
}

export default Footer;
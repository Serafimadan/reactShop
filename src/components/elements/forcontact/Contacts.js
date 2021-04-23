import React from 'react';
import './Contacts.css';




function Contacts() {
    return (
        <section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 contact-info">
                        <h3>Get in touch</h3>
                        <p>Main Str, no 23, New York</p>
                        <p>+546 990221 123</p>
                        <p>hosting@contact.com</p>
                        <div className="contact-social">
                            <a href="#"><i className="fa fa-pinterest"> </i></a>
                            <a href="#"><i className="fa fa-facebook"> </i></a>
                            <a href="#"><i className="fa fa-twitter"> </i></a>
                            <a href="#"><i className="fa fa-dribbble"> </i></a>
                            <a href="#"><i className="fa fa-behance"> </i></a>
                        </div>
                        <form className="contact-form">
                            <input type="text" placeholder="Your name"/>
                                <input type="text" placeholder="Your e-mail"/>
                                    <input type="text" placeholder="Subject"/>
                                        <textarea placeholder="Message"> </textarea>
                                        <button className="site-btn">SEND NOW</button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Contacts;
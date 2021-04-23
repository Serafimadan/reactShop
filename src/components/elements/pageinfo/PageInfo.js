import React from 'react';
import  './PageInfo.css';



function PageInfo() {
    return (
        <div className="page-top-info">
            <div className="container">
                <h4>Your cart</h4>
                <div className="site-pagination">
                    <a href="">Home</a> /
                    <a href="">Your cart</a>
                </div>
            </div>
        </div>
    );
}

export default PageInfo;
import React from 'react';

import './ProductFilter.css';
import Filters from "./Filters";
import Products from "./Products";
import Button from "../buttons/Button";



function ProductFilter() {
    return (
             <section className="product-filter-section">
                <div className="container">
                    <div className="section-title">
                        <h2>BROWSE TOP SELLING PRODUCTS</h2>
                    </div>
               <Filters/>
                  <Products/>
                  <Button/>
                </div>
            </section>
        );
}

export default ProductFilter;
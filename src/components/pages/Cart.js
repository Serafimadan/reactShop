import React from 'react';
import PageInfo from "../elements/pageinfo/PageInfo";
import CartElement from "../elements/forcart/CartElement";
import ProductSection from "../elements/forcart/ProductSection";





function Cart() {
    return (
        <div>
            <PageInfo/>
            <CartElement/>
            <ProductSection/>
        </div>
    );
}

export default Cart;
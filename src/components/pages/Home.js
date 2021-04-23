import React from 'react';
import Banner from "../elements/banner/Banner";
import FeaturesLine from "../elements/features/FeaturesLine";
import LatestProduct from "../elements/latestproduct/LatestProduct";
import ProductFilter from "../elements/productfilter/ProductFilter";
import BannerAdvat from "../elements/banneradvat/BannerAdvat";




function Home() {
    return (
        <div>
            <Banner/>
            <FeaturesLine/>
            <LatestProduct/>
            <ProductFilter/>
            <BannerAdvat/>
        </div>
    );
}

export default Home;
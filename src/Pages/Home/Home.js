import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Facility from './Facility';
import Products from './Products';

const Home = () => {
    return (
        <section>
            <Banner/>
            <Facility/>
            <Products/>
            <BusinessSummary/>
        </section>
    );
};

export default Home;
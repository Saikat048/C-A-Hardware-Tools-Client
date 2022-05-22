import React from 'react';
import Banner from './Banner'; 
import ChooseUs from './ChooseUs';
import HomeParts from './HomeParts';
import Supplier from './Supplier';

const Home = () => {
    return (
        <div> 
            <Banner></Banner> 
            <HomeParts></HomeParts>
            <ChooseUs></ChooseUs>
            <Supplier></Supplier>
        </div>
    );
};

export default Home;
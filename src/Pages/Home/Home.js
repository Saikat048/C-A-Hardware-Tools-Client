import React from 'react';
import Banner from './Banner'; 
import ChooseUs from './ChooseUs';
import HomeParts from './HomeParts';

const Home = () => {
    return (
        <div> 
            <Banner></Banner> 
            <HomeParts></HomeParts>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;
import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner'; 
import ChooseUs from './ChooseUs';
import HomeParts from './HomeParts';
import Reviews from './Reviews';
import Supplier from './Supplier';

const Home = () => {
    return (
        <div> 
            <Banner></Banner> 
            <HomeParts></HomeParts>
            <ChooseUs></ChooseUs> 
            <Supplier></Supplier>
            <Footer></Footer>
        </div>
    );
};

export default Home;
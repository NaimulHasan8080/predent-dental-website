import React from 'react';
import About from '../About/About';
import Dantist from '../Dantist/Dantist';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className=" p-2">
            <Header></Header>
            <Dantist></Dantist>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;
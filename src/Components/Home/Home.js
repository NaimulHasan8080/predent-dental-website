import React from 'react';
import About from '../About/About';
import Dantist from '../Dantist/Dantist';
import Header from '../Header/Header';
import Specialty from '../Specialty/Specialty';

const Home = () => {
    return (
        <div className=" p-2">
            <Header></Header>
            <Dantist></Dantist>
            <About></About>
            <Specialty></Specialty>
        </div>
    );
};

export default Home;
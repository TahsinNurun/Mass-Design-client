import React from 'react';
import BigProject from '../BigProject/BigProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Team from '../Team/Team';


const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Service></Service>
            <Review></Review>
            <BigProject></BigProject>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;
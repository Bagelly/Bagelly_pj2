import React from "react";
//import Header from './component/Layout/Header';
import Banner from './mv.png';
import './Home.css';

const Home = () => {
    return (
        //<div className="main-bg"></div>
    //<div className="Home">
      //  <img src="./Images/mv.png" alt='logo image' />
    //</div>
        <div className="main-bg" style={{backgroundImage: 'url('+ Banner +')'}}></div>
    );
}

export default Home;
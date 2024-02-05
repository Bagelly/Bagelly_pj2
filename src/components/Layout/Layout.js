import React from "react";
import Header from "./Header";
import styles from  './Layout.module.css';
//import {BrowserRouter} from 'react-router-dom';

//import {HashRouter, Route} from 'react-router-dom';
//import Home from './pages/Home';
//import Order from './pages/Order';

const Layout =() => {
    return (
        
        <div className={styles.layout}>
            
                    <Header />
              

            

        </div>
    );
};
export default Layout;
import React from 'react';
//import { useState } from 'react';
import Home from './pages/Home';
import Order from './pages/Order';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//const API_ENDPOINT ='https://5uofg1te62.execute-api.ap-southeast-2.amazonaws.com/SH'


function App() {

    return (
        <BrowserRouter>
                <div className="App">
                    <Layout />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Order" element={<Order />} />
                    </Routes>
                    
                 </div>
        </BrowserRouter>
                        
        
        
    );

    }


export default App;

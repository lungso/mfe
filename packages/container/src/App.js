import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
//import { mount } from 'marketing/MarketingApp'
//console.log(mount);
//testing
//testing2 
//testing3



export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <MarketingApp/>
            </div>
        </BrowserRouter>
    );
};
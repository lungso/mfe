import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
    StylesProvider, 
    createGenerateClassName
} from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
//import { mount } from 'marketing/MarketingApp'
//console.log(mount);
//testing
//testing2 
//testing3

const generateClassNmae = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassNmae}>
            <div>
                <Header/>
                <MarketingApp/>
            </div>
            </StylesProvider>
        </BrowserRouter>
    );
};
import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
    StylesProvider, 
    createGenerateClassName
} from '@material-ui/core/styles';

//import AuthApp from './components/AuthApp';
//import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import Progress from './components/Progress';
// to lazily load components 
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

//import { mount } from 'marketing/MarketingApp'
//console.log(mount);
//testing
//testing2 
//testing3
//auth/sign => still go to /auth
//others e.g. /pricing go to /
//<Suspense fallback={<div>Lloading...</div>}>
//<Route path="/auth" component={AuthLazy}/>
//<Route path="/" component={MarketingLazy} />
const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);


    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn}/>
                <Suspense fallback={<Progress/>}>
                <Switch>
                    <Route path="/auth">
                        <AuthLazy onSignIn={() => setIsSignedIn(true)}/>
                    </Route>
                    <Route path="/" component={MarketingLazy} />
                </Switch>
                </Suspense>
            </div>
            </StylesProvider>
        </BrowserRouter>
    );
};
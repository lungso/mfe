import React, { lazy, Suspense, useState, useEffect } from 'react';
import { /*BrowserRouter*/Router, Route, Switch, Redirect } from 'react-router-dom';
import {
    StylesProvider, 
    createGenerateClassName
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

//import AuthApp from './components/AuthApp';
//import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import Progress from './components/Progress';
// to lazily load components 
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

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

//
const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn){
            alert('signed in')
            history.push('/dashboard'); //put the user to the dashboard;
        }
   }, [isSignedIn]); /* if isnedin value is chagned, useEffect is triggered. */

    return (
        /*<BrowserRouter>*/
        <Router history = { history } >
            <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn}/>
                <Suspense fallback={<Progress/>}>
                <Switch>
                    <Route path="/auth">
                        <AuthLazy onSignIn={() => setIsSignedIn(true)}/>
                    </Route>
                    <Route path="/dashboard" /*component={DashboardLazy} /*/>
                        { !isSignedIn  && <Redirect to="/" /> /* whenever the user is on the landing page, and not signed in, then redirect to the / */}
                        
                        <DashboardLazy />
                    </Route>
                    <Route path="/" component={MarketingLazy} />
                </Switch>
                </Suspense>
            </div>
            </StylesProvider>
        </Router>
        /*</BrowserRouter>*/
    );
};
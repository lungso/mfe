import React from 'react';
//router - memory history
import { Switch, Route, Router } from 'react-router-dom';
import {
    StylesProvider, 
    createGenerateClassName
} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
});

// create a memory history in 
export default ({ history}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            {/* <BrowserRouter> not going to use browser history but memory history */}
            <Router history={history}>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path= "/" component={Landing} />
                </Switch>
            </Router>
            {/* </BrowserRouter> */}
        </StylesProvider>        
    </div>
};
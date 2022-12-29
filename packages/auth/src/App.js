import React from 'react';
//router - memory history
import { Switch, Route, Router } from 'react-router-dom';
import {
    StylesProvider, 
    createGenerateClassName
} from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

// create a memory history in 
export default ({ history, onSignIn }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            {/* <BrowserRouter> not going to use browser history but memory history */}
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin">
                        <Signin onSignIn={onSignIn}/>
                    </Route>
                    <Route path="/auth/signup">
                        <Signup onSignIn={onSignIn}/>
                    </Route>
                </Switch>
            </Router>
            {/* </BrowserRouter> */}
        </StylesProvider>        
    </div>
};


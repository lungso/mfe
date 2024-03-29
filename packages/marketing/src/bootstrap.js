
import React from 'react';
import ReactDOM from 'react-dom';
// createBrowserHistory for the isolation uses 
import { createMemoryHistory, createBrowserHistory } from 'history' //
import App from './App';

// Mount function to start up hte app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {

    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath],
    });
    if (onNavigate) {history.listen( onNavigate );}

    ReactDOM.render(
        //<h1>Hi there!</h1>,
        <App history={history}/>, 
        el
    )

    return {
        onParentNavigate( { pathname: nextPathname }){
            
            const { pathname } = history.location;

            if (pathname !== nextPathname ) {
                history.push(nextPathname);
                console.log(history.current);
            }
            console.log('Container just navigated');
            console.log(history);
            
        }
    };
}

// if we are ind ev and in islation
// call mounti mmedately
if (process.env.NODE_ENV === 'development'){
    const devRoot  = document.querySelector('#_marketing-dev-root');

    if (devRoot){
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

export { mount };
//we  are running through container
// and we should export the mount ucntion


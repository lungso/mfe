/*
import React from 'react';
import ReactDOM from 'react-dom';
// createBrowserHistory for the isolation uses 
import { createMemoryHistory, createBrowserHistory } from 'history' //
import App from './App';

*/

import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount function to start up hte app
const mount = (el) => {

    const app = createApp(Dashboard);
    app.mount(el);

}

// if we are ind ev and in islation
// call mounti mmedately
if (process.env.NODE_ENV === 'development'){
    const devRoot  = document.querySelector('#_dashboard-dev-root');

    if (devRoot){
        mount(devRoot);
    }
}

export { mount };
//we  are running through container
// and we should export the mount ucntion
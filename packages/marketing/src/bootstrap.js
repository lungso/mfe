
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up hte app
const mount = (el) => {
    ReactDOM.render(
        //<h1>Hi there!</h1>,
        <App/>, 
        el
    )
}

// if we are ind ev and in islation
// call mounti mmedately
if (process.env.NODE_ENV === 'development'){
    const devRoot  = document.querySelector('#_marketing-dev-root');

    if (devRoot){
        mount(devRoot);
    }
}

export { mount };
//we  are running through container
// and we should export the mount ucntion


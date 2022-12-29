import { mount } from 'auth/AuthApp';
import React , { useRef , useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ( { onSignIn }) => {
    const ref = useRef(null);
    const history = useHistory(); //browser history and not memory history
    
    useEffect(() =>{
        const{ onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            // to destructure the pathname property
            onNavigate: ( { pathname: nextPathname }) => {
                //console.log('The container noticed nagivation in Marketing');
                //console.log(nextPathname);
                const { pathname } = history.location;

                if (pathname !== nextPathname ) {
                    history.push(nextPathname);
                    console.log(history.current);
                }
            },
            onSignIn:() =>{
                console.log('User signed in');
                onSignIn();
            }
        });
        history.listen( onParentNavigate );
    }, /* limit how oftern , only run at first render */[]);

    return <div ref={ref}/>;
};

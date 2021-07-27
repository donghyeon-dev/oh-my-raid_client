import { React, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const Oauth = (location) => {
    useEffect(() => {
        console.log('oauth is here');
        console.log(location.pathname);
    });
    //     window.fetch('http://localhost:8880/login/oauth?code=')
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    return (
        <div>
            <h1>Oauth</h1>
        </div>
    );
};

export default withRouter(Oauth);

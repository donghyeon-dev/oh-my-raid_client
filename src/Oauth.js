import { React, useEffect} from 'react';
import { withRouter, useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

const Oauth = () => {
    const location = useLocation();
    const history = useHistory();

    const headers = {
        'Authorization' : 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJvaG15cmFpZCIsImlhdCI6MTYyNzYyNzMzNiwiTG9naW5JZCI6ImRvbmdoeWVvbmRldkBnbWFpbC5jb20iLCJVc2VyTmFtZSI6ImF1dG9jYXQiLCJleHAiOjE2Mjc2MzA5MzZ9.3-Hwc1kst_LcG_AKAnugyCb4Z087pTDyRVedc6uOYt6fgPv6euR-jxr7dScLgwJ9eEgHXgawEOgVN_8mkC4hcw'
    };
    useEffect(() => {
        const search = getParameter(location.search);
        axios
            .get('http://localhost:8880/login/oauth?code=' + search)
            .then(response =>
                axios.post('http://localhost:8880/login/oauth/storeAccessToken',{accessToken : response.data.data}, {headers})
                    .then(res => history.push("/"))
                    .catch(err => alert(err))
            )
            .catch(error => alert(error));
    });

    const getParameter = (url) => {
        const param = url.split('=');
        return param[1];
    };

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

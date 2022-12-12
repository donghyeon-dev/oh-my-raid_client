import { React, useEffect} from 'react';
import { withRouter, useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

const Oauth = () => {
    const location = useLocation();
    const history = useHistory();

    const headers = {
        'Authorization' : sessionStorage.getItem("token")
    };
    useEffect(() => {
        const search = getParameter(location.search);
        axios
            .get('http://localhost:8880/login/oauth?code=' + search)
            .then(response =>
                axios.post('http://localhost:8880/login/oauth/storeAccessToken',{accessToken : response.data.data}, {headers})
                    .then(res =>{
                        alert("블리자드 계정연동을 위한 토큰 발급에 성공했습니다.");
                        history.push("/");
                    })
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

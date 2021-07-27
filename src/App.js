import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Oauth from './Oauth';
import { Route, Link } from 'react-router-dom';

function App() {
    const [res, setRes] = useState(null);

    const goToBlizzard = async () => {
        console.log('before =' + res);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response.data);
        setRes(response.data);
        console.log('after =' + res);
    };

    const login = async () => {
        const data = {
            email: 'donghyeondev@gmail.com',
            password: 'qkrgus0712!',
        };
        const response = await axios.get(
            'https://kr.battle.net/oauth/authorize?:region=kr&response_type=code&client_id=cd5f2cc20f0e4be08e31ae9938e56b2d&redirect_uri=http://localhost:8880/login/oauth&scope=wow.profile'
        );

        console.log(response);
    };

    const loginBz = (history) => {
        // window.open(
        //     'https://kr.battle.net/oauth/authorize?:region=kr&response_type=code&client_id=cd5f2cc20f0e4be08e31ae9938e56b2d&redirect_uri=http://localhost:3000/oauth&scope=wow.profile',
        //     '_blank'
        // );
        history.push = 'https://kr.battle.net/oauth/authorize?:region=kr&response_type=code&client_id=cd5f2cc20f0e4be08e31ae9938e56b2d&redirect_uri=http://localhost:3000/oauth&scope=wow.profile';
    };
    return (
        <div className="App">
            <button className="goToBlizzard" type="button" onClick={goToBlizzard}>
                go to blizzard
            </button>
            <button className="login" type="button" onClick={loginBz}>
                login
            </button>

            <a href="https://kr.battle.net/oauth/authorize?:region=kr&response_type=code&client_id=cd5f2cc20f0e4be08e31ae9938e56b2d&redirect_uri=http://localhost:3000/oauth&scope=wow.profile">
                블리자드계정연동
            </a>

            <Route path="/oauth" component={Oauth} />
        </div>
    );
}

export default App;

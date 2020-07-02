import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import WelcomePage from './react-components/WelcomePage';
import HomePage from './react-components/HomePage';
import Login from './react-components/Login';
import Post from './react-components/Post';
import Comment from './react-components/Post/comment';
import Register from "./react-components/Register";
import PostOverview from "./react-components/PostOverview";

import News from "./react-components/News";

import Dashboard from './react-components/Dashboard';
import MainPage from './react-components/MainPage'


class App extends React.Component {

    user = {
        username: "user",
        password: "user",
        role: "user"
    };

    admin = {
        username: "admin",
        password: "admin",
        role: "admin"
    }

    data = [this.user, this.admin];

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: "NOT_LOGGED_IN",
            user: {}
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.tempAuth = this.tempAuth.bind(this);
        this.tempRegister = this.tempRegister.bind(this);
    }

    tempAuth = (data) => {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].username === data.username &&
                this.data[i].password === data.password)
                return this.data[i]
        }
        return {}
    }

    tempRegister = (data) => {
        if (data.repeat === data.password) {
            for (let i = 0; i < this.data.length; i++) {
                if (this.data[i].username === data.username) return {}
            }
            return {
                username: data.username,
                password: data.password,
                role: "user"
            }
        }
        return {}
    }

    handleLogin(data) {
        console.log(data);
        this.setState(
            {
                loggedIn: "LOGGED_IN",
                user: data
            }
        )
    }

    handleRegister(data) {
        console.log(data);
        this.data.push(data);
        this.setState(
            {
                loggedIn: "LOGGED_IN",
                user: data
            }
        )
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact path='/'
                            render={
                                props => (<WelcomePage {...props} loggedIn={this.state.loggedIn}/>)
                            }
                        />
                        <Route exact path='/homepage/:user'

                               render={
                                   props => (<HomePage {...props}
                                                       loggedIn={this.state.loggedIn}
                                                       user={this.state.user}
                                   />)
                               }
                        />
                        <Route exact path='/postpage/:topic/:user'

                               render={
                                   props => (<Post {...props} loggedIn={this.state.loggedIn}/>)
                               }

                        />

                        <Route exact path='/news/:id/:title/:user' component={News}/>

                        <Route exact path='/postoverview/:user' component={PostOverview}/>

                        <Route exact path='/comment/:title/:user' component={Comment}/>

                        <Route exact path='/login'
                               render={
                                   props => (<Login {...props}
                                                    handleLogin={this.handleLogin}
                                                    tempAuth={this.tempAuth}/>)
                               }
                        />
                        <Route exact path='/register'
                               render={
                                   props => (<Register {...props}
                                                       handleRegister={this.handleRegister}
                                                       tempRegister={this.tempRegister}/>)
                               }
                        />

                        <Route exact path='/Dashboard'
                               render={
                                   props => (<Dashboard {...props}
                                                        loggedIn={this.state.loggedIn}
                                                        user={this.state.user}/>)}
                        />

                        <Route exact path='/MainPage' render={props => (<MainPage {...props}/>)}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

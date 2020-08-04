import React from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import WelcomePage from './react-components/WelcomePage';

import Login from './react-components/Login';
import Post from './react-components/Post';
import Comment from './react-components/Post/comment';
import Register from "./react-components/Register";
import PostOverview from "./react-components/PostOverview";

import News from "./react-components/News";

import Dashboard from './react-components/Dashboard';
import MainPage from './react-components/MainPage';


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

    state = {
        current: null,
        role: null
    }

    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.readCookie = this.readCookie.bind(this);
        this.readCookie().then();
    }

    update = data => this.setState(data);

    readCookie = _ => axios.get("/verify").then(response => this.update(response.data)).catch();


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

                        <Route exact path='/postpage/:topic/:user'

                               render={
                                   props => (<Post {...props} loggedIn={this.state.loggedIn}/>)
                               }

                        />

                        <Route exact path='/news/:id/:title/:user' component={News}/>

                        <Route exact path='/postoverview/:user' component={PostOverview}/>

                        <Route exact path='/comment/:title/:user' component={Comment}/>

                        <Route exact path={['/dashboard', '/login']}
                               render={
                                   props => (this.state.current) ?
                                       (<Dashboard {...props}/>) :
                                       (<Login {...props} update={this.update}/>)
                               }
                        />
                        <Route exact path='/register'
                               render={
                                   props => (<Register {...props}
                                                       update={this.update}/>)
                               }
                        />

                        <Route exact path='/Dashboard/:user'
                               render={
                                   props => (<Dashboard {...props}
                                                        loggedIn={this.state.loggedIn}
                                                        user={this.state.current}/>)}
                        />

                        <Route exact path='/MainPage/:user' component={MainPage}/>

                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

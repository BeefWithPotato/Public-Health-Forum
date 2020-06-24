import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import WelcomePage from './react-components/WelcomePage';
import HomePage from './react-components/HomePage';
import Login from './react-components/Login';
import Post from './react-components/Post';
import Register from "./react-components/Register";

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: "NOT_LOGGED_IN",
            user: {}
        }
        this.handleLogin = this.handleLogin.bind(this);
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

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact path='/'
                            render={
                                props => (<WelcomePage {...props} loggedIn={this.state.loggedIn} />)
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
                        <Route exact path='/postpage/:user'
                               render={
                                   props => (<Post {...props} loggedIn={this.state.loggedIn} />)
                               }
                        />
                        <Route exact path='/login'
                               render={
                                   props => (<Login {...props} handleLogin={this.handleLogin} />)
                               }
                        />
                        <Route exact path='/register'
                               render={
                                   props => (<Register {...props} handleLogin={this.handleLogin}/>)
                               }
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

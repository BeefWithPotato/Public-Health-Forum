import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import WelcomePage from './react-components/WelcomePage';
import HomePage from './react-components/HomePage';
import LoginPage from './react-components/LoginPage';
import Post from './react-components/Post';

class App extends React.Component{
    render() {
        return (
            <div>
            <BrowserRouter>
              <Switch>

                <Route exact path='/' component={WelcomePage}/>
                <Route exact path='/homepage/:user' component={HomePage}/>
                <Route exact path='/postpage/:user' component={Post}/>
                <Route exact path='/login'>
                    <LoginPage/>
                </Route>
                

              </Switch>
            </BrowserRouter>
          </div>
        );
    }
}

export default App;

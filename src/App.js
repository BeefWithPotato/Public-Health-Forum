import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import WelcomePage from './react-components/WelcomePage';
import HomePage from './react-components/HomePage';
import LoginPage from './react-components/LoginPage';

class App extends React.Component{
    render() {
        return (
            <div>
            <BrowserRouter>
              <Switch>

                <Route exact path='/' render={() =>
                                (<WelcomePage state={this.state} />)}/>
                <Route exact path='/homepage' render={() =>
                                (<HomePage state={this.state} />)}/>
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

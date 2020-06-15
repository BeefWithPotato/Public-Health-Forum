import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Welcome_Page from './react-components/Welcome_Page';
import Home_Page from './react-components/Home_Page';


class App extends React.Component{
    render() {
    return (
        <div>
        <BrowserRouter>
          <Switch> 
           
            <Route exact path='/' render={() => 
                            (<Welcome_Page state={this.state}/>)}/>
            <Route exact path='/home_page' render={() => 
                            (<Home_Page state={this.state}/>)}/>

          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;

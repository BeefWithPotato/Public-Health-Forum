import React from 'react';
import './App.css';
import Welcome_Page from './Welcome_Page';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

class App extends React.Component{
    render() {
    return (
        <div>
        <BrowserRouter>
          <Switch> 
           
            <Route exact path='/' render={() => 
                            (<Welcome_Page state={this.state}/>)}/>
            
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;

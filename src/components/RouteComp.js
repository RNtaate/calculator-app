import React from 'react';
import Home from './Home';
import Quote from './Quote';
import App from './App';
import MyNavbar from './MyNavbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

let RouteComp = () => {
  return (
    <BrowserRouter>
      <MyNavbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/calculator" component={App}/>
        <Route exact path="/quote" component={Quote}/>
      </Switch>
    </BrowserRouter>
  );
}

export default RouteComp;
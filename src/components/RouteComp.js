import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Quote from './Quote';
import App from './App';
import MyNavbar from './MyNavbar';

const RouteComp = () => (
  <BrowserRouter>
    <MyNavbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={App} />
      <Route exact path="/quote" render={(props) =>(
        <Quote { ...props }/>
      ) } />
    </Switch>
  </BrowserRouter>
);

export default RouteComp;

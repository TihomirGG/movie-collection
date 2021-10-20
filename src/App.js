import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ROUTES from './constants/routes'
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path={ROUTES.SEARCH}>
           <div>Hello</div>
         </Route>
         <Route exact path={ROUTES.MOVIE}>
           <div>Hello</div>
         </Route>
         <Route exact path={ROUTES.HOME}>
           <div>Hello</div>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;

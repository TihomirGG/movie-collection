import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Search from './views/Search';
import MovieDetail from './views/MovieDetail';
import ROUTES from './constants/routes';
import './App.scss';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={ROUTES.SEARCH}>
                        <Search/>
                    </Route>
                    <Route exact path={ROUTES.MOVIE}>
                        <MovieDetail />
                    </Route>
                    <Route exact path={ROUTES.HOME}>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

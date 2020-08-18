import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Home from './React Components/pages/Home/Home';
import NotFound from './React Components/pages/NotFound/NotFound';
//===================================================================================
class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}
//===================================================================================
export default App;

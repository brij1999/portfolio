import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './home.scss';

class Home extends Component {
    render() {
        return (
            <div>
                Hello There!
            </div>
        )
    }
}

export default withRouter(Home);
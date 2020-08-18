import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Landing from '../../layout/Landing/Landing';
import './home.scss';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Landing />
            </div>
        )
    }
}

export default withRouter(Home);
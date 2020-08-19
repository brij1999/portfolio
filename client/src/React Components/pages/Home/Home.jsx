import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Landing from '../../layout/Landing/Landing';
import Experience from '../../layout/Experience/Experience';
import './home.scss';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Landing />
                <Experience />
            </div>
        )
    }
}

export default withRouter(Home);
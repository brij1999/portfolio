import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Landing from '../../layout/Landing/Landing';
import Experience from '../../layout/Experience/Experience';
import Projects from '../../layout/Projects/Projects';
import Contact from '../../layout/Contact/Contact';
import './home.scss';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Landing />
                <Experience />
                <Projects />
                <Contact />
            </div>
        )
    }
}

export default withRouter(Home);
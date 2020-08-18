import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './landing.scss';
import './landing_graphic.scss';

class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <div className='landing__side'>
                    <div className='landing__side__linkgrp'>
                        <a href='#' className='landing__side__linkgrp--link'>
                            GitHub
                        </a>
                        <a href='#' className='landing__side__linkgrp--link'>
                            LinkedIn
                        </a>
                        <a href='#' className='landing__side__linkgrp--link'>
                            Contact
                        </a>
                    </div>
                </div>
                <div className='landing__top'>
                    <div className='landing__top__name'>Brijgopal Bharadwaj</div>
                    <div className='landing__top__linkgrp'>
                        <a href='#' className='landing__top__linkgrp--link'>
                            About
                        </a>
                        <a href='#' className='landing__top__linkgrp--link'>
                            Experience
                        </a>
                        <a href='#' className='landing__top__linkgrp--link'>
                            Projects
                        </a>
                    </div>
                </div>
                <div className='landing__hero'>
                    <div className='landing__hero__text'>
                        <div className='landing__hero__heading'>
                            <div className='landing__hero__heading--line'>
                                Skill<span>.</span>
                            </div>
                            <div className='landing__hero__heading--line'>
                                Ambition<span>.</span>
                            </div>
                            <div className='landing__hero__heading--line'>
                                Code<span>.</span>
                            </div>
                        </div>
                        <div className='landing__hero__desc'>
                            <div>These are the words that summarize my personality.</div>
                            <div>I am an experienced software engineer, with specialized</div>
                            <div>
                                knowledge in all the stages of the software development lifecycle.
                            </div>
                            <div>
                                I like to design and develop websites, automate stuff with IoT,
                            </div>
                            <div>and deep-dive into the realm of data-science.</div>
                            <div className='landing__hero__btngrp'>
                                <a
                                    href='https://bit.ly/brijgopal'
                                    target='_blank'
                                    className='landing__hero__btngrp--btn'>
                                    Resume
                                </a>
                                <a href='#' className='landing__hero__btngrp--btn'>
                                    Get in touch
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='landing__hero__graphic'></div>
                </div>
            </div>
        );
    }
}

export default withRouter(Landing);

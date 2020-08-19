import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './landing.scss';
import './landing_graphic.scss';
import myImage from '../../../assets/graphicons/me.png';
import icon01 from '../../../assets/graphicons/01.png';
import icon02 from '../../../assets/graphicons/02.png';
import icon03 from '../../../assets/graphicons/03.png';
import icon04 from '../../../assets/graphicons/04.png';
import icon05 from '../../../assets/graphicons/05.png';
import icon06 from '../../../assets/graphicons/06.png';
import icon07 from '../../../assets/graphicons/07.png';
import icon08 from '../../../assets/graphicons/08.png';
import icon09 from '../../../assets/graphicons/09.png';
import icon10 from '../../../assets/graphicons/10.png';
import icon11 from '../../../assets/graphicons/11.jpg';
import icon12 from '../../../assets/graphicons/12.png';
import icon13 from '../../../assets/graphicons/13.png';
import icon14 from '../../../assets/graphicons/14.png';
import icon15 from '../../../assets/graphicons/15.jpg';

class Landing extends Component {
    render() {
        const icons = [
            icon01,
            icon02,
            icon03,
            icon04,
            icon05,
            icon06,
            icon07,
            icon08,
            icon09,
            icon10,
            icon11,
            icon12,
            icon13,
            icon14,
            icon15,
        ];
        let angle = 360 - 90;
        const dangle = 360 / icons.length;
        const bubble_group = icons.map((icon, index) => {
            angle += dangle;
            return (
                <div
                    className='graphic__bubble'
                    key={`bubble${index}`}
                    style={{
                        transform: `rotate(${angle}deg) translate(30vh) rotate(-${angle}deg)`,
                    }}>
                    <div className='graphic__bubble__content'>
                        <img src={icon} alt='' className='graphic__bubble__img' />
                    </div>
                </div>
            );
        });

        return (
            <div className='landing'>
                <div className='landing__side'>
                    <div className='landing__side__linkgrp'>
                        <a
                            href='https://github.com/brij1999/'
                            target='_blank'
                            className='landing__side__linkgrp--link'>
                            GitHub
                        </a>
                        <a
                            href='https://www.linkedin.com/in/brij1999/'
                            target='_blank'
                            className='landing__side__linkgrp--link'>
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
                                I like to design and develop web-apps, automate stuff with IoT,
                            </div>
                            <div>deep-dive into the realm of data-science, and much more...</div>
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
                    <div className='landing__hero__graphic'>
                        <div className='graphic'>
                            <div className='pulse--wrapper'>
                                <div className='pulse'></div>
                            </div>
                            <div className='graphic__bubble-grp'>{bubble_group}</div>
                            <div className='graphic__circle'>
                                <img src={myImage} alt='' className='graphic__circle__img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Landing);

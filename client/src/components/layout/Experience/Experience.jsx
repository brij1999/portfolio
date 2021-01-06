import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { experience } from '../../../assets/details/experience.json';
import './experience.scss';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.setCardProperties();
    }

    setCardProperties() {
        const card_pictures = document.querySelectorAll('.experience__card__picture');
        const card_backs = document.querySelectorAll('.experience__card__side--back');
        const card_headings = document.querySelectorAll('.experience__card__heading-span');
        for (let i = 0; i < card_pictures.length; i++) {
            card_pictures[i].style.backgroundBlendMode = experience[i].blendMode;
            card_pictures[i].style.backgroundImage = `linear-gradient(
                        to right bottom,
                        ${experience[i].colors[0]},
                        ${experience[i].colors[1]}
                    ),
                    url(${experience[i].display})`;
            card_backs[i].style.backgroundImage = `linear-gradient(
                        to right bottom,
                        ${experience[i].colors[0]},
                        ${experience[i].colors[1]}
                    )`;
            card_headings[i].style.background = `linear-gradient(
                        to right bottom,
                        ${experience[i].colors[0]}d9,
                        ${experience[i].colors[1]}d9
                    )`;
        }
    }

    render() {
        const experienceCards = experience.map((item, index) => (
            <div className='experience__card' key={`exp${index}`}>
                <div className='experience__card__side experience__card__side--front'>
                    <div className='experience__card__picture'>&nbsp;</div>
                    <h4 className='experience__card__heading'>
                        <span className='experience__card__heading-span'>{item.title}</span>
                    </h4>
                    <div className='experience__card__details'>
                        <ul>
                            <li>{item.type} at</li>
                            <li>{item.workplace}</li>
                            <li>{item.address}</li>
                            <li>
                                {item.from} - {item.to}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='experience__card__side experience__card__side--back'>
                    <div className='experience__card__cta'>
                        <div className='experience__card__link-grp'>
                            {item.resources.map((obj, id) => (
                                <a
                                    href={obj.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='experience__card__link'
                                    key={`link${index}${id}`}>
                                    {obj.title}
                                </a>
                            ))}
                        </div>
                        <ul className='experience__card__description'>
                            {item.description.map((line, id) => (
                                <li
                                    className='experience__card__description--line'
                                    key={`line${index}${id}`}>
                                    {line}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        ));
        return (
            <div className='experience--wrapper'>
                <div className='experience'>
                    <div className='experience__heading'>Experience</div>
                    <div className='experience__card--wrapper'>{experienceCards}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(Experience);

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './contact.scss';

class Contact extends Component {
    render() {
        return (
            <footer class='footer text-light mt-5 contact' id='section-footer'>
                <div class='row mx-5 mt-3'>
                    <div class='col-md-6'>
                        <form
                            action='https://formcarry.com/s/7gmYKvl3oz5'
                            method='POST'
                            accept-charset='UTF-8'
                            class='form'>
                            <h2 class='heading-footer text-center'>Get In Touch!</h2>

                            <div class='row'>
                                <div class='form-group col-md-6'>
                                    <input
                                        type='text'
                                        class='form__input form-control'
                                        placeholder='Name'
                                        id='name'
                                        name='Name'
                                        required
                                    />
                                    <label for='name' class='form__label'>
                                        Name
                                    </label>
                                </div>

                                <div class='form-group col-md-6'>
                                    <input
                                        type='email'
                                        class='form__input form-control'
                                        placeholder='E-mail'
                                        id='email'
                                        name='E-mail'
                                        required
                                    />
                                    <label for='email' class='form__label'>
                                        E-mail
                                    </label>
                                </div>
                            </div>
                            <div class='row'>
                                <div class='col-12 form-group'>
                                    <textarea
                                        class='form__input form-control mt-5'
                                        id='message'
                                        name='Message'
                                        rows='5'
                                        placeholder='Message'
                                        required></textarea>
                                    <label for='message' class='form__label'>
                                        Message
                                    </label>
                                </div>
                            </div>

                            <input type='hidden' name='_gotcha' />

                            <input
                                type='reset'
                                value='Clear Entries'
                                class='button button-secondary button--animated button--white mt-3 mr-3'
                            />

                            <input
                                type='submit'
                                value='Send Message'
                                class='button button-secondary button--animated button--white mt-3'
                            />
                        </form>
                    </div>

                    <div class='col-md-1'>
                        <hr class='hr--style1 hr--vertical' />
                    </div>

                    <div class='col-md-5'>
                        <div class='row mt-4 align-items-start'>
                            <div class='col-md-4'>
                                {' '}
                                <i class='fas fa-home'></i>&emsp;ADDRESS:
                            </div>
                            <div class='col-md-8'>
                                <a
                                    href='https://goo.gl/maps/anovmEmVRF92'
                                    target='_blank'
                                    class='Link'>
                                    Room No. 743, L-Block,
                                    <br />
                                    VIT Men's Hostel, Vellore,
                                    <br />
                                    Tamil Nadu - 632014.
                                </a>
                            </div>
                        </div>

                        <div class='row mt-4'>
                            <div class='col-md-4'>
                                <i class='fas fa-phone'></i>&emsp; CONTACT:
                            </div>
                            <div class='col-md-8'>
                                <a href='tel:+918989808478' class='Link'>
                                    +91-8989808478
                                </a>
                            </div>
                        </div>

                        <div class='row mt-4'>
                            <div class='col-md-4'>
                                <i class='fas fa-envelope'></i>&emsp; E-MAIL:
                            </div>
                            <div class='col-md-8'>
                                <a href='mailto: brijgopalbharadwaj1999@gmail.com' class='Link'>
                                    brijgopalbharadwaj1999@gmail.com
                                </a>
                            </div>
                        </div>

                        <div class='row mt-5 footer__icons'>
                            <div class='col-md-2'>
                                <a
                                    href='https://github.com/brij1999'
                                    target='_blank'
                                    class='fab Link-icon fa-github fa-3x'></a>
                            </div>
                            <div class='col-md-2'>
                                <a
                                    href='https://www.linkedin.com/in/brij1999/'
                                    target='_blank'
                                    class='fab Link-icon fa-linkedin fa-3x'></a>
                            </div>
                            <div class='col-md-2'>
                                <a
                                    href='https://www.facebook.com/brijgopal.bharadwaj.7/'
                                    target='_blank'
                                    class='fab Link-icon fa-facebook-square fa-3x'></a>
                            </div>
                            <div class='col-md-2'>
                                <a
                                    href='https://twitter.com/brij_1999'
                                    target='_blank'
                                    class='fab Link-icon fa-twitter fa-3x'></a>
                            </div>
                            <div class='col-md-2'>
                                <a
                                    href='https://www.instagram.com/brij1999/'
                                    target='_blank'
                                    class='fab Link-icon fa-instagram fa-3x'></a>
                            </div>
                        </div>

                        <a
                            href='https://bit.ly/brijgopal'
                            class='row mt-4 mx-2 button button-secondary button--animated button--white'
                            download='Brijgopal Bharadwaj'>
                            Download Resume
                        </a>
                    </div>
                </div>

                <div class='footer__wave'></div>
            </footer>
        );
    }
}

export default withRouter(Contact);

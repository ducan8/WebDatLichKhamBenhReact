import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant';
import { withRouter } from 'react-router';
import { changeLanguageApp, showChatbot } from '../../store/actions';
import Collab from '../NavMenu/Collab';
import { Link  } from "react-router-dom";
import HomePage from './HomePage';

class HomeHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            opacity: 0,
            // isShowChatbot: 'false',
        }
    }
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
    }
    handleMenu = () => {
        this.setState({
            display: 'none',
            opacity: 0
        })
    }

    handleDisplayMenu = () => {
        this.setState({
            display: 'block',
            opacity: 0.4
        })
    }
    handleChatbot = () => {
        let isShowChatbot = this.props.isShowChatbot;
        this.props.showChatbot(!isShowChatbot)
        console.log('show chatbot: ', isShowChatbot);
    }

    render() {
        let { language, isLoggedIn, isShowChatbot } = this.props;
        let { display, opacity } = this.state;
        return (
            <React.Fragment>
                <div className='header-menu'  >
                    <nav className='menu-left' style={{ 'display': `${display}` }}>
                        <ul>
                            <li onClick={() => this.returnToHome()}><a>Trang chu</a></li>
                            <li><Link to='/login'>{isLoggedIn ? 'Quản lý thông tin' : 'Dang nhap noi bo' }</Link></li>
                            <li><Link to='/collaborate'>Hop tac</Link></li>
                            <li><Link to='/contact'>Lien he voi chung toi</Link></li>
                        </ul>
                    </nav>
                    <div className='menu-right' style={{ 'opacity': `${opacity}`, 'display': `${display}` }} onClick={this.handleMenu}>
                    </div>
                </div>

                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars" onClick={this.handleDisplayMenu}></i>
                            <div className="header-logo" onClick={() => this.returnToHome()}></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b> < FormattedMessage id="homeheader.speciality" /></b></div>
                                <div className='subTitle'>< FormattedMessage id="homeheader.searchdoctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b>< FormattedMessage id="homeheader.health-facility" /></b></div>
                                <div className='subTitle'>< FormattedMessage id="homeheader.select-room" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b>< FormattedMessage id="homeheader.doctor" /></b></div>
                                <div className='subTitle'>< FormattedMessage id="homeheader.select-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b>< FormattedMessage id="homeheader.fee" /></b></div>
                                <div className='subTitle'>< FormattedMessage id="homeheader.check-heath" /></div>
                            </div>
                            <div className='child-content'></div>
                            <div className='child-content'></div>

                        </div>
                        <div className='right-content'>
                            <div className='support' onClick={() => this.handleChatbot()}>
                                <i className='fas fa-question-circle'></i> < FormattedMessage id="homeheader.support" />
                            </div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VI</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>
                {this.props.isShowBanner === true &&
                    <div className="home-header-banner">
                        <div className='content-up'>
                            <div className='title1'>< FormattedMessage id="banner.title1" /></div>
                            <div className='title2'>< FormattedMessage id="banner.title2" /></div>
                            <div className='search'>
                                <i className='fas fa-search'></i>
                                <input type="text" placeholder='Tìm bác sĩ theo chuyên khoa' />
                            </div>
                        </div>
                        <div className='content-down'>
                            <div className='options'>
                                <div className='option-child'>
                                    <div className='icon-child'><i className='far fa-hospital'></i></div>
                                    <div className='text-child'>< FormattedMessage id="banner.specialist-examination" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className='fas fa-video'></i></div>
                                    <div className='text-child'>< FormattedMessage id="banner.remote-examination" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className='fas fa-tasks'></i></div>
                                    <div className='text-child'>< FormattedMessage id="banner.general-examination" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className='fas fa-flask'></i></div>
                                    <div className='text-child'>< FormattedMessage id="banner.medical-test" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className='fas fa-x-ray'></i></div>
                                    <div className='text-child'>< FormattedMessage id="banner.mental-health" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-user-md"></i></div>
                                    <div className='text-child'>< FormattedMessage id="banner.dental-examination" /></div>
                                </div>

                            </div>

                        </div>

                    </div>
                }
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
        isShowChatbot: state.app.isShowChatbot

    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
        showChatbot: (isShowChatbot) => dispatch(showChatbot(isShowChatbot))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));

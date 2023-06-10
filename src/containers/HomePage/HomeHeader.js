import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';

class HomeHeader extends Component {

    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i class="fas fa-bars"></i>
                            <div className="header-logo"></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b> < FormattedMessage id="homeheader.speciality"/></b></div>
                                <div className='subTitle'>< FormattedMessage id="homeheader.searchdoctor"/></div>
                            </div>
                            <div className='child-content'>
                                <div><b>< FormattedMessage id="homeheader.health-facility"/></b></div>
                                <div className='subTitle'>< FormattedMessage id="homeheader.select-room"/></div>
                            </div>
                            <div className='child-content'>
                                <div><b>< FormattedMessage id="homeheader.doctor"/></b></div>
                                <div className='subTitle'>< FormattedMessage id="homeheader.select-doctor"/></div>
                            </div>
                            <div className='child-content'>
                                <div><b>< FormattedMessage id="homeheader.fee"/></b></div>
                                <div className='subTitle'>< FormattedMessage id="homeheader.check-heath"/></div>
                            </div>
                            <div className='child-content'></div>
                            <div className='child-content'></div>

                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className='fas fa-question-circle'></i> < FormattedMessage id="homeheader.support"/>
                            </div>
                            <div className='language-vi'> VN</div>
                            <div className='language-en'> /EN</div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className='content-up'>
                        <div className='title1'>< FormattedMessage id="banner.title1"/></div>
                        <div className='title2'>< FormattedMessage id="banner.title2"/></div>
                        <div className='search'>
                            <i className='fas fa-search'></i>
                            <input type="text" placeholder='Tìm bác sĩ theo chuyên khoa' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'><i className='far fa-hospital'></i></div>
                                <div className='text-child'>< FormattedMessage id="banner.specialist-examination"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-desktop'></i></div>
                                <div className='text-child'>< FormattedMessage id="banner.remote-examination"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-tasks'></i></div>
                                <div className='text-child'>< FormattedMessage id="banner.general-examination"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-flask'></i></div>
                                <div className='text-child'>< FormattedMessage id="banner.medical-test"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-x-ray'></i></div>
                                <div className='text-child'>< FormattedMessage id="banner.mental-health"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-user-md"></i></div>
                                <div className='text-child'>< FormattedMessage id="banner.dental-examination"/></div>
                            </div>

                        </div>

                    </div>

                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

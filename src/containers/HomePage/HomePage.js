import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import OutstandingDoctor from './Section/OutstandingDoctor';
import HanBook from './Section/HandBook';
import About from './Section/About';
import HomeFooter from './Section/HomeFooter';

import './HomePage.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Chatbot from '../Patient/SocialPlugin/Chatbot';

class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            // afterChange: this.handleAfterChange
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />
        };
        let currentURL = +process.env.REACT_APP_IS_LOCALHOST === 1 ?
            "https://chatbot-heathcare-775548f1d48a.herokuapp.com/" : window.location.href;

        return (
            <React.Fragment>
                <HomeHeader isShowBanner={true} />
                <Specialty settings={settings} />
                <MedicalFacility settings={settings} />
                <OutstandingDoctor settings={settings} />
                <HanBook settings={settings} />
                <About />
                <HomeFooter />
                {/* <Chatbot dataHref={currentURL} /> */}
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

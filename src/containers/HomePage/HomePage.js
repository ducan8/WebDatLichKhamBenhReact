import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import OutstandingDoctor from './Section/OutstandingDoctor';
import HanBook from './Section/HandBook';
import About from './Section/About';
import HomeFooter from './Section/HomeFooter';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './HomePage.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Chatbot from '../Patient/SocialPlugin/Chatbot';
import { showChatbot } from '../../store/actions';


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
        // let currentURL = +process.env.REACT_APP_IS_LOCALHOST === 1 ?
        //     "https://chatbot-heathcare-775548f1d48a.herokuapp.com/" : window.location.href;
        let { isShowChatbot } = this.props;
        return (
            <React.Fragment>
                <HomeHeader isShowBanner={true} />
                <Specialty settings={settings} />
                <MedicalFacility settings={settings} />
                <OutstandingDoctor settings={settings} />
                <HanBook settings={settings} />
                <About />
                <HomeFooter />
                <MessengerCustomerChat
                    pageId="102601946221028"
                    appId="1565948963808728"
                    isShowChatbot= {isShowChatbot}
                    // htmlRef="<REF_STRING>"
                />
                {/* <Chatbot dataHref={currentURL} /> */}
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        isShowChatbot: state.app.isShowChatbot
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showChatbot: (isShowChatbot) => dispatch(showChatbot(isShowChatbot))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

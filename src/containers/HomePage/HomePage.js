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
                {
                    isShowChatbot && <MessengerCustomerChat
                        pageId="102601946221028"
                        appId="1565948963808728"
                    // htmlRef="<REF_STRING>"
                    />
                }
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

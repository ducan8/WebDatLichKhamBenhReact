import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import specialtyImg from '../../../assets/specialty/xuong_khop.jpg'
class Specialty extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />
        };

        return (
            <div className='section-specialty'>
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <span className='title-section'>Các ngành chuyên khoa</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='specialty-body'>
                        <Slider {...settings}>
                            <div className='specialty-customize'>
                                <div className='bg-img'></div>
                                <div>Khám bệnh</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-img'></div>
                                <div>Khám bệnh</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-img'></div>
                                <div>Khám bệnh</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-img'></div>
                                <div>Khám bệnh</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-img'></div>
                                <div>Khám bệnh</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-img'></div>
                                <div>Khám bệnh</div>
                            </div>
                            



                        </Slider>
                    </div>

                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);

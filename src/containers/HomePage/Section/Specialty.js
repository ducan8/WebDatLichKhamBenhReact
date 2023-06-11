import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

import sectionImg from '../../../assets/specialty/xuong_khop.jpg'
class Specialty extends Component {


    render() {

        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Các ngành chuyên khoa</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='specialty-customize'>
                                <div className='bg-img section-specialty'></div>
                                <div>Khám bệnh</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-img section-specialty'></div>
                                <div>Khám bệnh</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-img section-specialty'></div>
                                <div>Khám bệnh</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-img section-specialty'></div>
                                <div>Khám bệnh</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-img section-specialty'></div>
                                <div>Khám bệnh</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-img section-specialty'></div>
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

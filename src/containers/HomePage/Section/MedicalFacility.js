import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

class MedicalFacility extends Component {

    render() {

        return (
            <div className='section-share section-medical-facility'>
            <div className='section-container'>
                <div className='section-header'>
                    <span className='title-section'>Các bệnh viện uy tín</span>
                    <button className='btn-section'>Xem thêm</button>
                </div>
                <div className='section-body'>
                    <Slider {...this.props.settings}>
                        <div className='specialty-customize'>
                            <div className='bg-img section-medical-facility'></div>
                            <div>Bệnh viện đa khoa Hồng Ngọc</div>
                        </div>
                        <div className='specialty-customize'>
                            <div className='bg-img section-medical-facility'></div>
                            <div>Bệnh viện đa khoa Hồng Ngọc</div>
                        </div>
                        <div className='specialty-customize'>
                            <div className='bg-img section-medical-facility'></div>
                            <div>Bệnh viện đa khoa Hồng Ngọc</div>
                        </div>
                        <div className='specialty-customize'>
                            <div className='bg-img section-medical-facility'></div>
                            <div>Bệnh viện đa khoa Hồng Ngọc</div>
                        </div>
                        <div className='specialty-customize'>
                            <div className='bg-img section-medical-facility'></div>
                            <div>Bệnh viện đa khoa Hồng Ngọc</div>
                        </div>
                        <div className='specialty-customize'>
                            <div className='bg-img section-medical-facility'></div>
                            <div>Bệnh viện đa khoa Hồng Ngọc</div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);

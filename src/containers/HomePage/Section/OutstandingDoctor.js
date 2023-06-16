import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import * as actions from '../../../store/actions';
import { LANGUAGES } from '../../../utils';

class OutstandingDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrDoctors: []
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsRedux
            })
        }
    }

    componentDidMount() {
        this.props.loadTopDoctors();
    }

    render() {
        let { language } = this.props;
        console.log('check top doctor: ', this.props.topDoctorsRedux);
        let arrDoctors = this.state.arrDoctors;
        arrDoctors = arrDoctors;
        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>< FormattedMessage id='homepage.out-standing-doctor'/></span>
                        <button className='btn-section'>< FormattedMessage id='homepage.more'/></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>

                            {arrDoctors && arrDoctors.length > 0 && arrDoctors.map((item, index) => {
                                let imageBase64 = '';
                                if (item.image) {
                                    imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                                }
                                let nameVi = `${item.positionData.valueVi}, ` + item.firstName + ' ' + item.lastName;
                                let nameEn = `${item.positionData.valueEn}, ` + item.firstName + ' ' + item.lastName;
                                console.log('nameVi: ', nameVi);
                                console.log('anh: ',item.lastName, imageBase64);
                                return (
                                    <div className='section-customize' key={index}>
                                        <div className='customize-border'>
                                            <div className='outer-bg'>
                                                <div className='bg-img section-outstanding-doctor'
                                                    style={{ backgroundImage: `url(${imageBase64})` }}
                                                ></div>
                                            </div>
                                            <div className='position text-center'>
                                                <div>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                                <div>Cơ, xương khớp</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </Slider>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        topDoctorsRedux: state.admin.topDoctors,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);

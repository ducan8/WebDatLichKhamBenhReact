import React, { Component } from 'react';
import { connect } from "react-redux";
import './DoctorExtraInfor.scss';
import moment from 'moment';
import localization from 'moment/locale/vi';
import { getScheduleDoctorByDate } from '../../../services/userService';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../../utils';

class DoctorExtraInfor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: false,
        }
    }

    async componentDidMount() {

    }

    showHideDetailInfor = (status) => [
        this.setState({
            isShowDetailInfor: status
        })
    ]

    async componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        let { isShowDetailInfor } = this.state;

        return (
            <div className='doctor-extra-infor-container'>
                <div className='content-up'>
                    <div className='text-address'>Địa chỉ Khám</div>
                    <div className='name-clinic'>Phòng khám vjp</div>
                    <div className='detail-address'> Hà Nội</div>
                </div>
                <div className='content-down'>
                    {isShowDetailInfor === false &&
                        <div className='short-info'>
                            Giá Khám: 250k.
                            <span
                                onClick={() => this.showHideDetailInfor(true)}
                            >
                                Xem detail...
                            </span>
                        </div>

                    }
                    {isShowDetailInfor === true &&
                        <>
                            <div className='title'>Giá Khám: .</div>
                            <div className='detail-infor'>
                                <div className='price'>
                                    <span className='left'>Giá Khám</span>
                                    <span className='right'>250.000đ</span>
                                </div>
                                <div className='note'>
                                    Được ưu tiên khám trước khi đặt khám qua website. kgiá
                                </div>

                            </div>
                            <div className='payment'>
                                người bệnh có thế thanh toán ahihihi
                            </div>
                            <div className='hide-price'>
                                <span
                                    onClick={() => this.showHideDetailInfor(false)}
                                >
                                    Ẩn bảng giá
                                </span>
                            </div>
                        </>
                    }
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);

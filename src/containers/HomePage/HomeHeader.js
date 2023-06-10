import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';

class HomeHeader extends Component {

    render() {

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
                                <div><b>Chuyên khoa</b></div>
                                <div className='subTitle'>Chọn bác sĩ theo chuyên khoa</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Cơ sở y tế</b></div>
                                <div className='subTitle'>Chọn phòng khám sức khoẻ</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Bác sĩ</b></div>
                                <div className='subTitle'>Chọn bác sĩ ưu tú</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Gói khám</b></div>
                                <div className='subTitle'>Chọn gói khám phù hợp</div>
                            </div>
                            <div className='child-content'></div>
                            <div className='child-content'></div>

                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className='fas fa-question-circle'></i> Trợ giúp
                            </div>
                            <div className='flag'> VN</div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className='content-up'>
                        <div className='title1'>NỀN TẢNG CHĂM SÓC SỨC KHOẺ</div>
                        <div className='title2'>HỖ TRỢ ĐẶT LỊCH KHÁM BỆNH</div>
                        <div className='search'>
                            <i className='fas fa-search'></i>
                            <input type="text" placeholder='Tìm bác sĩ theo chuyên khoa' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'><i className='far fa-hospital'></i></div>
                                <div className='text-child'>Khám chuyên khoa</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='far fa-wifi'></i></div>
                                <div className='text-child'>Khám từ xa</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='far fa-procedures'></i></div>
                                <div className='text-child'>Khám tổng quát</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='far fa-microsope'></i></div>
                                <div className='text-child'>Xét nghiệm y học</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='far fa-user-md'></i></div>
                                <div className='text-child'>Sức khoẻ tinh thần</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='far fa-tooth'></i></div>
                                <div className='text-child'>Khám nha khoa</div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

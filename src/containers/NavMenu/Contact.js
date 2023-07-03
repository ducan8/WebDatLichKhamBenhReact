import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import HomeHeader from '../HomePage/HomeHeader';
import HomeFooter from '../HomePage/Section/HomeFooter';
import './Contact.scss';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {

    }



    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }

    render() {
        return (
            <>
                <HomeHeader />
                <div className='container-contact'>
                    <h1>Liên hệ</h1>
                    <p>Nền tảng chăm sóc sức khoẻ trực tuyến HealthCare</p>

                       <p> Số điện thoại: (+84) 386898746</p>

                        <p>Email: ducan9c@gmail.com</p>

                        <p>Lê Đức An - 20182325</p>

                        <p>ĐKKD số: 1217801392. Sở KHĐT Hà Nội cấp ngày 03/07/2023.</p>

                        <p>Địa chỉ: Số 89, ngõ 8/11/186 Lê Quang Đạo, quận Nam Từ Liêm, thủ đô Hà Nội.</p>
                </div>
                <HomeFooter />
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

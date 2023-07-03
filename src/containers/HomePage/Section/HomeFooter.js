import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeFooter.scss'

class HomeFooter extends Component {


    render() {

        return (
            <div className='home-footer'>
                <div className='footer-container'>
                    <div className='about-us'> 
                        <h4>Nền tảng chăm sóc sức khoẻ trực tuyến HealthCare</h4>
                        <p>Điều trị bằng trái tim - chăm sóc bằng tấm lòng. </p>
                        <p>Chúng tôi luôn sẵn sàng đồng hành cùng bạn trong mọi hành trình của cuộc đời.</p>
                        <p><i className="fa fa-check" aria-hidden="true"></i> ĐKKD số: 1217801392. Sở KHĐT Hà Nội cấp ngày 03/07/2023.</p>
                    </div>
                    <div className='info'> 
                    
                        <ul>
                            <li><i className="fa fa-compass" aria-hidden="true"></i>  Số 89, ngõ 8/11/186 Lê Quang Đạo, quận Nam Từ Liêm, thủ đô Hà Nội.</li>
                            <li><i className="fa fa-phone" aria-hidden="true"></i> (+84)  386898746 </li>
                            <li><i class="far fa-paper-plane"></i>   ducan9c@gmail.com</li>
                        </ul>
                    </div>
                    <div className='follow-us'> 
                        Follow us on  <a href='https://www.facebook.com/healthcarePlatform.ducan8'><i className="fab fa-facebook-f facebook"></i> </a>
                    </div>
                </div>
                <p className='last-quote'>&copy; 06/2023 - Powered by Lê Đức An. More infomation, please contact my email. </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);

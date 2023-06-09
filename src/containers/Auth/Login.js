import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'admin@gmail.com',
            password: '123456',
            isShowPassword: false,
            errorMessage: '',
        }
    }

    handleOnChangeUserName = (event) => {
        this.setState({
            username: event.target.value,
        })
        // console.log(event.target.value);

    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        })
        // console.log(event.target.value);

    }

    handleLogin = async () => {
        this.setState({
            errorMessage: '',
        });
        try {
            let data = await handleLoginApi(this.state.username, this.state.password)
            if (data && data.errCode !== 0) {
                this.setState({
                    errorMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
            }

        } catch (error) {
            if (error.response);
            if (error.response.data) {
                this.setState({
                    errorMessage: error.response.data.message,
                })
            }
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword,
        })
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.handleLogin();
        }
    }

    render() {

        return (
            <div className="login-background">
                <div className="login-container">
                    <div className='login-content'>
                        <div className='col-12 text-login'>Đăng nhập</div>
                        <div className='col-12 form-group login-input'>
                            <label>Tài khoản: </label>
                            <input type="text" className="form-control" placeholder='Nhập email'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUserName(event)}
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Mật khẩu: </label>
                            <div className="custom-input-password">
                                <input
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    className="form-control"
                                    placeholder='Nhập mật khẩu'
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangePassword(event)}
                                    onKeyDown={(event) => this.handleKeyDown(event)}
                                />
                                <span onClick={() => this.handleShowHidePassword()}>
                                    <i className={this.state.isShowPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                                </span>
                            </div>

                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errorMessage}
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={() => this.handleLogin()}>Đăng nhập</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        {/* <div className='col-12 text-center mt-3'>
                            <span className="text-other">Or Login with</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import HomeHeader from '../HomePage/HomeHeader';
import './Collab.scss';
import { toast } from 'react-toastify';
import { postSendCollab } from '../../services/userService';
import HomeFooter from '../HomePage/Section/HomeFooter';

class Collab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phoneNumber: '',
            fullName: '',
            clinic: '',
            address: '',
            warnning: '',
            display: 'none'
        }
    }

    async componentDidMount() {

    }



    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'fullName', 'phoneNumber', 'clinic', 'address'];
        for (let i = 0; i < arrInput.length; i++) {

            if (!this.state[arrInput[i]]) {
                isValid = false;
                this.setState({
                    display: 'block'
                })
                break;
            }

        }
        return isValid;
    }

    handleOnChangeInput = (event, id) => {
        let valueInput = event.target.value;
        let stateCopy = { ...this.state }
        stateCopy[id] = valueInput;
        this.setState({
            ...stateCopy
        });
    }

    handleSendCollab = async () => {
        let data = this.state;
        console.log('check data collab: ', data);
        let isValid = this.checkValidateInput();
        if (isValid == true) {
            // goi API
            let res = await postSendCollab(data)

            if (res && res.errCode === 0) {
                toast.success('Gửi thông tin thành công')
            } else {
                toast.error('Lỗi hệ thống...');
                console.log('error send semedy: ', res);
            }
        }
    }

    handleWarnning = () => {
        this.setState({
            display: 'none'
        })
    }

    render() {
        let { display } = this.state
        return (
            <>
                <HomeHeader />
                <div className='container-collab'>
                    <h1 > Hop tac cung chung toi</h1>
                    <div className='quote'> Hệ thống HealhCare rất hân hạnh được hợp tác với bác sĩ và cơ sở y tế.
                        Vui lòng để lại thông tin, chúng tôi sẽ liên hệ lại tới quý vị trong thời gian sớm nhất.
                    </div>

                    <form className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email: </label>
                            <input type='email' className=''
                                onChange={(event) => { this.handleOnChangeInput(event, "email") }}
                                onClick={this.handleWarnning}
                                value={this.state.email}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Số điện thoại</label>
                            <input type='text' className=''
                                onChange={(event) => { this.handleOnChangeInput(event, "phoneNumber") }}
                                onClick={this.handleWarnning}
                                value={this.state.phoneNumber}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Tên người liên hệ</label>
                            <input type='text' className=''
                                onChange={(event) => { this.handleOnChangeInput(event, "fullName") }}
                                onClick={this.handleWarnning}
                                value={this.state.fullName}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Tên phòng khám</label>
                            <input type='text' className=''
                                onChange={(event) => { this.handleOnChangeInput(event, "clinic") }}
                                onClick={this.handleWarnning}
                                value={this.state.clinic}
                            />
                        </div>
                        <div className='input-container max-width-input'>
                            <label>Địa chỉ phòng khám:</label>
                            <input type='text' className='last'
                                onChange={(event) => { this.handleOnChangeInput(event, "address") }}
                                onClick={this.handleWarnning}
                                value={this.state.address}
                            />
                        </div>
                        <div className='warnning' style={{'display': `${display}`}}>Vui long dien day du thong tin</div>
                        <button type='button' onClick={() => { this.handleSendCollab() }}>Gửi thông tin</button>
                    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Collab);

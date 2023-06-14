import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllcodeService } from '../../../services/userService';
import { escape, escapeRegExp } from 'lodash';
import { LANGUAGES } from '../../../utils/constant';

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: []
        };
    }
    async componentDidMount() {
        try {
            let res = await getAllcodeService('gender');
            if (res && res.errCode === 0) {
                this.setState({
                    genderArr: res.data
                })
            }
        } catch (err) {
            console.log(err);
        }
    };


    render() {
        let genders = this.state.genderArr;
        console.log('check state gender: ', genders);
        let language = this.props.language;
        console.log('check state languages: ', language);
        return (
            <div className='user-redux-container'>
                <div className='title'>
                    Manage User with redux
                </div>
                <div className="user-redux-body" >
                    <div>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 my-3'> < FormattedMessage id="manage-user.add" /></div>
                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.email" /> </label>
                                    <input type='email' className='form-control' />
                                </div>
                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.password" />: </label>
                                    <input type='password' className='form-control' />
                                </div>
                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.firstName" />: </label>
                                    <input type='text' className='form-control' />
                                </div>
                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.lastName" />: </label>
                                    <input type='text' className='form-control' />
                                </div>
                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.phoneNumber" />: </label>
                                    <input type='text' className='form-control' />
                                </div>
                                <div className='col-9'>
                                    <label>< FormattedMessage id="manage-user.address" />: </label>
                                    <input type='text' className='form-control' />
                                </div>
                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.gender" />: </label>
                                    <select className='form-control' >
                                        {genders && genders.length > 0 && genders.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })}

                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.roleId" />: </label>
                                    <select className='form-control' >
                                        <option selected>Choose...</option>
                                        <option >...</option>
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.position" />: </label>
                                    <select className='form-control' >
                                        <option selected>Choose...</option>
                                        <option >...</option>
                                    </select>
                                </div>

                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.image" />: </label>
                                    <input type='text' className='form-control' />
                                </div>

                                <div className='col-12'>
                                    <button type='submit' className='btn btn-primary mt-3'>< FormattedMessage id="manage-user.save" /></button>
                                </div>
                            </div>
                        </div>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { escape, escapeRegExp } from 'lodash';
import { LANGUAGES } from '../../../utils/constant';
import * as actions from '../../../store/actions';
import './UserRedux.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',
            isOpen: false,

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: '',
        };
    }
    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
        // try {
        //     let res = await getAllcodeService('gender');
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        // } catch (err) {
        //     console.log(err);
        // }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux;
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : ''
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux;
            this.setState({
                roleArr: arrRoles,
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : ''

            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPositions = this.props.positionRedux;
            this.setState({
                positionArr: arrPositions,
                position: arrPositions && arrPositions.length > 0 ? arrPositions[0].key : ''
            })
        }
    }

    handleOnchangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file);

            this.setState({
                previewImgURL: objectUrl,
                avatar: file
            })

            console.log('file: ', this.state.previewImgURL);
        }
    }

    openPreviewImage = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true
        })
    }

    handleSaveUser = () => {
        let isValid =  this.checkValidateInput();
        if(isValid === false) return ;
        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phonenumber: this.state.phoneNumber,
            gender: this.state.gender,
            roleId: this.state.role,
            positionId: this.state.position,
        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck =["email", "password", "firstName", 'lastName', 'phoneNumber', "address"]
        for(let i = 0; i < arrCheck.length; i++) {
            if(!this.state[arrCheck[i]]) {
                isValid = false;
                alert('this input is required' + arrCheck[i]);
                break;
            }
        }
        return isValid;
    }

    onChangeInput = (event, id) => {
        let copyState = {...this.state}

        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
        // email: '',
        // password: '',
        // firstName: '',
        // lastName: '',
        // phoneNumber: '',
        // address: '',
        // gender: '',
        // position: '',
        // role: '',
        // avatar: '',

    }
    render() {
        let genders = this.state.genderArr;
        let roles = this.state.roleArr;
        let positions = this.state.positionArr;
        let language = this.props.language;
        let isGetGenders = this.props.isLoadingGender;
        // console.log('check state: ', this.state);
        let { email, password, firstName, lastName, phoneNumber, address, gender, position, role, avatar } = this.state;
        return (
            <div className='user-redux-container'>
                <div className='title'>
                    Manage User with redux
                </div>
                <div className="user-redux-body" >
                    <div>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>{isGetGenders === true ? 'Loading genders' : ''}</div>
                                <div className='col-12 my-3'> < FormattedMessage id="manage-user.add" /></div>
                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.email" /> </label>
                                    <input type='email' className='form-control'
                                        value={email} onChange={(event) => this.onChangeInput(event, 'email')}
                                    />
                                </div>
                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.password" />: </label>
                                    <input type='password' className='form-control'
                                        value={password} onChange={(event) => this.onChangeInput(event, 'password')}
                                    />
                                </div>
                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.firstName" />: </label>
                                    <input type='text' className='form-control'
                                        value={firstName} onChange={(event) => this.onChangeInput(event, 'firstName')}
                                    />
                                </div>
                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.lastName" />: </label>
                                    <input type='text' className='form-control' 
                                    value={lastName} onChange={(event) => this.onChangeInput(event, 'lastName')}
                                    />

                                </div>
                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.phoneNumber" />: </label>
                                    <input type='text' className='form-control'
                                        value={phoneNumber} onChange={(event) => this.onChangeInput(event, 'phoneNumber')}
                                    />
                                </div>
                                <div className='col-9'>
                                    <label>< FormattedMessage id="manage-user.address" />: </label>
                                    <input type='text' className='form-control'
                                        value={address} onChange={(event) => this.onChangeInput(event, 'address')}

                                    />
                                </div>
                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.gender" />: </label>
                                    <select className='form-control'
                                         onChange={(event) => this.onChangeInput(event, 'gender')}

                                    >
                                        {genders && genders.length > 0 && genders.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })}

                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.roleId" />: </label>
                                    <select className='form-control'
                                        onChange={(event) => this.onChangeInput(event, 'roleId')}
                                    
                                    >
                                        {roles && roles.length > 0 && roles.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.position" />: </label>
                                    <select className='form-control'
                                        onChange={(event) => this.onChangeInput(event, 'position')}

                                     >
                                        {positions && positions.length > 0 && positions.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                            );
                                        })}
                                    </select>
                                </div>

                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.image" />: </label>
                                    <div className='preview-img-container'>
                                        <input id='previewImg' type='file' hidden
                                            onChange={(event) => this.handleOnchangeImage(event)}
                                        />
                                        <label className='label-upload' htmlFor="previewImg">Tải ảnh <i className='fas fa-upload'></i></label>
                                        <div className='preview-image'

                                            style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                            onClick={() => this.openPreviewImage()}
                                        >

                                        </div>

                                    </div>
                                </div>

                                <div className='col-12'>
                                    <button type='submit' className='btn btn-primary mt-3'
                                        onClick={() => this.handleSaveUser()}
                                    >
                                        < FormattedMessage id="manage-user.save" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImgURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        roleRedux: state.admin.roles,
        positionRedux: state.admin.positions,
        isLoadingGender: state.admin.isLoadingGender,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data))
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

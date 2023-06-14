import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { escape, escapeRegExp } from 'lodash';
import { LANGUAGES } from '../../../utils/constant';
import * as actions from '../../../store/actions';
import './UserRedux.scss'

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: ''
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
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux
            })
        }
    }

    handleOnchangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if(file) {
            let objectUrl = URL.createObjectURL(file);
            
            this.setState({
                previewImgURL: objectUrl
            })
            
            console.log('file: ', this.state.previewImgURL);
        }
    }

    render() {
        let genders = this.state.genderArr;
        let roles = this.state.roleArr;
        let positions = this.state.positionArr;
        let language = this.props.language;
        let isGetGenders = this.props.isLoadingGender;
        // console.log('check state: ', this.state);
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
                                        {roles && roles.length > 0 && roles.map((item, index) => {
                                            return (
                                                <option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label>< FormattedMessage id="manage-user.position" />: </label>
                                    <select className='form-control' >
                                        {positions && positions.length > 0 && positions.map((item, index) => {
                                            return (
                                                <option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
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
                                        >

                                        </div>

                                    </div>
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
        getRoleStart: () => dispatch(actions.fetchRoleStart())
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

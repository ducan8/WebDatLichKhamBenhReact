import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import {emitter } from '../../utils/emitter'
import _ from 'lodash';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
        // this.listenToEmitter();
    }

    // listenToEmitter(){
    //     emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
    //         this.setState({
    //             email: '',
    //             password: '',
    //             firstName: '',
    //             lastName: '',
    //             address: '',
    //         })
    //     })
    // }

    componentDidMount() {
        let { currentUser } = this.props;  //user = this.props.currentUser
        if (currentUser && !_.isEmpty(currentUser)) {
            this.setState({
                id: currentUser.id,
                email: currentUser.email,
                password: ' ',
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                address: currentUser.address,
            })
        }
        // console.log(this.props);
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChaneInput = (event, id) => {
        //modify gian tiep state
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });
        // console.log('event: ', this.state);

    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {

            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ', arrInput[i]);
                break;
            }

        }
        return isValid;
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid == true) {
            // goi API
            this.props.editUser(this.state);
        }
    }

    render() {
        // console.log('check child props', this.props);
        // console.log('check child open modal', this.props.isOpen);
        // console.log('props child: ', this.props);
        return (

            <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle() }} className='modal-user-container' size="lg">
                <ModalHeader toggle={() => { this.toggle() }}>Edit user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>

                        <div className='input-container'>
                            <label>Email</label>
                            <input type='email' className=''
                                onChange={(event) => { this.handleOnChaneInput(event, "email") }}
                                value={this.state.email}
                                disabled
                            />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password' className=''
                                onChange={(event) => { this.handleOnChaneInput(event, "password") }}
                                value={this.state.password}
                                disabled

                            />
                        </div>
                        <div className='input-container'>
                            <label>First Name</label>
                            <input type='text' className=''
                                onChange={(event) => { this.handleOnChaneInput(event, "firstName") }}
                                value={this.state.firstName}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Last Name</label>
                            <input type='text' className=''
                                onChange={(event) => { this.handleOnChaneInput(event, "lastName") }}
                                value={this.state.lastName}
                            />
                        </div>
                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input type='text' className=''
                                onChange={(event) => { this.handleOnChaneInput(event, "address") }}
                                value={this.state.address}
                            />
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => { this.handleSaveUser() }}>
                        Save Changes
                    </Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);


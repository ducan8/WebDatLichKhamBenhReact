import actionTypes from './actionTypes';
import { getAllcodeService, createNewUserService, getAllUsers,
     deleteUserService, editUserService, getTopDoctorHomeService, 
     getAllDoctors, saveDetailDoctorService, getAllSpecialty } from '../../services/userService';
import { toast } from 'react-toastify'

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START
            })

            let res = await getAllcodeService('GENDER');
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                // console.log('fail');
                dispatch(fetchGenderFailed());
            }
        } catch (error) {
            dispatch(fetchGenderFailed());
        }
    }

}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData,
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {

            let res = await getAllcodeService('POSITION');
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (error) {

            dispatch(fetchPositionFailed());
        }
    }

}

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {

            let res = await getAllcodeService('ROLE');
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (error) {
            dispatch(fetchRoleFailed());
        }
    }

}

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED,
})

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData,
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED,
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData,
})

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data) ;
            if (res && res.errCode === 0) {
                toast.success('Create a new user succeeded');
                dispatch(saveUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                dispatch(saveUserFailed());
            }
        } catch (error) {
            dispatch(saveUserFailed());
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})


export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {

            let res = await getAllUsers('ALL');
            let res1 = await getTopDoctorHomeService(3);
            // console.log('res1: ', res1);
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()));
            } else {
                toast.error('fetch all user error');
                
                dispatch(fetchAllUsersFailed());
            }
        } catch (error) {
            toast.error('fetch all user error');
            dispatch(fetchAllUsersFailed());
        }
    }

}

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})
export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED

})

export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId) ;
            if (res && res.errCode === 0) {
                toast.success('Delete the user succeeded');
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error('Delete the user failed');
                dispatch(deleteUserFailed());
            }
        } catch (error) {
            dispatch(deleteUserFailed());
        }
    }
}

export const deleteUserSuccess =  () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data) ;
            if (res && res.errCode === 0) {
                toast.success('Update the user succeeded');
                dispatch(editUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error('Update the user failed');
                dispatch(editUserFailed());
            }
        } catch (error) {
            toast.error('Update the user failed');
            dispatch(editUserFailed());
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED,
})

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('') ;
            // console.log('check res: ', res) ;
            if (res && res.errCode === 0) {
            //     toast.success('Update the user succeeded');
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data
                });
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
                });
            //     toast.error('Update the user failed');
            }
        } catch (error) {
            console.log('FETCH_TOP_DOCTORS_FAILED: ', error);
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
            });
            // toast.error('Update the user failed');
        }
    }
}
export const fetchAllDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors() ;
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDr: res.data
                });
                
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
                    
                });
            }
        } catch (error) {
            console.log('FETCH_ALL_DOCTORS_FAILED: ', error);
            dispatch({
                type: actionTypes.FETCH_ALLDOCTORS_FAILED,
            });
        }
    }
}

export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctorService(data) ;
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,

                });
                toast.success('Save information detail of doctor succeeded');

                
            } else {
                toast.error('Save information detail of doctor error');

                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
                    
                });
            }
        } catch (error) {
            toast.error('Save information detail of doctor error');

            console.log('FETCH_ALL_DOCTORS_FAILED: ', error);
            dispatch({
                type: actionTypes.FETCH_ALLDOCTORS_FAILED,
            });
        }
    }
}

export const fetchAllScheduleTime = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllcodeService('TIME') ;
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                    dataTime: res.data
                });
              
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
                    
                });
            }
        } catch (error) {
            console.log('FETCH_ALLCODE_SCHEDULE_TIME_FAILED: ', error);
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
            });
        }
    }
}

export const getRequiredDoctorInfor = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_START
            })

            let resPrice = await getAllcodeService('PRICE');
            let resPayment = await getAllcodeService('PAYMENT');
            let resProvince = await getAllcodeService('PROVINCE');
            let resSpecialty = await getAllSpecialty();
            if (resPrice && resPrice.errCode === 0 && 
                resPayment && resPayment.errCode === 0 &&
                resProvince && resProvince.errCode === 0 &&
                resSpecialty && resSpecialty.errCode === 0 ) {
                    let data = {
                        resPrice: resPrice.data,
                        resPayment: resPayment.data,
                        resProvince: resProvince.data,
                        resSpecialty: resSpecialty.data
                    }
                dispatch(fetchRequiredDoctorInforSuccess(data));
            } else {
                // console.log('fail');
                dispatch(fetchRequiredDoctorInforFailed());
            }
        } catch (error) {
            dispatch(fetchRequiredDoctorInforFailed());
        }
    }

}

export const fetchRequiredDoctorInforSuccess = (allRequiredData) => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS,
    data: allRequiredData,
})

export const fetchRequiredDoctorInforFailed = () => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAILED,
})
import actionTypes from './actionTypes';
import { getAllcodeService } from '../../services/userService';

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllcodeService('GENDER');
            if (res && res.errCode === 0) {
                console.log('check get state:', getState);
                dispatch(fetchGenderSuccess(res.data));
            } else {
                console.log('fail');
                dispatch(fetchGenderFailed());
            }
        } catch (error) {
            dispatch(fetchGenderFailed());
            console.log('check gender: ', error);
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



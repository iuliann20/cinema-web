import httpclient from '../utils/httpClient';
import { popUpAlert } from './alert';
import { toogleLoginModal } from './modal';

export const SET_IS_SIGNED_IN_STATE = 'SET_IS_SIGNED_IN_STATE';
export const SET_LOGIN_USER_DETAILS = 'SET_LOGIN_USER_DETAILS';

export const setIsSignedInState = isSignedInState => ({ type: SET_IS_SIGNED_IN_STATE, payload: isSignedInState });
export const setLoginUserDetails = loginUserDetails => ({ type: SET_LOGIN_USER_DETAILS, payload: loginUserDetails });


export const isSignedIn = () => async (dispatch) => {
    const url = '/account/IsUserLoggedIn';
    const response = await httpclient.get(url);

    const data = await response.json();

    if (response.ok) {
        dispatch(setIsSignedInState(data));
    }
}

export const loginByUsername = (loginUserDetails) => async (dispatch) => {
    const url = '/Account/Login';
    const response = await httpclient.post(url, loginUserDetails);

    document.cookie = `accessToken=${response.data.accessToken}; path=/`;
    if (response.ok) {
        dispatch(toogleLoginModal(false));
    } else {
        const data = await response.json();
        dispatch(popUpAlert('error', data.description, 3000));
    }
}
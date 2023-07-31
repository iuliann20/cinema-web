import Cookies from 'js-cookie';
import httpclient from '../utils/httpClient';
import { popUpAlert } from './alert';
import { toogleLoginModal } from './modal';
import { getCookie } from '../components/Common/Functions'

export const SET_IS_SIGNED_IN_STATE = 'SET_IS_SIGNED_IN_STATE';
export const SET_LOGIN_USER_DETAILS = 'SET_LOGIN_USER_DETAILS';

export const setIsSignedInState = isSignedInState => ({ type: SET_IS_SIGNED_IN_STATE, payload: isSignedInState });
export const setLoginUserDetails = loginUserDetails => ({ type: SET_LOGIN_USER_DETAILS, payload: loginUserDetails });


export const isSignedIn = () => async (dispatch) => {
    const url = '/account/IsUserLoggedIn';
    const jwtToken = getCookie('cinemaAuthenticationToken');
    debugger;
    const response = await httpclient.get(url, jwtToken);
    debugger;

    const data = await response.json();

    if (response.ok) {
        dispatch(setIsSignedInState(data));
    }
}

export const loginByUsername = (loginUserDetails) => async (dispatch) => {
    const url = '/Account/Login';
    const jwtToken = getCookie('cinemaAuthenticationToken');

    const response = await httpclient.post(url, loginUserDetails);
    const data = await response.json();

    if (response.ok) {
        dispatch(setIsSignedInState(true));
        setCookie('cinemaAuthenticationToken', data.jwtToken, 1);
        setCookie('cinemaAuthenticationRefreshToken', data.RefreshToken, 1);

        dispatch(toogleLoginModal(false));
    } else {
        dispatch(popUpAlert('error', data.description, 3000));
    }
}

export const logout = () => async (dispatch) => {
    removeCookie('cinemaAuthenticationToken');
    dispatch(setIsSignedInState(false));
}

const setCookie = (name, value, expirationDays) => {
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

const removeCookie = (name) => {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

import { SET_IS_SIGNED_IN_STATE, SET_LOGIN_USER_DETAILS } from '../actions/user'
export default function user(state, action) {
    state = state || {
        isSignedInState: false,
        loginUserDetails: {
            username: "",
            password: "",
            rememberMe : false
        }
    };

    switch (action.type) {
        case SET_IS_SIGNED_IN_STATE:
            return {
                ...state,
                isSignedInState: action.payload
            };
        case SET_LOGIN_USER_DETAILS:
            return {
                ...state,
                loginUserDetails: action.payload
            };
        default:
            return state;
    }
}

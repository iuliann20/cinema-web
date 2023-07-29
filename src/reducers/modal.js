import { TOOGLE_LOGIN_MODAL} from '../actions/modal';

export default function modal(state, action) {
    state = state || {
        showLoginModal: false,

    };

    switch (action.type) {
        case TOOGLE_LOGIN_MODAL:
            return {
                ...state,
                showLoginModal: !state.showLoginModal
            }
        
        default:
            return state;
    }
}

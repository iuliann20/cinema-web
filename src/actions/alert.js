export const ALERT_SHOW = 'ALERT_SHOW';
export const ALERT_HIDE = 'ALERT_HIDE';

// configuration object example */
// {
//   role: 'info' / 'success' / 'warning' / 'error' (default = 'info'),
//   title: 'title goes here...',
//   message: 'description goes here...',
//   duration: in miliseconds (default = 3000)
// }

export const showAlert = config => ({ type: ALERT_SHOW, payload: config });
export const hideAlert = () => ({ type: ALERT_HIDE });

export const popUpAlert = (role, message, duration = 2500) => async (dispatch) => {
    dispatch(showAlert({
        role: role,
        message: message,
        duration: duration
    }));
}

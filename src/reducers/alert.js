import {ALERT_SHOW,ALERT_HIDE} from '../actions/alert.js'

export default function alert(state,action){
    state=state||{
        show:false
    }

    switch (action.type)
    {
        case ALERT_HIDE:
            return {
                ...state,
                show:false
            }
        case ALERT_SHOW:
            return {
                show:true,
                role:action.payload.role,
                title:action.payload.tytle,
                message:action.payload.message,
                duration:action.payload.duration || 6000
            }
        default:
            return state;   
    }

}

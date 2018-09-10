import {LAYOUT_LOGIN, LAYOUT_LOGOUT} from "./LayoutAction";

export default (state = {isLogin:false}, action) => {

    switch (action.type) {
        case LAYOUT_LOGIN:
            return Object.assign({}, state, {
                isLogin: action.isLogin
            });
        case LAYOUT_LOGOUT:
            return Object.assign({}, state, {
                isLogin: action.isLogin
            });
        default :
            return state;
    }

}
export const LAYOUT_LOGIN = 'LAYOUT_LOGIN';
export const LAYOUT_LOGOUT = 'LAYOUT_LOGOUT';

export const login = (dispatch, action) => void dispatch({type: LAYOUT_LOGIN, ...action});

export const logout = (dispatch, action) => void dispatch({type: LAYOUT_LOGOUT, ...action});



import types from '../types/authTypes';
import services from '../services/authServices';

const doLogin = (data) => async (dispatch) => {
    try {
        dispatch({
            type: types.AUTH_START,
            payload: { loading: true }
        });
        //TODO

        const user = await services.login(data.name);

        /* VALIDAR BACKEND TOKEN */
        dispatch({
            type: types.AUTH_SUCCESS,
            payload: { user, loading: false }
        });
    } catch (error) {
        console.log('authAction', error);
    }
}

export default {
    doLogin
};
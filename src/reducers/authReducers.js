import authTypes from '../types/authTypes';

const initialData = {
    loading: false,
    user: {}
}

export default (state = initialData, { type, payload }) => {
    switch (type) {
        case authTypes.AUTH_START:
            return {
                ...state,
                loading: payload.loading
            }
        case authTypes.AUTH_SUCCESS:
            return {
                ...state,
                loading: payload.loading,
                user: payload.user
            }
        default:
            return state;
    }
}

import {
    REQUEST_LINK_PARTNER,
    SUCCESS_LINK_PARTNER,
    ERROR_LINK_PARTNER,
} from './actions.types';

const initialState = {
    loading: false,
    data: '',
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_LINK_PARTNER:
            return {
                ...state,
                loading: true
            };
        case SUCCESS_LINK_PARTNER: {
            debugger;
            return {
                ...state,
                loading: false,
                data: action.data
            };
        }
        case ERROR_LINK_PARTNER: {
            return {
                ...state,
                loading: false,
            };
        }
        default:
            return state;
    }
}

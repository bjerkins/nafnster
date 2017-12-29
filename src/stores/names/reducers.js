
import {
    RECEIVE_NAMES,
    CHANGE_NAME_TYPES,
    CHANGE_SURNAME,
} from './actions.types';

const initialState = {
    data: [],
    type: {
        query: 'male',
        value: true,
    },
    surname: '',
};

export function names(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_NAMES:
            return {
                ...state,
                data: [
                    ...action.names
                ],
            };
        case CHANGE_NAME_TYPES: {
            const value = action.value;
            return {
                ...state,
                type: {
                    value: value,
                    query: value === false ? 'female' : 'male',
                }
            }
        }
        case CHANGE_SURNAME:
            return {
                ...state,
                surname: action.surname,
            }
    default:
        return state;
    }
}


import {
    RECEIVE_NAMES,
    CHANGE_NAME_TYPES,
} from './actions.types';

const initialState = {
    data: [],
    type: {
        query: 'male',
        value: true,
    },
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
    default:
        return state
    }
}

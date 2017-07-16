
import { RECEIVE_NAMES } from './actions.types';

const initialState = {
    data: []
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
    default:
        return state
    }
}

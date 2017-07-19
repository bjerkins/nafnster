
import {
    REQUEST_NAMES,
    RECEIVE_NAMES,
    CHANGE_NAME_TYPES,
} from './actions.types';
import { firebaseUtils } from '../../utils/firebase';

export function requestNames() {
    return {
        type: REQUEST_NAMES,
    };
}

export function receiveNames(names) {
    return {
        type: RECEIVE_NAMES,
        names,
    };
}

export function getNames(type) {
    return dispatch => {
        dispatch(requestNames);

        firebaseUtils
            .getDatabase()
            .ref('names')
            .orderByChild('type')
            .equalTo(type)
            .on('value', snap => {
                let names = [];
                snap.forEach(child => {
                    names.push(child.key);
                });
                dispatch(receiveNames(names));
            });
    }
}

export function changeNameType(value) {
    return {
        type: CHANGE_NAME_TYPES,
        value,
    }
}


import {
    REQUEST_NAMES,
    RECEIVE_NAMES,
    REQUEST_LIKE_NAME,
    CHANGE_NAME_TYPES,
} from './actions.types';
import { firebaseUtils } from '../../utils/firebase';

const requestNames = () => ({ type: REQUEST_NAMES });
const receiveNames = names => ({ type: RECEIVE_NAMES, names });

export function getNames(type) {
    return dispatch => {
        dispatch(requestNames);

        firebaseUtils
            .getDatabase()
            .ref(`names/${type}`)
            .orderByChild('name')
            .limitToFirst(10)
            .on('value', snap => {
                let names = [];
                snap.forEach(child => {
                    names.push({
                        key: child.key,
                        ...child.val(),
                    });
                });
                dispatch(receiveNames(names));
            });
    }
}

const requestLikeName = name => ({ type: REQUEST_LIKE_NAME, name });
const successLikeName = name => ({ type: SUCCESS_LIKE_NAME, name });

export function likeName({ key }) {
    return dispatch => {
        dispatch(requestLikeName(key));

        const userUuid = firebaseUtils.getUuid();

        firebaseUtils
            .getDatabase()
            .ref(`users/${userUuid}/likes`)
            .push()
            .set(key);
    }
}

export function changeNameType(value) {
    return {
        type: CHANGE_NAME_TYPES,
        value,
    }
}

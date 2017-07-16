
import { REQUEST_NAMES, RECEIVE_NAMES } from './actions.types';
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

export function getNames() {
    return dispatch => {
        dispatch(requestNames);
        const namesRef = firebaseUtils.getDatabase().ref('names/male');

        namesRef.on('value', snap => {
            let names = [];
            snap.forEach(child => {
                names.push(child.key);
            });

            dispatch(receiveNames(names));
        });
    }
}

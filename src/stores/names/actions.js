
import { REQUEST_NAMES, RECEIVE_NAMES } from './actions.types';
import firebase from 'firebase';

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
    const namesRef = firebase.database().ref().child('names');
    return dispatch => {
        dispatch(requestNames);
        namesRef.on('value', snap => {
            debugger;
            const names = snap.map(child => ({
                name: child.val(),
                _key: child.key,
            }));

            dispatch(receiveNames);
        });
    }
}

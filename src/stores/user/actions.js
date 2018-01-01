import { FIREBASE_API_URL } from 'react-native-dotenv'

import {
    REQUEST_LINK_PARTNER,
    SUCCESS_LINK_PARTNER,
    ERROR_LINK_PARTNER,
} from './actions.types';


const requestLinkPartner = () => ({ type: REQUEST_LINK_PARTNER });
const successLinkPartner = data => ({ type: SUCCESS_LINK_PARTNER, data });

export const linkPartner = partnerId => dispatch => {
    dispatch(requestLinkPartner);
    return fetch(`${FIREBASE_API_URL}/helloWorld`)
        .then(response => response.text())
        .then(data => dispatch(successLinkPartner(data)));
}

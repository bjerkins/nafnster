import { StyleSheet } from 'react-native';

import { background, fontBold } from '../../theme/default';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        height: 245,
    },
    headerBackground: background,
    headerOval: {
        borderColor: '#E64A86',
        borderWidth: 5,
        borderRadius: 100,
        opacity: 0.5,
        height: 135,
        width: 135,
    },
    headerName: {
        ...fontBold,
        fontSize: 18,
        letterSpacing: 0.37,
        color: '#fff',
        marginTop: 8,
    },
});


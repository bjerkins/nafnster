import { StyleSheet } from 'react-native';
import { background } from '../../theme/default';

export default StyleSheet.create({
    background,
    container: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: 40,
        paddingRight: 40,
    },
    actions: {
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    actionButton: {
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 3,
        width: 58,
        height: 58,
        backgroundColor: 'transparent',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    }
});



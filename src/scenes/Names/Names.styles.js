import { StyleSheet } from 'react-native';

import { colors } from '../../theme/default';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.sceneBackgroundColor,
    },
    text: {
        color: 'white',
        margin: 50,
    },
});


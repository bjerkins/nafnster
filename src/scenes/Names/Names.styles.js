import { StyleSheet } from 'react-native';

import { colors } from '../../theme/default';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.sceneBackgroundColor,
        flex: 1,
        flexDirection: 'column'
    },
    deckContainer: {
        height: 100,
    },
    text: {
        textAlign: 'center',
        color: 'white',
        margin: 50,
    }
});


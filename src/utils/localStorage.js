import { AsyncStorage } from 'react-native';

export const getUser = async () => {
    try {
        const token = await AsyncStorage.getItem('@auth:token');
        const userId = await AsyncStorage.getItem('@auth:token');

        return token === null ? null : { token, userId };
    } catch (error) {
        console.error('error fetching token');
    }
}

export const setUser = async ({ userId, token }) => {
    try {
        await AsyncStorage.setItem('@auth:userId', userId);
        await AsyncStorage.setItem('@auth:token',  token);
    } catch (error) {
        console.error('error setting token');
    }
}

export const removeUser = async () => {
    try {
        await AsyncStorage.removeItem('@auth:token');
        await AsyncStorage.removeItem('@auth:userId');
    } catch (error) {
        console.error('error resetting token');
    }
}

import { AsyncStorage } from 'react-native';

export const getToken = async () => {
    try {
        return await AsyncStorage.getItem('@auth:token');
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

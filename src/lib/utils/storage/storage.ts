import AsyncStorage from '@react-native-async-storage/async-storage'

export enum AsyncStorageKeys {
    CustomerToken = 'customer_token',
}

// If a valid string is passed then only it is stored, else key is removed
const saveValue = async (
    key: string,
    value?: string | null,
): Promise<boolean> => {
    try {
        if (typeof value === 'string' && value !== '')
            await AsyncStorage.setItem(key, value)
         else
            await AsyncStorage.removeItem(key)

        return true
    } catch (e) {
        // saving error
        return false
    }
}

const loadValue = async (key: string): Promise<string | null> => {
    try {
        return await AsyncStorage.getItem(key)
    } catch (e) {
        // error reading value
        return null
    }
}

async function removeValue(key: string): Promise<void | null> {
    try {
        return await AsyncStorage.removeItem(key)
    } catch (exception) {
        return null
    }
}

export const saveCustomerToken = async (token?: string | null) =>
    saveValue(AsyncStorageKeys.CustomerToken, token)

export const loadCustomerToken = async () =>
    loadValue(AsyncStorageKeys.CustomerToken)

export const removeCustomerToken = async () =>
    removeValue(AsyncStorageKeys.CustomerToken)

import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

/**
 * Retrieves a string value from storage based on the provided key.
 *
 * @param {string} key - The key used to retrieve the string value.
 * @return {string | null} The retrieved string value, or null if an error occurs.
 */
export function loadString(key: string): string | null {
  try {
    return storage.getString(key);
  } catch {
    return null;
  }
}

/**
 * Saves a string value with the given key in storage.
 *
 * @param {string} key - The key for the value to be saved.
 * @param {string} value - The string value to be saved.
 * @return {boolean} Returns true if the string value was successfully saved, otherwise false.
 */
export function saveString(key: string, value: string): boolean {
  try {
    storage.set(key, value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Load the value associated with the given key from the storage.
 *
 * @param {string} key - The key to load the value for.
 * @return {any | null} The value associated with the key, or null if the key is not found.
 */
export function load(key: string): any | null {
  try {
    const almostThere = storage.getString(key);
    return JSON.parse(almostThere);
  } catch {
    return null;
  }
}

/**
 * Saves a value in local storage with the specified key.
 *
 * @param {string} key - The key to save the value under.
 * @param {any} value - The value to be saved.
 * @return {boolean} Returns true if the value was successfully saved, false otherwise.
 */
export function save(key: string, value: any): boolean {
  try {
    saveString(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/**
 * Removes a key from storage.
 *
 * @param {string} key - The key to be removed.
 * @return {void} This function does not return anything.
 */
export function remove(key: string): void {
  try {
    storage.delete(key);
  } catch {}
}

/**
 * Clear all data in the storage.
 *
 * @return {void} This function does not return a value.
 */
export function clear(): void {
  try {
    storage.clearAll();
  } catch {}
}

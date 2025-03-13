/**
 * Typesafe way of getting a key from an object dynamically
 * @param {Object} obj object to get the key from
 * @param key key to look for
 * @example
 * // will return 21
 * obj = { "name": "john", "age": 21 }
 * const value = getProperty(obj, "age");
 *
 */
export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

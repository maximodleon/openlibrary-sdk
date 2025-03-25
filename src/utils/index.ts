import { COVERS_BASE_URL } from '../constants/index.ts';

const sizes = ['S', 'M', 'L'];
const ids = ['ISBN', 'OCLC', 'LCCN', 'OLID', 'ID'];

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


/**
 * Get the cover url for a book
 * @param id id of the book
 * @param value value of the book
 * @param size size of the cover
 * @example
 * getBookCoverUrlFromId('ISBN', '0385472579', 'M');
 */
export function getBookCoverUrlFromId(id: string, value: string, size: string = 'S'): string {
   if (!ids.includes(id.toUpperCase())) {
     throw new Error(`invalid id ${id}`);
   }

   if (!sizes.includes(size.toUpperCase())) {
     throw new Error(`invalid size ${size}`);
   }

   return `${COVERS_BASE_URL}/b/${id}/${value}-${size}.jpg`;
}

/**
 * Get the cover url for an author
 * @param id id of the author
 * @param value value of the author
 * @param size size of the cover
 * @example
 * getAuthorPhotoUrlFromId('OLID', 'OL229501A', 'M');
 */
export function getAuthorPhotoUrlFromId(id: string, value: string, size: string = 'S'): string {
  const lowerCaseId = id.toLowerCase();
   if (lowerCaseId !== 'olid' && lowerCaseId !== 'id') {
     throw new Error(`invalid id ${id}`);
   }

   if (!sizes.includes(size.toUpperCase())) {
     throw new Error(`invalid size ${size}`);
   }

   return `${COVERS_BASE_URL}/a/${id}/${value}-${size}.jpg`;
}

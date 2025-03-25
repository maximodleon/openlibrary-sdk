import * as search from './src/index.ts';
import {  getBookCoverUrlFromId, getAuthorPhotoUrlFromId } from './src/utils/index.ts';

const result = await search.searchBook({ q: 'don quijote'});
const first = result.docs[0];

const book = getBookCoverUrlFromId('id', `${first.cover_i}`,  'M');
const authorImages = first.author_key.map(key => getAuthorPhotoUrlFromId('olid', key, 'M'));
console.log(`${JSON.stringify(first)}`);
console.log(`${book}`);
console.log(`${authorImages}`);

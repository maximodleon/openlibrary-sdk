import * as search from './src/index.ts';
import {  getBookCoverFromId, getAuthorPhoto } from './src/utils/index.ts';

const book = getBookCoverFromId('ISBN', '0385472579', 'M');
const author = getAuthorPhoto('olid', 'OL229501A', 'M');
console.log(`${book} ${author}`);

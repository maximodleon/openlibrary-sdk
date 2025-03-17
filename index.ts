import * as search from './src/index.ts'

const result = await search.searchIndividualAuthor('OL23919A');
console.log(`${JSON.stringify(result)}`);

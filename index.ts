import * as search from './src/index.ts'

const result = await search.searchBook({ q: 'don quijote'})
console.log(`got ${result.docs.length} results back`)

//.then((res) => console.log('res', res))

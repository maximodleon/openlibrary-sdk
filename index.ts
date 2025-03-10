import * as search from './src/index.ts'

search.getTitle({ q: 'don quijote'})
.then((res) => console.log('res', res))

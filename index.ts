import * as search from './src/index.ts'

search.getTitle({ q: 'the lord' })
.then(async res => await res.json())
.then((res) => console.log('res', res))

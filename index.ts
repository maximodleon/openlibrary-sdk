import * as search from './src/index.ts'

search.getTitle({ q: 'don quijote', fields: '*' })
.then(async res => await res.json())
.then((res) => console.log('res', res))

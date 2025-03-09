import * as search from './src/index.ts'

search.getTitle('The lord of the rings')
.then(async res => await res.json())
.then((res) => console.log('res', res))

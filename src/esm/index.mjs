import md5 from 'md5'

const before = 'Hello World'
const after = md5(before)
console.log({ before, after })
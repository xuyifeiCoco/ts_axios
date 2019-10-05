import axios from '../../src/index'
console.log(111111)
console.log(555)
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})

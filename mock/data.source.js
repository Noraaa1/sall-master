const {mock, Random} = require('mockjs');

const academicData = mock({
  "array|3": [
    {
      name: () => Random.ctitle(4),
      img: () => Random.image('120 * 120', `${Random.hex()}`),
      describe: () => Random.csentence(),
      title: () => Random.csentence(),
    }
  ]
})
console.log(academicData)

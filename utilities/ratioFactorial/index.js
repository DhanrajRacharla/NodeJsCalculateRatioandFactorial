const factNum = require('../factorial/index.js')
const ratioNum = require('../ratio/index.js')

const ratioAndFactorial = (a, b, c) => {
  const ratio = ratioNum(a, b)
  const factorial = factNum(c)

  return {ratio, factorial}
}

module.exports = ratioAndFactorial

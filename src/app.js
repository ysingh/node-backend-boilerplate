const fs = require('fs')
const sample = require('lodash.sample')

const wordFile = '/usr/share/dict/words'

module.exports = function(numWords, wordLength) {
  fs.readFile('/usr/share/dict/words', 'utf-8', async (err, data) => {
    if (err) {
      // always throw a new error instead of throwing strings
      throw new Error(`Error reading file: ${wordFile} : ${err}`)
    }
    const words = data.split('\n')
    const rWords = Array(numWords).fill().map(() => randomWord(words, wordLength))
    return await rWords
  })
}

function randomWord(wordList, wordLength, sep='-') {
  let str = ''
  while (wordLength--) {
    str += sep + sample(wordList).toLowerCase()
  }
  return str.substring(1, str.length)
}



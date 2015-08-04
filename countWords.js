function countWords(inputWords) {
  return inputWords.reduce(function (prevValue, elem){
    prevValue[elem] = elem in prevValue ? prevValue[elem] + 1 : 1
    return prevValue
  }, {})
}

module.exports = countWords


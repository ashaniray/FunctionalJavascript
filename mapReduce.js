module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function (prev, elem) {
    prev.push(fn(elem))
    return prev
  }, [])
}


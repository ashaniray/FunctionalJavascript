function reduce(arr, fn, initial) {
  return (function recurse(prev, index) {
    if (arr.length <= index) return prev
    prev = fn(prev, arr[index], index, arr);
    return recurse(prev, index+1);
  })(initial, 0)
}

module.exports = reduce


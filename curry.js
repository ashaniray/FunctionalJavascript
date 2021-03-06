function curryN(fn, n) {
  n = n || fn.length
  return function recurse(arg){
    if (n <= 1)
    {
      return fn(arg)
    }
    return curryN(fn.bind(this, arg), n - 1)
  }
}

module.exports = curryN


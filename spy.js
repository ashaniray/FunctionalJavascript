function Spy(target, method) {
  var result = {count : 0}
  var targetMethod = target[method]
  target[method] = function() {
    result.count++
    return targetMethod.apply(target, arguments)
  }
  return result
}

module.exports = Spy


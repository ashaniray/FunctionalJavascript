function repeat(operation, num) {
  // modify this so it can be interrupted
  setTimeout(function() {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  })
}

module.exports = repeat

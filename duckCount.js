function duckCount() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, elem) {
    return Object.prototype.hasOwnProperty.call(elem, 'quack') ? prev + 1 : prev
  }, 0);
}

module.exports = duckCount


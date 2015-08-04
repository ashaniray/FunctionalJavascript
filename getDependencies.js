function getDependencies(tree, list) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
  list = list || []
  Object.keys(tree).reduce(function(prev, key){
    prev.push(key)

    return prev
  }, list)
  return list
}

module.exports = getDependencies


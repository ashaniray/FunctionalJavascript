function loadUsers(userIds, load, done) {
  var users = []
  userIds.foreach(function(id) {
    load(id, function(user) {
      users.push(user)
      if (users.length === userIds.length)
        done(users)
    })
  })
  return users
}

module.exports = loadUsers


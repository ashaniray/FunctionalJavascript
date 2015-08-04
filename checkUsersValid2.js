function checkUsersValid(goodUsers) {
  var validUserIds = goodUsers.map(function(elem) {return elem.id})
  return function allUsersValid(submittedUsers) {
    return submittedUsers
      .map(function(user) {
        return user.id
      })
      .every(function isValid(id){
        return (validUserIds.indexOf(id) >= 0)
        //return true
      })
    }
  }
  
  module.exports = checkUsersValid


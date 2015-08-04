function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function (user){
        return goodUsers.some(function (origElem) {
          return user.id === origElem.id
        })
      })
    }
  }
  
  module.exports = checkUsersValid


function getShortMessages(messages) {
  return messages
    .map(function(arg){
      return arg.message
    })
    .filter(function(msg){
      return msg.length < 50
    })
}

module.exports = getShortMessages


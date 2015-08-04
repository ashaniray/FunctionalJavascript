function getShortMessages(messages) {
  return messages
    .filter(function(msg){
      return msg.message.length < 50
    })
    .map(function(arg){
      return arg.message
    })
}

module.exports = getShortMessages


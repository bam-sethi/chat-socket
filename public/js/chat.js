var socket = io('http://a2fce5e0.ngrok.io');

// console.log('hihi ambar');

// socket.on('connect', function(){
//   console.log('a user connected');
// });




$('#chat-form').on('submit', function(event){
  event.preventDefault();
  var messageContent = $('#message').val();
  var user = $('#user').val();
  console.log(messageContent, user);
  socket.emit('message', {content: messageContent, userName: user });
});



socket.on('message', function(message){
  console.log(message.content)
  html = '<li><span class=user-name> ' + message.userName +' > ' + '</span><span class="message-content">' + message.content + '</span><br></li>'
  $('#chatbox').append(html);
});





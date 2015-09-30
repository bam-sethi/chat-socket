var socket = io('http://b54f8157.ngrok.io');

// console.log('hihi ambar');

// socket.on('connect', function(){
//   console.log('a user connected');
// });




$('#chat-form').on('submit', function(event){
  event.preventDefault();
  var messageContent = $('#message').val();
  var user = $('#user').val();
  console.log(messageContent, user);
  socket.emit('message', { content: messageContent, userName: user });
});



socket.on('message', function(message){
  console.log(message.content)
  html = '<li>' + user.userName + '<li>' + message.content + '</li>'
  $('#chatbox').append(html);
});





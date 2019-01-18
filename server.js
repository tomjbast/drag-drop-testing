const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', function(client){

  client.on("redux-action", function(action) {
    client.broadcast.emit("redux-action", action)
  })


  // socket.on("redux-action", function(action) {dispatch(action)})

  client.on('drag', function(state){
    console.log("drag seen by backend", state);
    client.broadcast.emit('drag', state) //why does client.emit not work?
  });

});

io.listen(8000);

http.listen(8080, function(){
  console.log("listening on port 8080");
});

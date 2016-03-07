var net = require('net');

var server = net.createServer(function(socket){
  socket.end(formatDate());
});

function formatDate(){
  var rightNow = new Date();
  var dateArray = [rightNow.getFullYear(), (rightNow.getMonth() + 1).toString(), rightNow.getDate(), rightNow.getHours(), rightNow.getMinutes()];
  dateArray = dateArray.map(function(current){
    if (current.length < 2){
      return '0' + current;
    } else {
      return current;
    }
  });
  return dateArray[0] + '-' + dateArray[1] + '-' + dateArray[2] + ' ' + dateArray[3] + ':' + dateArray[4] + '\n';
};

var port = process.argv[2];
server.listen(port);

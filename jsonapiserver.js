var url = require('url');
var http = require('http');

function returnTimeObject(dateObj){
  var resultObj = {};
  resultObj.hour = dateObj.getHours();
  resultObj.minute = dateObj.getMinutes();
  resultObj.second = dateObj.getSeconds();
  return resultObj;
}

var server = http.createServer(function(request, response){
  if (request.method === 'GET'){
    var urlObj = url.parse(request.url, true);
    var isoTime = urlObj.query.iso;
    var thatDate = new Date(isoTime);
    if (urlObj.pathname === '/api/parsetime'){
      response.end(JSON.stringify(returnTimeObject(thatDate)));
    } else if (urlObj.pathname === '/api/unixtime'){
      response.end(JSON.stringify({unixtime: thatDate.getTime()}));
    }
  }
});

server.listen(process.argv[2]);

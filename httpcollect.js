var http = require('http');

var totCharNumber = 0;
var totalString = '';
http.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  response.on('data', function(data){
    totCharNumber += data.length;
    totalString += data;
  });
  response.on('end', function(end){
    console.log(totCharNumber);
    console.log(totalString);
  });
});

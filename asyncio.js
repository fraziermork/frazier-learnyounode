var fs = require('fs');
var path = process.argv[2];
var readFileAtPath = fs.readFile(path, 'utf8', readFileCallback);

function readFileCallback(err, data){
  if (!err){
    console.log(data.split('\n').length - 1);
  }
}

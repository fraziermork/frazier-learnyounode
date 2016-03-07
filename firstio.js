var fs = require('fs');
var path = process.argv[2];

var readFileAtPath = fs.readFileSync(path);

console.log(readFileAtPath.toString().split('\n').length - 1);

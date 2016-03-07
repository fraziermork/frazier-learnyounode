var fs = require('fs');
var path = require('path');
var extension = '.' + process.argv[3];
fs.readdir(process.argv[2], function(error, list){
  if (!error){
    list.forEach(function(current){
      if (path.extname(current) === extension){
        console.log(current);
      }
    });  
  }
});

var fs = require('fs');
var path = require('path');

module.exports = function(dirName, fileType, callback){
  var extension = '.' + fileType;
  fs.readdir(dirName, function(err, list){
    if (err){
      return callback(err);
    } else {
      var newData = list.filter(function(current){
        return path.extname(current) === extension;
      });
      return callback(null, newData);
    }
  });
};

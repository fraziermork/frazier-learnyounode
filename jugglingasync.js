var http = require('http');

var pathArray = [[process.argv[2], false , ''], [process.argv[3], false, ''], [process.argv[4], false, '']];

function checkIfComplete(){
  if(pathArray[0][1] && pathArray[1][1] && pathArray[2][1]){
    console.log(pathArray[0][2]);
    console.log(pathArray[1][2]);
    console.log(pathArray[2][2]);
  }
}

pathArray.forEach(function(current){
  http.get(current[0], function(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
      current[2] += data;
    });
    response.on('end', function(end){
      current[1] = true;
      checkIfComplete();
    });
  });
});

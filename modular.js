var myModule = require('./modularmodule.js');

myModule(process.argv[2], process.argv[3], myCallback);



function myCallback(err, data){
  if (!err){
    data.forEach(function(current){
      console.log(current);
    });
  }
}

var util = require("util");
var thinkingParser = require("./thinkingParser.js");

var str = '#ITgAY,#0,P1,214,07,b00,444,-47,#0,K1,300$,#3,B,4.70,1,1,1,1,0,-1$#4,T1,31.48,0$#4,H1,31.48,1890512.00,0$#4,LU,142.86,0$';

console.log(str);

thinkingParser.parse(str,
      function(err, data) {
         console.log(util.inspect(data, false, null))
      });

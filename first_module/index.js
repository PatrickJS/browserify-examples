var square = require('./square');
var _ = require('underscore');

console.log(square(125)); //=> 15626

_([1,2,3]).each(function(n) {
  console.log(n);
});

"use strict";

var arr = [23, 44, 12];

var myfunc = function myfunc(a) {
  console.log("too : ".concat(a));
};

var arr2 = [].concat(arr, [44, 1223]);
myfunc(arr2[1]);
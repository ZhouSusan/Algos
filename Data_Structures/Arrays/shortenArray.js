function shortenArray(arr) {
    var copyArr = arr.slice();
     return copyArr.filter(item => item);
  
  }
  
  var test1 = [1,2,3,4,,,,,];
  console.log("test 1: ", test1);
  var test2 = [, , , , "a", true, 4, 4];
  var test3 = [1, , 2, , 3, , 4];
  var test4 = [, , , , , , ,]
  
  console.log(shortenArray(test1)) //[1,2,3,4]
  console.log(shortenArray(test2)) //["a", true, 4, 4]
  console.log(shortenArray(test3)) //[1,2,3,4]
  console.log(shortenArray(test4));//[]
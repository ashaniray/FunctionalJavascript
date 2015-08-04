function f1(y){
  var x = y;
console.log("Beginning of f1", x);
  function f2() {
console.log("Beginning of f2", x);
    x = 3;
console.log("End of f2", x);
    return x;
  }
console.log("Inside of f1 after f2", x);
console.log("End of f1", x);
  return f2;
}

var foo = f1(2);
var y = foo();
var f1(100);
console.log(y);


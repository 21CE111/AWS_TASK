var lodash = require('lodash');

var obj = {
  name:"Rushit",
  age : 19,
  greet : function(){
    console.log("Hi i am ",this.name);
  }
}
// var obj2 = structuredClone(obj)
// console.log(obj2);

var obj3 = lodash.cloneDeep(obj)
// delete obj.greet
obj.name = "New Name!!"
obj3.greet()
obj.greet()
console.log(obj3)

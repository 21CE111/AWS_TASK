/*
 * Strict mode is a stricter variant of JavaScript that requires opting in.
 * It eliminates silent errors by throwing explicit errors instead.
 * Strict mode allows JavaScript engines to optimize code for better performance.
 * Strict mode can coexist with non-strict mode code.
 * To enable strict mode, add the directive "use strict"; at the beginning of the script or function.
 */

// Strict mode in functions
// function fun() {
//   // Function-level strict mode syntax
//   "use strict";
//   function nested() {
//     return "And so am I!";
//   }
//   return `Hi! I'm a strict mode function! ${nested()}`;
// }

// default parameters are not allowed
// SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
// function sum(a = 1, b = 2) {
//     "use strict";
//     return a + b;
// }

/**
 * Class declarations automatically enable strict mode within the class body.
 * The constructor function within a class is executed in strict mode by default.
 * When a class extends another class, the derived class inherits the strict mode behavior from its parent.
 * Enabling strict mode for classes promotes robust and error-free code by enforcing stricter rules and behaviors.
 */

// class C1 {
//   // All code here is evaluated in strict mode
//   test() {
//     delete Object.prototype;
//   }
// }
// // new C1().test(); // TypeError, because test() is in strict mode

// class C2 {
//   // All code here is evaluated in strict mode
// }

// // Code here may not be in strict mode
// delete Object.prototype; // Will not throw error

// cannot use variable without declaration
// helps in case of spelling mistake in variable name
// "use strict";
// let variable;
// varible = 17;

// "use strict";
// // TypeError: Cannot assign to read only property 'undefined' of object '#<Object>'
// undefined = 10;
// console.warn(undefined); // without strict mode output "undefined"

// "use strict";
// const object1 = {};
// Object.defineProperty(object1,"newProperty",{value:117 , writable:false})
// // without strict -> will not throw error but value also not changed
// object1.newProperty = 10
// console.log(object1.newProperty);

// "use strict";
// const object2 = {};
// object2.value = 10;
// Object.preventExtensions(object2);
// // without strict -> will not throw error and property is not added
// object2.newProperty = "some value";
// console.log(object2);

// "use strict";
// var x;
// delete x; // syntax error

// function sum(a, a, c) {
//   // syntax error
//     "use strict";
//   return a + a + c; // wrong if this code ran
// }

// console.log(sum(5, 3, 4));

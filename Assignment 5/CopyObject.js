const obj1 = {
  name: "Rushit",
  age: 19,
  address: {
    city: "Junagadh",
    country: "India",
  },
};

const Copy1 = { ...obj1 };
Copy1.age = 20
console.log("Original Object:", obj1);
console.log("Copy ", Copy1);

// using assign()
const Copy2 = Object.assign({}, obj1);
Copy2.name = "Abhi patel"
console.log("Original Object:", obj1);
console.log("Copy ", Copy2);

const Copy3 = Object.fromEntries(Object.entries(obj1));
console.log("Copy ", Copy3);

const shallowCopy4 = JSON.parse(JSON.stringify(obj1));
console.log("Shallow Copy (JSON):", shallowCopy4);


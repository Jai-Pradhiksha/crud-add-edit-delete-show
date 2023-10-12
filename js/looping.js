const fruits = ['apple', 'banana', 'cherry'];
console.log("Looping an Array : ")
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

const person = {
  name: 'John',
  age: 30,
  job: 'Developer'
};
console.log("Looping an Object : ")
for (let key in person) {
  console.log(key + ': ' + person[key]);
}

const students = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 28 }
];
console.log("Looping Array of Object using direct access of object properties : ")
for (let i = 0; i < students.length; i++) {
  console.log('Name:', students[i].name, 'Age:', students[i].age);
}

const books = [
  { title: 'Book 1', author: 'Author 1' },
  { title: 'Book 2', author: 'Author 2' }
];
console.log("Looping Array of Object using dynamic key names : ")
for (let i = 0; i < books.length; i++) {
  for (let key in books[i]) {
    console.log(key + ': ' + books[i][key]);
  }
}
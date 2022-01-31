//Two array given 
//Merging two array using spread operator and sorting the merged array on the basis of age.

let array = [
  {
    name: 'xyz',
    age: 10
  },
   {
    name: 'ert',
    age: 4
  },
    {
    name: 'mvm',
    age: 45
  },
   {
    name: 'rere',
    age: 56
  },
]
let arraytwo = [
  {
    name: 'fdcd',
    age: 32
  },
   {
    name: 'ter',
    age: 1
  },
    {
    name: 'fdfg',
    age: 3
  },
   {
    name: 'gfdgd',
    age: 15
  },
]
let arrayThree = [
...array,
...arraytwo
];
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);  //(b.age-a.age)for descending
}
sortByAge(arrayThree);
console.log(arrayThree);






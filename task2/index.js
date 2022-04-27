// function sortByCount(arr){
//     return arr
//   }

//   console.log(sortByCount(['apple','banana','peach','peach','grape','grape','apple','peach']))
// ['peach','peach','peach','apple','apple','grape','grape','banana']

let arr = [
  "apple",
  "banana",
  "peach",
  "peach",
  "grape",
  "grape",
  "apple",
  "peach",
];
let count = {};
let result = [];

for (let i = 0; i < arr.length; i++) {
  let isntNew = arr[i] in count;
  count[arr[i]] = isntNew ? ++count[arr[i]] : 1;
}

let countSorted = Object.entries(count).sort(
  ([, valA], [, valB]) => valB - valA
).flatMap(([a,b])=>Array.from({length:b},()=>a));

console.log(countSorted);


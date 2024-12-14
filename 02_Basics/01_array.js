
const arr = [0,1,2,3,4,5];

// console.log(arr[2])
// console.log(arr)

// slice and Splice


// slice - (not an manipulation)
//  is used to get a subset of the array

const sli = arr.slice(1,4);
// console.log(sli);
// console.log('Orignal Array after Slice')
// console.log(arr);





// splice - (Actual manipulation of the array)
// is used to add or remove elements from the array

const spli = arr.splice(0,3);
console.log(spli);
console.log('Orignal Array after Splice')
console.log(arr);

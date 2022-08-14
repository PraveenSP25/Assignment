// using set to remove duplicate element
 const num=[1,2,3,4,6,7,4,3,2,5]
 const remove=[...new Set(num)]
 console.log(remove)

// using array.from to remove duplicate element
const number=[1,2,3,4,6,7,4,3,2,5]
const removeduplicate=Array.from(new Set(number))
console.log(removeduplicate)


let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, undefined]
let odd = 0
let even = 0
let zero = 0

for (let i = 0; i < numberArr.length; i++) {

if (numberArr[i] === undefined) {
	zero++
} else if (numberArr[i] === null) {
	zero++
} else 	if (numberArr[i] % 2) {
  	odd++
  } else {
  	even++
  } 
}

console.log(zero)
console.log(odd)
console.log(even)
const arr = ["hello", 1, 100, false, 3, true, "string"];
console.log("количество элементов массива: " + arr.length)
arr.forEach(function(item, index, array) {
  console.log(item)
})
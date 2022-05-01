let x;
x = prompt("Введите значение:")
if (Number(x) == x) {
  console.log(x + "- число")
} else if (x == "false") {
  console.log(x + "- логистический тип")
} if (x == "true") {
  console.log(x + "- логистический тип")
} else if (isNaN (Number(x))) {
  console.log(x + "- строка")
} 
let x;
x = prompt("Вводите число:");
x = +x;
if (isNaN(x)) {
  console.log("Упс, кажется, вы ошиблись")
} else if (x % 2) {
  console.log("Нечётное число")
} else {
  console.log("Чётное число")
} 
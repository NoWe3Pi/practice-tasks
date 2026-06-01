// Уровень 1.1
// №1
let n = 10;
if (n < 0) {
  console.log("Число отрицательное");
} else if (n == 0) {
  console.log("Ноль");
} else {
  console.log("Число положительное");
}

// №2
let s = "string";
console.log(s.length);

// №3
console.log(s.at(-1));

// №4
if (n % 2 === 0) {
  console.log("Число четное");
}
// №5
let q = "squotes";
if (s && q && s[0].toLowerCase().startsWith(q[0].toLocaleLowerCase())) {
  console.log("Совпадение");
}

// Уровень 1.2
// №1
let num = 6534;
let textNum = String(num);
console.log(Number(textNum[0]));

// №2
// let bt = num % 10;
// console.log(bt);
console.log(Number(textNum.at(-1)) + 1);

// №3
//Стал добавлять унарный +, для превращения строки в число
console.log(+textNum.at(-1) + +textNum.at(0));
// №4
console.log(textNum.length + 1);
// №5
let bum = 645;
let textBum = String(bum);

if (textNum[0].startsWith(textBum[0])) {
  console.log("Первые цифры совпадают", textNum[0], textBum[0], textBum + 5 );
}

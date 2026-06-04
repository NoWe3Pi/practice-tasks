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
  console.log("Первые цифры совпадают", textNum[0], textBum[0], textBum + 5);
}

// Уровень 1.3
// №1
let str = "Два";
if (str.length > 1) {
  // console.log(str[str.length - 2]);
  console.log(str.at(-2));
}
// №2
let w = 24;
let r = 12;
if (w % r === 0) {
  console.log("Первое число делится на второе без остатка");
}
// Уровень 1.4
// №1
//ВЫВОД циклов комментирую, чтобы не мешало
for (let i = 1; i < 101; i++) {
  // console.log(i);
}

// №2
for (let i = -100; i <= 0; i++) {
  // console.log(i);
}
// №3
for (let i = 100; i >= 1; i--) {
  // console.log(i);
}
// №4
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}
// №5
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
// Уровень 1.5
// №1
let b = 0;
for (let i = 0; i <= 100; i++) {
  b += i;
}
console.log(b);
// №2
let d = 0;
for (let i = 0; i <= 100; i += 2) {
  d += i;
}
console.log(d);
// №3

// №4
// №5

///Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
let bur = [3, -4, 5, -10, 8, 7];
let result = bur.reduce((acc, curr) => (curr > 0 ? acc + curr : acc), 0);
console.log(result);

// Уровень 1.6
// №1
console.log("abcde".split(""));
// №2

console.log([...String(12345)].map(Number));
//№3

console.log(typeof Number([...String(12345)].reverse().join("")));
console.log(typeof +[...String(12345)].reverse().join(""));

// Этот код написан безупречно. Он выполняет всю цепочку преобразований в одну строку, не оставляя в памяти лишних переменных, и выводит в консоль "number".
// Вы отлично освоили метод-чейнинг (цепочки методов).Можно сделать этот код еще на 5 символов короче,
// если заменить Number(...) на унарный плюс +, о котором мы говорили ранее:javascriptconsole.log(typeof +[...String(12345)].reverse().join(""));

// dds = [...String(25468)].filter((r) => r % 2 === 0).map(Number);
// console.log(dds);
// ыаввввввввввввввввввввввввввввввввввввввв
// ыаввввввввввввввввввввввввввввввввввввввв
// ыаввввввввввввввввввввввввввввввввввввввв
// ыаввввввввввввввввввввввввввввввввввввввв
// ыаввввввввввввввввввввввввввввввввввввввв
// // Вычитание (-): '10' - 2 даст число 8.Умножение (*): '5' * '3' даст число 15.Деление (/): '12' / 4 даст число 3.Остаток от деления (%): '5' % 2 даст число 1 (как было в вашем коде).Возведение в степень (**): '2' ** 3 даст число 8.2. Инкремент и декремент (увеличение/уменьшение на 1)Операторы ++ и -- тоже превращают строку в число:javascriptlet str = '5';
// // str++; // str станет числом 6
// ыаввввввввввввввввввввввввввввввввввввввв
// ыаввввввввввввввввввввввввввввввввввввввв
// ыаввввввввввввввввввввввввввввввввввввввв
// ыаввввввввввввввввввввввввввввввввввввввв

//№4

let numbb = 12345;

console.log([...String(numbb)].reduce((acc, curr) => acc + +curr, 0));

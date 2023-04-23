# Уроки 1-15 - welcome + strings

Расположение < script > < / script > следует делать перед < /body >

```html
<body>

<script src="sandbox.js"></script> <script></body>

</body>
```

Задаём значение переменной и вызываем её значение в консоль:

```js
let age = 250;

console.log(age);

age = 30; // - задаем новое значение переменной age ( без let )

const points = 100; // - неизменяемая переменная
```

## Типы данных:

<image src="consp_images/data_types.png" alt="Описание картинки" width="40%">

String concatenation ( string сцепление ) :

```js
let FirstName = "Maksim";
let LastName = "Muratov";

let FullName = FirstName + " " + LastName;

console.log(FullName);
```

Getting characters ( получение первой буквы из string ) property:

```js
console.log(FullName[0]);
```

String length – определяет длину string - propertyЖ

```js
console.log(FullName.length);
```

String Method – со скобками в конце () так как это не пропорция как выше

```js
console.log(FullName.toUpperCase());
```

Можно задать значение в переменную : ( они не поменяют изначальную перменную )

```js
let result = FullName.toLowerCase();
console.log(result);
```

Ищет определенное значение в перменной: и выдает его позицию порядковую

```js
let index = FullName.indexOf("@");
```

Ищет последнюю ‘v’ в заданной переменной – и выдает позцию

```js
let result2 = FullName.lastIndexOf("v");
```

Выдает заданный слайс из переменной:

```js
let result2 = FullName.slice("0", "6");
```

Тоже самое что и выше. Только первая цифра задает. С какой буквы начнется поиск:

```js
let result2 = FullName.substr(4, 6);
```

Заменяет первое значение заданное на что то другое:

```js
let result2 = FullName.replace("M", "W");
```

# Урок - Numbers

Numbers - Это любые числовые выражения. 1, 100, 3.14 и т.д

```js
let radius = 10;
const pi = 3.14;
```

Math operators +, -, \*, /, \*\*, %

```js
console.log(10 / 2 );

let likes = 10;
likes = likes+1;
likes++; --;					     	 // +1 -1
likes += 10; -=10; *=10; /=10; 		 // + - * / на 10
```

NaN – not A number – если числовая переменная имеет не цифровое значение:

```js
console.log(10 - "hello") - NaN;
```

String может содерожать в себе – числовое выражение внутри:

```js
let result = "i have a " + likes + " slice of space";
```

# Урок - Template strings ( template literal )

## CONCETINATION WAY

Огромный стринг. Включает в себя несколько переменных и простой текст

```js
let result =
  "The blog called " +
  title +
  " by author " +
  author +
  " has " +
  likes +
  " likes";
```

## Template string way

Выглядит меньше.
Перменная помещается в ${} внутри `` .  кнопка ё

```js
let result = `The blog called ${title} by author ${author} has ${likes} likes`;
```

## HTML template

используются HTML теги

```js
let result = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>has ${likes} likes</span>
    `;
```

# Урок - Arrays

Пример Array ( массива )

```js
let drugs = ["kek", "lol", "arbidol"];
let drugs = [5, 10, 20, 30, 40];
let drugs = ["kek", "lol", 30, 40];

console.log(drugs);
```

Так можно выделить необходимое значение из массива:

```js
console.log(drugs[1]);
```

Изменить значение внутри аррая: ( в [] то что меняем )

```js
drugs[1] = "privet";
```

## Array methods

### Делает между ними определенное добавление, заключенное в (‘ ‘) проблем между словами в массиве

```js
let result = drugs.join(" ");
```

### Определит местоположение keka

```js
let result = drugs.indexOf("kek");
```

### добавялет в массив drugs – следующие элементы

НО В ОРИГИНАЛЬНЫЙ МАССИВ DRUGS – ОН НЕ ВХОДЯТ

```js
let result = drugs.concat(["topek", "shnopek"]);
```

### А этот метод впихивает новое значение в оригинальный массив

```js
let result = drugs.push("topek");
console.log(drugs);
```

Метод pop удаляет последний элемент из массива. При этом исходный массив изменяется, а результатом метода возвращается удаленный элемент.

# Урок - null and undifiend

## undefined - примитивный тип данных который присваивается переменным как только они были объявлены.

Также присваивается аргументам функции которые не были переданы и возвращается из функций внутри которых отсутствует 'return value' или присутствует 'return' без значения.

## null - примитивный тип данных, обычно представляет собой отсутствие какого либо значения в объекте.

---

null является определенным значением отсутствия объекта или отсутствия значения для которого внутри объекта определен ключ.

undefined обозначает неопределенность, а именно то что контейнер был создан но его значение не определили или свойство не было определено вовсе.

# Урок - Boolean

## True – правда

## False – ложь

Метод .includes(‘@’) – проверяет наличие @ в стринге email

```js
let email = "speeeed52x@ya.ru";

let result = email.includes("@");

console.log(result); // выдаст true
```

В данном примере происходит сравнений переменной с чем либо

```js
let age = 25;
console.log(age == 25); //true
console.log(age == 30); //false
console.log(age != 30); //true
console.log(age > 20); //true
console.log(age < 20); //false
console.log(age <= 25); //true
console.log(age >= 25); //true
```

Маленька буква > Большой буквы
S > C – по местоположению в алфавите

```js
let name = shaun;
console.log(name == "shaun"); //true
console.log(name == "Shaun"); //false
console.log(name > "crystal"); //true
console.log(name > "Shaun"); //false
console.log(name < "Crystal"); //false
```

# Урок 16 - Loose vs Strict Comparison

Loose comparion – свободное сравнение

```js
let age = 25;
console.log(age == 25); //true
console.log(age == "25"); //true
console.log(age != 25); //false
console.log(age != "25"); //false
```

strict comparison – строгое сравнение

Значение должно быть тем же типом

```js
let age = 25;
console.log(age === 25); //true
console.log(age === "25"); //false
console.log(age !== 25); //false
console.log(age !== "25"); //true
```

# Урок 17 - 017 Type Conversion ( Преобразование типа )

## Превращение переменной score – из стринга в намбер:

```js
let score = "100";

score = Number(score);
console.log(score + 1);
```

## Превращение инта в намбер + проверка типа:

```js
let result = String(100);

console.log(result, typeof result);
```

## Booleans:

```js
let val = Boolean(0); // нулевой булиан равен false

let val2 = Boolean(1); // if let ≠ 0 -> будет true

let val3 = Boolean(""); // Если стринговый булин не пустой - true, пуст false
```

# Уроки 18+19 Control Flow + For Loops

## Контроль потока:

**Каждая итерация проходит через один цикл**

```js
// Simple Loop ( цикл )

for (let i = 0; i < 5; i++) {
  console.log("in loop:", i);
}
```

For (Задаем значение I; ставим условие; что будет происходить) {}
For(initialization; Condition; final expression)

## Loop with Array

```js
const names = ["Max", "Rax", "Tax"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
```

В данном случае перебирается массив равный его длине .length до тех пор пока он не исчерпается

## Loop with Template String:

```js
for (let i = 0; i < names.length; i++) {
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}
```

# Уроки 20-21 While Loops

## пример While loop:

```js
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

// Задаем значение переменной i = 4

// делаем do ни смотря ни на что

// затем идет проверка условия в while

// Если условие false - цикл прерывается. Но значение в DO - будет произведено

```js
// 021 Somre more aboout While Loops

// do while loops

let i = 5;

do {
  console.log(i);
  i++;
} while (i < 5);
console.log(i);
```

# Уроки 22,23,24 If, Else Statements. Logical Operators

## Conditional statements- Условные операторы

Пару примеров применения условных операторов:

```js
const password = "pass";

if (password.length >= 8) {
  console.log("nice password,bruh");
}
```

```js
if (password.length >= 12) {
  console.log("nice password,bruh");
} else if (password.length >= 8) {
  console.log("normal password,bruh");
} else {
  console.log("lame pass, bruh");
}
```

## Логические операторы:

- || (ИЛИ)
- && (И)

Примеры:

```js
const password = "p@sse";

if (password.length >= 12) {
  console.log("nice password,bruh");
} else if (
  password.length >= 8 ||
  (password.includes("@") && password.length >= 5)
) {
  console.log("normal password,bruh");
} else {
  console.log("lame pass, bruh");
}
```

# Урок 25 Logical NOT ( логический оператор НЕТ )

## Логический оператор НЕ ( ! ) (логическое отрицание) меняет логическое значение операнда с истины в ложь и наоборот. Обычно он используется с булевыми (логическими) значениями.

---

Знак ! перед переменной - > реверсирует её значение

---

Из true – в false

Из false - в true

---

```js
let user = false;

if (!user) {
  console.log("you must be loggen in to continue");
}

// its works also:

let uzer = true;

if (uzer) {
  console.log("you must be loggen in to continue too");
}

if (uzer) {
} // means что если user = true, то происходит след. действия
```

# Урок 26 break and continue

## Continue – пропускает данное значение

## Break – выводит данное значение



```js
const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }

  console.log("your score: ", scores[i]);

  if (scores[i] === 100) {
    console.log("congrats, you got the top score!");
    break;
  }
}
```

# Урок 27 Switch Statements

## Инструкция switch сравнивает выражение со случаями, перечисленными внутри неё, а затем выполняет соответствующие инструкции.

```js
const grade = "A";

switch (grade) {
  case "A":
    console.log("you got an A!");
    break;
  case "B":
    console.log("you got an B!");
    break;
  case "C":
    console.log("you got an C!");
    break;
  case "D":
    console.log("you got an D!");
    break;
  case "E":
    console.log("you got an E!");
    break;
  default:
    console.log("not a vaild grade");
}
```

- происходит strict comparison ( строгое сравнени, === )

- case A = будет сравниваться строго, включая тип переменных
  
# Урок 28 - Variables & Block Scope

## Областью видимости в JavaScript называют часть программы, в пределах которой компьютер видит набор всех созданных переменных, функций и других данных, и может к ним обратиться. Базово разделить область видимости можно на глобальную и локальную.

---

## Глобальная область видимости или Global Scope

- В JavaScript есть только одна глобальная область. Область за пределами всех функций считается глобальной областью, и переменные, определенные в глобальной области, могут быть доступны и изменены в любых других областях.

## Локальная область видимости или Local Scope

- Переменные, объявленные внутри функций, становятся локальными для функции и рассматриваются в соответствующей локальной области. Каждая функция имеет свою область видимости. Одна и та же переменная может использоваться в разных функциях, поскольку они связаны с соответствующими функциями и не являются взаимно видимыми.

```js
const age = 30;

if(true){
    const age = 40;
    const name = 'Max';
    console.log('inside 1st code block: ', age, name);

    if(true){
        const age = 50;
        console.log('inside 2nd code block: ', age);
        var test = 'hello'; // var видно во всем пространстве
    }
}

console.log('Outsude code block: ', age, name, test)

```
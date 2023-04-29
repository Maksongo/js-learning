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

if (true) {
  const age = 40;
  const name = "Max";
  console.log("inside 1st code block: ", age, name);

  if (true) {
    const age = 50;
    console.log("inside 2nd code block: ", age);
    var test = "hello"; // var видно во всем пространстве
  }
}

console.log("Outsude code block: ", age, name, test);
```

# Урок 29,30 - Functions | Function Declarations & Expressions

## Функции это:

Зачастую нам надо повторять одно и то же действие во многих частях программы.

Например, необходимо красиво вывести сообщение при приветствии посетителя, при выходе посетителя с сайта, ещё где-нибудь.
Чтобы не повторять один и тот же код во многих местах, придуманы функции. Функции являются основными «строительными блоками» программы.

```js
// function declaration

function greet() {
  console.log("hello there");
}

// function expression

const speak = function () {
  console.log("good day!");
};

// greet();
// greet();
// greet();

speak();
speak();
speak();
```

Function declaration – может быть в любом порядке ( hoisting ) функцию вызвать можно в любом месте

Function expression – функция должна быть объявлена исключительно до того, как мы ее будет вызывать

# Урок 31 - Arguments & Parameters

- Параметр – это переменная, указанная в круглых скобках в объявлении функции.

- Аргумент – это значение, которое передаётся функции при её вызове.

Пару примеров:

```js
const speak = function (name = "luigi", time = "night") {
  console.log(`good ${time} ${name}`);
};

speak();
speak("shaun");
```

```js
speak('shaun'); - это агрумент

const speak = function(name = 'luigi', time = 'night') – а эт параметры внутри ()
```

# Урок 86,87 What is Asynchronous JavaScript

Выполнение JS-кода — однопоточное. Это значит, что в конкретный момент времени движок может выполнять не более одной строки кода. То есть вторая строка не будет выполнена, пока не выполнится первая.

Такое выполнение кода (строка за строкой) называется синхронным.

<image src="consp_images/async_js.png" alt="Описание картинки" width="40%">

Асинхронность — основной инструмент, который обрабатывает запросы параллельно с загрузкой веб-страницы.

- Весь код выполняется последовательно. И тут стартует асинхронная функция, которая выполняется отдельно, выносится за общий scope. А затем возвращается в - необходиый нам момент с помощью коллбека.
- Это позволяет продолжить выполнение остального синхронного кода, не блокируя его

```js
console.log(1);
console.log(2);

setTimeout(() => {
  console.log("callback function fired");
}, 2000);

console.log(3);
console.log(4);
```

Данный код - выведет надпись 'callback function fired' - спустя 2 секунды, не блокируя при этом выполнение консоль лога 3 и 4.

# Урок 88 - 088 What are HTTP Requests

- Запросы (HTTP Requests) — сообщения, которые отправляются клиентом на сервер, чтобы вызвать выполнение некоторых действий. Зачастую для получения доступа к определенному ресурсу. Основой запроса является HTTP-заголовок.

- Ответы (HTTP Responses) — сообщения, которые сервер отправляет в ответ на клиентский запрос.

Пример запроса:

```js
https://jsonplaceholder.typicode.com/todos/1
```

Пример ответа:

```js
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

# Урок 89 - Making HTTP reqs

## Создаем REQUEST

```js
const request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();

// Методы:
// request.open('ТИП ЗАПРОСА', 'Куда делать запрос')
// request.send(); - отправить запрос
```

Статусы запроса:

<image src="consp_images/req_stts.png" alt="Описание картинки" width="70%">

Данный код:

- проверит стадию реквеста и выведит ее ( стадии выше на скрине )
- когда стадия будет = 4, выведит весь массив данных в коносль
- данный масив данных называется - JSON

```js
request.addEventListener("readystatechange", () => {
  //console.log(request, request.readyState)
  if (request.readyState === 4) {
    console.log(request.responseText);
  }
});
```

# Урок 90 - Response status

Информация обо всех статусах HTTP req. statuses:

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
- https://developer.mozilla.org/ru/docs/Web/HTTP/Status

Необходимые сейчас

- 200 - "Успешно". Запрос успешно обработан. Что значит "успешно", зависит от метода HTTP, который был запрошен
- 404 - "Не найден". Сервер не может найти запрашиваемый ресурс. Код этого ответа, наверно, самый известный из-за частоты его появления в вебе.

```js
request.addEventListener("readystatechange", () => {
  //console.log(request, request.readyState)
  if (request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText);
  } else if (request.readyState === 4) {
    console.log("could not fetch the data");
  }
});
```

Данный код - проверяет статус запроса

- Если статус = 4 ( получен ) и не имеет ошибок - выведится весь JSON
- Если статус = 4, без статуса 200 - тогда выдаст ошибку

# Урок 91 - CallBack Functions

Пример использования коллбека асинхронного, выполняющего функцию гет реквеста, с последующим выводом данных в консоль

```js
const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback("coud not fetch data", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.send();
};

getTodos((err, data) => {
  console.log("callback fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
```

# Урок 92 - JSON data

## JSON ( javascript object notation ) - это лишь стринг, а не как может показаться - много объектов

- Этим действием мы превращаем JSON в объект ( массив объектов ):

```js
const data = JSON.parse(request.responseText);
```

Файлы формата .JSON - сразу представляют из себя формат массива, и имеет упрощенный синтексис

```json
[{ "text": "play mariokart", "author": "Max", "points": 50, "win": true }]
```

Пример JSON с несколькими объекатами:

```json
[
  { "text": "play mariokart", "author": "Max" },
  { "text": "buy some bread", "author": "Kekir" },
  { "text": "do the plumming", "author": "Loler" }
]
```

По сути, это способ передачи данных между сервером и клиентом.

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

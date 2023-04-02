# Урок 1 - welcome + strings

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

# Урок 2 - Numbers

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
let result = 'i have a ' + likes + ' slice of space'
```
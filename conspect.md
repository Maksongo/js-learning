# Урок 1

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
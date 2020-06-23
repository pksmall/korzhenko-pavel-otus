# otus-js

## browser-1

### getPath - поиск уникального селектора

Написать алгоритм и функцию `getPath()`, находяющую уникальный css-селектор для элемента в документе.
Уникальный селектор может быть использован `document.querySelector()` и возвращать исходный элемент.
Так чтобы `document.querySelectorAll()`, вызванный с этим селектором, не должен находить никаких элементов, кроме исходного.

```javascript
$0 // HTMLElement
getPath($0) // => "body div.someclass ul li:first-child"
```

Ипользуется проект на `node` c `express`.

Клонируем и устанавливаем зависемости:
```bash
npm install
```

Запускаем:
```bash
node bin/www
```

Идем броузером на http://localhost:3000/ и смотрим в консоль на выполенения функции `getPath`.
Сам файл лежит в `public/javascripts/getpath.js`.

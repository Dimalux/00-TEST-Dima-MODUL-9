import { nanoid } from 'nanoid'


console.log(nanoid());

// 1) запускаємо проект :
// npm run dev

// 2) Для того щоб використовувати пакет "nanoid" потрібно в фалі "*.js" (наприклад в фалі main.js) спочатку потрібно його імпортувати :

// import { nanoid } from 'nanoid'    -   імпорт м/б на самій горі файлу main.js
// console.log(nanoid());   //   в консолі при кожному перезавантаженні сторінки пакет "nanoid" буде генерувати випадкові ID-ки




// ПОЯСНЕННЯ-20    npm ПАКЕТИ  (01:30:20 / 01:31:20)   (дивись рядок 1521 в файлі  "main Test.js")

// import { nanoid } from 'nanoid'

// console.log(nanoid());

// 1) запускаємо проект :
// npm run dev

// 2) Для того щоб використовувати пакет "nanoid" потрібно в фалі "*.js" (наприклад в фалі main.js) спочатку потрібно його імпортувати :

// import { nanoid } from 'nanoid'    -   імпорт м/б на самій горі файлу main.js
// console.log(nanoid());   //   в консолі при кожному перезавантаженні сторінки пакет "nanoid" буде генерувати випадкові ID-ки

//..................

// ПОЯСНЕННЯ-21 :

import sum from "./helpers/helpers"

console.log(sum(15, 25));    //     40

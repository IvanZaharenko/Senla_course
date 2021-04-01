# Решенные задачи

### Содержание: 
* [Переменные](#переменные)
* [Строки](#строки)
* [Числа](#числа)
* [Объекты](#объекты)
* [Выражения и операторы. Преобразование типов.](#выражения-и-операторы-преобразование-типов)
* [Циклы](#циклы)
* [Массивы](#массивы)
* [Функции](#функции)
* [Доступ к DOM](доступ-к-DOM])

  
## Переменные 
####  Название для переменных, которые описывают (let, const)
``` javascript
//имя (постоянное)
const firstName = "Денис";

//фамилия (постоянное)
const lastName = "Иванов";

//возраст (может изменяться)
let userAge = 18;

//информация о пользователе ( может изменяться)
let userInfo = {
    email: "xxx@gmail.com",
    city: "London",
    skills: ["HTML", "CSS", "js"]
};                  
```
#### Что будет в консоле и почему:
```javascript
console.log(test);
var test = 'string';
/* undefined - т.к. это var, на момент вызова консоли, переменная была 
 объявленна(она всплыла) но она не имела значения.*/

var x = 'string';
var x = 'string 2';
console.log(x);
// 'string 2' - вызывает измененный Х.

console.log(test);
let test = 'string';
/* Ошибка - т.к. это let, на момент вызова консоли, переменной не существовало(она 
 не всплыла как var)*/

const  x = 'string';
const  x = 'string 2';
console.log(x);
/* Ошибка - т.к. это const, при попытки перезаписи выдаст ошибку*/

let num = 12;
let num = 1;
console.log(num)
/* Ошибка - т.к. это let, у него строгие правила объявления переменных. на 2ой строчке
была объявленна переменная с уже существующим именем*/

```
[Вернуться к содержанию](#содержание)

## Строки
```javascript
let string = 'string test example'
```
* Получить первую и последнюю букву строки
```javascript
console.log( string[0] + " " + string[string.length - 1]);
```
* Сделать первую и последнюю буквы в верхнем регистре
```javascript
string = string[0].toLocaleUpperCase() + string.slice(1,string.length - 2) + 
         string[string.length - 1].toLocaleUpperCase();

```
* Найти положение слова string в строке
```javascript
console.log(string.indexOf('string'));
```
* Найти положение второго пробела
```javascript
console.log(string.indexOf(' ', string.indexOf(' ') + 1));
```
* Получить строку со 2-ого символа длинной 6 букв
```javascript
console.log(string.slice(1,7));
```
* Получить строку с 1 по 7 символ
```javascript
console.log(string.slice(0,8)); 
```
* Получить из 2ух переменных типа number x = 20, y = 21 получить строку '2021' 
```javascript
console.log( String(x) + String(y) );
```

## Числа

* Получить число Pi  из Math и округлить его до двух знаков после точки
```javascript
console.log(Math.floor(Math.PI *100) /100);
```
* Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1
```javascript
console.log("Минимальное:" + " " + Math.min(10, 17, 5, 12, 15, 99, 1) + '. ' +
            "Максимальное: " + Math.max(10, 17, 5, 12, 15, 99, 1) );
```
* С помощью Math.random: 
  1. получить случайное число и округлить его до двух цифр после запятой
  ```
  console.log(Math.floor(Math.random() * 10 + 1 ));
  ```
  2. получить случайное число от 0 до Х
   ```
    console.log(Math.floor(Math.random() * X ));
    ```
* Получить число из строки '100$'
```javascript
console.log(parseInt('100$'));
```
[Вернуться к содержанию](#содержание)

## Объекты
* Создать объект с полем 'notebook' равным 'MacBook'
```javascript
let catalog = {
    notebook: 'MacBook'
}
```
* Добавить в объект из предыдущей задачи поле 'price', равное 1500 и поле currensy, 
равная 'dollar'
```javascript
catalog.price = 1500;
catalog.currensy = 'dollar';
```
* Добавить поле details, которое будет содержать объект с полями model и color 
(значения этих полей задайте сами)
```javascript
catalog.details = {};
catalog.details.model = 'XXX';
catalog.details.color = 'Red';
```
[Вернуться к содержанию](#содержание)

## Выражения и операторы. Преобразование типов.
* Записать в коротком виде:
```javascript
let a = a + 5;
// a += 5

let b = b * 15;
// b *= 15

let c = c - 3;
// c -= 3

let d = d % 2;
// d %= 2

let k = a + k;
// k += a;

let l = l * b;
// l *= b

let m = m * 3 * k;
//m *= 3*k;
```
* Возвести переменную в куб, используя краткую запись.
```javascript
X = Math.pow(X, 3);
```
* Если переменная равна “маленький”, присвоить ей значение “большой”, иначе 
“маленький”.
```javascript
if ( X === "маленький") {
    X = 'большой';
} else {
    X = 'маленький';
}
```
 Сделать тоже самое, используя тернарный оператор.
 ```javascript
X = X === "маленький"? X = 'большой': X = 'маленький';
```
* Записать условие, используя условный оператор if:
если переменная меньше нуля: присвоить ей строку “меньше нуля”
если переменная равна нулю: присвоить 1
если больше нуля: используя краткую запись, умножить переменную на 10
```javascript
if ( X < 0 ) {
    X = 'меньше нуля';
} else  if (X === 0 ) {
        X = 1
} else  X *= 10;
```
Сделать тоже самое, используя тернарный оператор.
```javascript
X = X < 0 ? X = 'меньше нуля' : X === 0? X = 1 : X *= 10;
```

* Используя конструктор switch, записать следующее условие:
```javascript
if(a == 'котик') {
  console.log('котик');
} else if(a == 'собака') {
  console.log('собака');
} else if(a == 'хомячок') {
  console.log('хомячок');
} else {
  console.log('неизвестное науке животное');
}
````
Важно: в консоли вы должны увидеть только одно условие из 4х.

```javascript
switch (a) {
    case 'котик':
        console.log('котик');
        break;
    case 'собака' :
        console.log('собака');
        break;
    case 'хомячок':
        console.log('хомячок');
        break;
    default:
        console.log('неизвестное науке животное');
}
```
* Чему равен x в каждом из примеров, объясните почему:
```javascript
let x = 0 || 'строка';
/* х = 'строка' т.к. оператор || запинается на true (возращает первое найденное true) 
первый 0 (Это false), он идёт дальше к 'строка' - она true а значит ее он и вернет.*/

let x = 1 && 'строка';
/* х = 'строка' т.к. оператор && запинается на false (возращает первое найденное false) 
первый 1 (Это true), он идёт дальше к 'строка' - она true а значит false отсутствует и 
он возращает последнее значение true.*/

let x = null || 1;
/* х = 1 т.к. оператор || запинается на true. Первый null (Это false), он идёт дальше 
к 1 - она true а значит ее он и вернет.*/

let x = null && 1;
/* х = null т.к. оператор && запинается на false первый null (Это false),  значит ее 
он и вернет.*/

let x = 1 && null;
/* х = null т.к. оператор && запинается на false. Первый 1 (Это true),  он идёт дальше 
к null - она false а значит ее он и вернет.*/

let x = null || 0 || 1;
/* х = 1 т.к. оператор || запинается на true. Первый 2 значения  (Это false),  
он идёт до 1 - она true а значит ее он и вернет.*/

let x = null && 0 && 1;
/* х = null т.к. оператор && запинается на false. первый null (Это false),  значит ее 
он и вернет.*/
```
* Чему равен x в каждом из примеров, объясните почему:
```javascript
let x = 1 + 2 + '3';
/* х = '33'; 1+2=3 ,a число + строка = 3 + '3' = '33'*/

let x = 1 + 2 - '1';
/* х = 2; 1+2=3 , a 3 - '1' = 2 (строку при вычитании js приводит к числу)*/

let x = '1' + 2 - 1;
/* х = 11; '1' + 2 = '12' , a '12' - 1 = 11 (строку при вычитании js приводит 
к числу)*/

let x = true + 1;
/* х = 2;  (true = 1) 1 + 1 = 2 */

let x = +'1' + 2;
/* х = 3;  +  перед '1'  приведет строку в число 1, а 1+2=3*/

let x = null + 2;
/* х = 2;  (null = 0) 0 + 2 = 2 */

let x = undefined + 2;
/* х = NaN;  (undefined = NaN) NaN + 2 = NaN */

let x = true + undefined;
/* х = NaN;  (undefined = NaN) 1 + NaN = NaN */

```
[Вернуться к содержанию](#содержание)

## Циклы
* В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре"
```javascript
let x = "Я стану крутым программистом";
let y = '';

for (let i = 0; i < x.length; i++) {
    if (x[i] === ' ') {
        y += ' ' + x[i+1].toLocaleUpperCase() ;
        ++i;
        continue
    }
    y += x[i];
}
```
* Вычислить факториал числа 9 (факториал числа - это произведение всех натуральных чисел от 1 до n включительно. например, 2! = 2*1 или 6! = 6*5*4*3*2*1) .
```javascript
let x = 9;
 for ( let i = 1; i < 9; i++) {
       x *= i;
 }
```
* Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"

```javascript
// первый вариант
let y = '';
let i = 10;
while( i >= 0) {
    y +=  i + ' ';
    --i
}
let x ="Просветление наступит через:" + ' '+ y ;
```
```javascript
   //второй вариант
   let i = 10;
   while( i >= 0) {
       console.log("Просветление наступит через:" + ' ' + i);
       --i
   }
   ```
* Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.
```javascript
for(let i = 1; i <= 20; i++){
    if( i%2 ) {
      console.log(i)
   } 
}
```
* На основе строки "теперь я мастер циклов javascript"  создать новую строку, где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы.
```javascript
let x = "теперь я мастер циклов javascript";
let y = '';

for (let i = 0; i < x.length; i++) {
    if (x[i] === ' ') {
        y += x[i+1].toLocaleUpperCase() ;
        ++i;
        continue
    }
    (i === 0) ? y += x[i].toLocaleUpperCase() : y += x[i];
}
```
[Вернуться к содержанию](#содержание)

## Массивы

* Используя функцию, найти последний элемент массива, не изменяя его.
```javascript
const searchLastElementArray = array => {
    return array[array.length - 1]
};
console.log(searchLastelementArray(['1','2','3','5']));
```
* Создать такую функцию, которая принимала бы массив [1,3,6], а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].
```javascript
const duplicateArray = array => {
    let x = array;
    return array.concat(x)
};
console.log(duplicateArray ([1,3,6]));
```
* Создать такую функцию, которая принимала бы любое число, а возвращала массив, заполненный числами от 1 до n.
```javascript
const fillArray = number => {
    let x = [];
        for (let i = 0; i <= number - 1; i++) {
        x[i] = i + 1 ;
        }
    return x
};
console.log(fillArray (10));
```
* Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"
```javascript
function deleteFirst(...arg) {
    for (let i = 0; i <= arg.length - 1; i++){
       arg[i].splice(0,1)
  }
       return arg
}
console.log(deleteFirst(['e','d','d',],['5','4','3','1'], ['d','d2']));
```
* Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба").
```javascript
function sort(string) {
  return  string.split('').sort(function rule(a, b) {
        let aCode = a.toLowerCase().replace('ё', 'е' + String.fromCharCode(1110));
        let bCode = b.toLowerCase().replace('ё', 'е' + String.fromCharCode(1110));
        if (aCode > bCode)
            return 1;
        if (aCode < bCode)
            return -1;
        else
            return 0;
    }).join('');
}
console.log(sort("екважбигёзд"));
```
* Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.
```javascript
function sort(array) {
        return array.sort(function(a,b){
            return a - b}).reverse();
}
console.log(sort([5, 2, -1, 6, 9, -9, 3]));
```
* Создать функцию, которая принимает 3 аргумента: любой произвольный массив, начальный номер элемента
 в массиве и конечный номер
Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам (с-по) (getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]), не изменяя исходный массив и не используя циклы.
```javascript
 const searchArray = function (array, firstNumber, lastNumber) {
    return array.splice(firstNumber,lastNumber)
};

console.log(searchArray(['а','б','в','г','д','е'], 2, 2));
```
* Удвоить элементы массива, не используя циклы.,
```javascript
 const doubleArray = array => {
    return array.map((el) => el * 2)
    };
console.log(doubleArray(['1','2','3','3','5','10']));
```
* Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.
```javascript
let array = ['1','2','3','4','5'];

    const deleteElArray = array => {
        array.splice(2,2);
        return  array
    };
console.log(deleteElArray(array));
```
* Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.
```javascript
let array = ['1','2','3','4','5'];

    const replaceElArray = array => {
        array.splice(2,2,'три','четыре');
        return  array
    };
console.log(replaceElArray(array));
```
* Вставить в произвольный массив любое значение после второго элемента.
```javascript

let array = ['1','2','3','4','5'];

    const insertElArray = array => {
        array.splice(2,0,'любое значение');
        return  array
    };
console.log(insertElArray(array));
```
* Отсортировать массив массив таким образом, чтобы вначале шли массивы с наименьшей длиной. 
Создать копию произвольного массив"
```javascript
const a = [['1','2','9','4','5'],['s','d'],['3', 2, 5],['10','12','92','56'] ];
const sortArray = array => {
  return  array.sort((prev,next) =>  prev.length - next.length);
};
console.log(sortArray(a));
```
* Отсортировать массив объектов по возрастающему количеству ног животных:
[
  {kind: "tarantula", info: {legs: 8, eyes: 8}},
  {kind: "french bulldog", info: {legs: 4, eyes: 2}},
  {kind: "human", info: {legs: 2, eyes: 2}},
  {kind: "lobster", info: {legs: 10, eyes: 2}},

]
```javascript
const sortArray = array => {

 return  array.sort((prev,next) =>  prev.info.legs - next.info.legs);
};
console.log(sortArray(a));
```
* Написать функцию, которая принимает массив услуг и два числа, представляющих собой время исполнения услуг, а также возвращает все услуги, находящиеся в диапазоне времени исполнения и отсортированные от меньшего времени исполнения к большему.
const services = [
  {service: "service1", executionTime: 56},
  {service: "service2", executionTime: 97},
  {service: "service3", executionTime: 23},
  {service: "service4", executionTime: 65},
  {service: "service5", executionTime: 2},
  {service: "service6", executionTime: 73},
  {service: "service7", executionTime: 82},
  {service: "service8", executionTime: 19},
  {service: "service9", executionTime: 33},
  {service: "service10", executionTime: 42},
]
* Например, filterServices(services, 20, 60).
```javascript
const filterServices = (array, from, before) => {
    let segment = array.filter(service =>  service.executionTime >= from && service.executionTime <= before);
    return segment.sort((prev, next) =>  prev.executionTime - next.executionTime);
};
console.log(filterServices(services, 20, 60));
```
[Вернуться к содержанию](#содержание)

## Функции
* Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль.
```javascript
function multiply(...arg) {
let x = 1;
   if (!arg.length) {
       x = 0;
       return x
   } else {
       for (let i = 0; i < arg.length; i++){
           x *= arg[i];
       }
       return x;
   }
}
let result = multiply(1, 12,3);
console.log(result);
```
* С помощью ри курсе вычислить факториал числа 10.
```javascript
function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(10));
```
* Создать функцию, которая принимает строку и возвращает  перевернутую строку ('test') = 'tset'.
```javascript
function mirror(x) {
    let y = '' ;
    for (let i = x.length -1 ;  i >= 0  ; --i) {
        y += x[i];
    }
    return y;
}
let result = mirror ('test');
console.log(result);

```
* Написать функцию, которая проверяет является ли слово палиндромом
```javascript
function palydromTest(x) {
    let z = String(x);
    let y = '' ;
    for (let i = z.length -1 ;  i >= 0  ; --i) {
        y += z[i];
    }
   return  z === y ? 'Слово полиндром' : 'Слово не полиндром';
}
let result = palydromTest(112121);
console.log(result);
```
* Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, 
где каждый символ разделен пробелом и заменён на значение символа из юникода. ((hello) => "104 101 108 108 111")
```javascript
function transferUnicod(str) {
    let y = "";
    for (let i = 0; i < str.length; i++) {
        y += str.charCodeAt(i) + " ";
    }
    return y;
}
console.log(transferUnicod("hello"));
```
* Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль ('test') =>
't'
'e'
's'
't'
```javascript
const recursion = string => {
    let x = string;
    if (x.length === 0) {
        return
    }
    console.log(x[0]);
    x = x.slice(1);
    return recursion(x)
};
recursion("TEST") ; // T E S T
```
* Создать две функции и дать им осмысленные названия:
  1. первая функция принимает массив и callback, возвращая строку из обработанного массива.
  2. вторая функция (callback) обрабатывает каждый элемент массива
 ```javascript
const color = ['red', 'white', 'black', 'blue'];
let result = remakeArray(color,cangeArray);

function remakeArray (array, callback) {
    let res = '';
    for (let i = 0; i < array.length; i++){
        res += callback(array[i]) + ' '
    }
    return res
}
function cangeArray (el){
    return el.toLocaleUpperCase()
}
```
[Вернуться к содержанию](#содержание)

## Доступ к DOM
```html
<html>
  <head></head>
  <body>
    <div>
        <p>Текст</p>
        <p>Другой</p>
        <p>Следующий</p>
        <p>Последний</p>
      </div>
      <div></div>
      <div></div>
  </body>
</html>
```
* Получить и вывести в консоль:
 1. head
 ```javascript
 let head = document.head;
console.log( document.head);
```
 2. body
```javascript
let body = document.body;
console.log( body);
```
 3. все дочерние элементы body
 ```javascript
let allChildBody = document.body.childNodes;
console.log( allChildBody);
```
 4. первый div и все его дочерние узлы
```javascript
let firstDiv = document.body.querySelector('div');
```
  4.1 вывести все дочерние узлы в консоль 
  ```javascript
let firstDiv = document.body.querySelector('div');
console.log( firstDiv.childNodes);
```
  4.2 вывести все дочерние узлы в консоль кроме первого
  ```javascript
let firstDiv = document.body.querySelector('div');
console.log( firstDiv.querySelectorAll('p' && ':not(:first-child)'));
```
[Вернуться к содержанию](#содержание)

## DOM
Код для задания лежит в папке  'dom_task'
* Создать функцию которая принимает два. Функция проверяет является ли первый элемент родителям для второго элемента isParent(parent, child) => true || false
```javascript
const isParent = (parent, child) =>  document.body.querySelector(`${parent}`).contains(document.body.querySelector(`${child}`));
console.log(isParent('div','p'));
```
* Найти элемент который находится перед списком ul
```javascript
let ul = document.body.querySelector('ul');
  console.log(ul.previousElementSibling ); //выведет предыдущий элемент
```
* Найти параграф и получить его текстовые содержимое
```javascript
  let p = document.querySelector('p');
  console.log(p.textContent); //Получил и вывел содержимое в консоль
```
* Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию виде объекта о типе узла, имени узла и количестве дочерних узлов.
```javascript
const infoElement = El => {
  let x = {
    type: '',
    name: '',
    child: ''
  };
  
  switch (document.querySelector(`${El}`).nodeType) {
    case 1:
      x.type = 'Узел элемент';
      break;
      case 2:
      x.type = 'Узел атрибута';
      break;
    case 3:
      x.type = 'Узел текстовый';
      break;
      case 8:
      x.type = 'Узел комментария';
      break;
    case 9:
      x.type = 'Объект документа';
      break;
    default:
      x.type = 'объект неопределён';
  }
  x.name = document.querySelector(`${El}`).nodeName;
  x.child = document.querySelector(`${El}`).childNodes;
return x
};
console.log(infoElement('div'))
```
* Найти список и добавить ему класс "list"
```javascript
 document.body.querySelector('ul').classList.toggle('list')
```
[Вернуться к содержанию](#содержание)


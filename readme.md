# JS Interview questions

## ReactJS Kanban board machine test
![kanban board](https://github.com/tripathirajan/reactjs-kanban-board-interview/blob/master/screenshots/kanban-board.png?raw=true, "Kanban board")
- <a href="https://github.com/tripathirajan/reactjs-kanban-board-interview">Click here for code</a>
- <a href="https://tripathirajan.github.io/reactjs-kanban-board-interview/">Click Here for demo</a>

## # Implementation

<h4> 1. Use of closure function</h4>

```js
const getCurrentLogger = (loggerName) => {
    let logger = console;
    return (...args) => {
        logger.log(loggerName, ...args);
    }
}
const logger = getCurrentLogger("[JS-Problem]");
logger("This is first logger");
logger("This is my second logger");

```
<h4> 2. Print array element with its occurance in array </h4>

```js
const findOccurance = (inptArr) => {
    if (!inptArr?.length) {
        return;
    }
    const count = {}
    for (const el of inptArr) {
        count[el] = count[el] ? count[el] + 1 : 1;
    }
    return count;
}

console.log(findOccurance([1, 2, 3, 5, 8, 6, 6, 6, 2, 5, 3, 3]));

```

<h4> 3. Check given number is prime or not </h4>

```js
const isPrime = (num) => {
    let isPrimeNumber = true;
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrimeNumber = false;
            break;
        }
    }
    return isPrimeNumber;
}

console.log(isPrime(10));
console.log(isPrime(11));
```

<h4> 4. Create custom debounce function </h4>

```js
const debounce = (callback, delay) => {
    const scope = this;
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(scope, args);
        }, delay)
    }
}
logger("Debounce start at:", new Date())

const handleInputChange = debounce((text) => {
    logger(text);
    logger("Debounce end at:", new Date())
}, 3000);

handleInputChange("Hello");
handleInputChange("Hello2");

```

<h4> 5. Function execute only once, no matter called many times
</h4>

```js
function once(fn, context) {
    var result;

    return function () {
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }

        return result;
    };
}
function showMessage() {
    console.log("once")
}
var msg = once(showMessage)
msg();
msg();

```
<h4> 6. Print number pattern </h4>

```js

let result = ""
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        result += j;
    }
    result += "\n";
}
console.log(result);
// result
// 1
// 12
// 123
// 1234
// 12345

```
<h4> 7. Get indexes of elements in an array equal to sum </h4>

```js

function findIndex(arr, target){
    const arrLen = arr.length || 0;
    if(arrLen < 2){
        return;
    }
    const result = [];
    const temp = [];
    for(let index=0; index<arrLen; index++){
        const arrEl = arr[index];
        const diff = target - arrEl;
        const tempValue = temp[diff];
        if(tempValue){
            result.push([index, tempValue])
        }
        else{
            temp[arrEl] = index;
        }
    }
  return result;
}

console.log(findIndex([1,3,2,5,4], 7));
```

<h4> 8. Write generic function to multiply of parameter and give result</h4>

```javascript
function multiply(x){
     return function (y){
        if(!y){
        return x;
    }
        return multiply((x * y));
    }
}
console.log(multiply(2)(3)(4)()); // 24
```
----
## #Output

+ Console
```js
console.log(1 < 2 < 3); // true
console.log(3 > 2 > 1); // false
```

+ Promise
```js
async function f() {
    let result = 'first!';
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
    });

    result = await promise;

    console.log(result);
}

f(); // done!
```
+ Hoisting

```js
console.log(a); // function a
var a; 
console.log(a); // function a
a=5; 
console.log(a);  // 5

function a(){
    return 50;
} 
console.log(a); // 5
```
+ Argument
```js
function show(){
    console.log(arguments)
}
show("hello", "world") // [Arguments] { '0': 'hello', '1': 'world' }
```
+ Rest operator
```js

function show(...params){
    console.log(params)
}
show("hello", "world") // [ 'hello', 'world' ]
```


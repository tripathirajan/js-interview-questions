
// use case of closure function

const getCurrentLogger = (loggerName) => {
    let logger = console;
    return (...args) => {
        //logger.log(loggerName, ...args);
    }
}
const logger = getCurrentLogger("[JS-Problem]");
logger("This is first logger");
logger("This is my second logger");

// find occurance of element in array

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

logger(findOccurance([1, 2, 3, 5, 8, 6, 6, 6, 2, 5, 3, 3]));

// check given number is prime or not

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

logger(isPrime(10));
logger(isPrime(11));

// debounce function
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

// call stack
logger("start")
setTimeout(() => {
    logger("delay callback")
}, 3000)
logger("end")

// scope

let d = 2
{
    let d = 3;
    console.log("1:", d)
}

{
    let d = 4;
    console.log("2:", d)
}

console.log("3:", d)

// once
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

// console

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

// promise
async function f() {
    let result = 'first!';
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
    });

    result = await promise;

    console.log(result);
}

f();


// number pattern
let result = ""
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        result += j;
    }
    result += "\n";
}
console.log(result);
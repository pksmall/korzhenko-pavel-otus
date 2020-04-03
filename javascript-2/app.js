'use strict';

var fn1 = () => {
    console.log('fn1')
    return Promise.resolve(1)
}

var fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000)
})

var fn3 = () => new Promise(resolve => {
    console.log('fn3')
    setTimeout(() => resolve(3), 1000)
})

var fn4 = () => new Promise(resolve => {
    console.log('fn4')
    setTimeout(() => resolve(4), 1000)
})

var reduce = (m, v) => {
    console.log('reduce')
    return m * v;
}

async function testArr(aFunc, rduce, initVal) {
    return aFunc.reduce((p, fn) => p.then(fn).then(v => rduce(v, initVal)), Promise.resolve());
}

testArr([fn1, fn2, fn3, fn4], reduce, 2).then(console.log);


function promiseReduce(asyncFunctions, reduce, initialValue) {
    return asyncFunctions.reduce((p, fn) => p.then(fn).then(v => reduce(v, initialValue)), Promise.resolve());
}

promiseReduce(
    [fn1, fn2],
    function (memo, value) {
        console.log('reduce')
        return memo * value
    },
    1
).then(console.log);

//setTimeout(() => { console.log("It's The End!"); }, 10000);
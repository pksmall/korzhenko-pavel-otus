'use strict';

// sum(2)(3)(4)(5)() => 14
const infiniteCurry = fn => {
    const next = (...args) => {
        return x => {
            if (!x) {
                return args.reduce((acc, a) => {
                    return fn.call(fn, acc, a)
                }, 0);
            }
            return next(...args, x);
        };
    };
    return next();
};

const iSum = infiniteCurry((x, y) => x + y);
console.log(iSum(1)(3)(4)(2)(5)(8)(11)(55) ());


setTimeout(() => { console.log("It's The End!"); }, 10000);

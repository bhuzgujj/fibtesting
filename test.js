const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

const fibMem = (n) => {
    let values = {
        0:BigInt(0),
        1:BigInt(1),
        2:BigInt(1)
    }
    function getFib(n) {
        if (n in values) {
            return values[n]
        }
        values[n] = getFib(n-1) + getFib(n-2);
        return values[n];
    }
    let ret = getFib(n);
    //console.log(values)
    return ret;
}

const fibMem2 = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo) 
    return memo[n];
}

const fibFor = (n) => {
    if (n <= 2) return 1;
    let v1 = BigInt(1);
    let v2 = BigInt(1);
    let vf = BigInt(1);
    for (let i =0; i < n - 2; i++) {
        vf = v1 + v2;
        v2 = v1;
        v1 = vf;
    }
    return vf;
}

const loggingWithTime= (func, args) => {
    console.time(func.name);
    console.log(func(args));
    console.timeLog(func.name);
    console.log("==============")
}

loggingWithTime(fib, 40)
loggingWithTime(fibMem, 40)
loggingWithTime(fibMem2, 40)
loggingWithTime(fibFor, 40)
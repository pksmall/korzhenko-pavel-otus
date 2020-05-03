const fact = (n) => {
    let resutl = 1;
    for (let i = 1; i <= n; i++) {
        resutl *= i;
    }
    return resutl;
};

module.exports = fact;

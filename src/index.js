module.exports = function reverse(n) {
    let reversed = n
        .toString()
        .split("")
        .reverse()
        .join("")
        .replace(/^0*||0*$/, "");

    return n < 0 ? reversed.slice(0, -1) : reversed;
};
